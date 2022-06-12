import { ApolloLink, Observable } from "apollo-link";

class PusherLink extends ApolloLink {
  constructor(options) {
    super();

    this.pusher = options.pusher;
  }

  request(operation, forward) {
    const subscribeObservable = new Observable((_observer) => {});

    const prevSubscribe =
      subscribeObservable.subscribe.bind(subscribeObservable);

    subscribeObservable.subscribe = (observerOrNext, onError, onComplete) => {
      prevSubscribe(observerOrNext, onError, onComplete);

      const observer = getObserver(observerOrNext, onError, onComplete);

      let subscriptionChannel;

      forward(operation).subscribe({
        next: (data) => {
          subscriptionChannel =
            data?.extensions?.lighthouse_subscriptions.channel ?? null;

          if (!subscriptionChannel) {
            observer.next(data);
            observer.complete();

            return;
          }

          this.subscribeToChannel(subscriptionChannel, observer);
        },
      });

      return {
        closed: false,
        unsubscribe: () => {
          subscriptionChannel &&
            this.unsubscribeFromChannel(subscriptionChannel);
        },
      };
    };

    return subscribeObservable;
  }

  subscribeToChannel(subscriptionChannel, observer) {
    this.pusher
      .subscribe(subscriptionChannel)
      .bind("lighthouse-subscription", (payload) => {
        if (!payload.more) {
          this.unsubscribeFromChannel(subscriptionChannel);

          observer.complete();
        }

        const result = payload.result;

        if (result) {
          observer.next(result);
        }
      });
  }

  unsubscribeFromChannel(subscriptionChannel) {
    this.pusher.unsubscribe(subscriptionChannel);
  }
}

function getObserver(observerOrNext, onError, onComplete) {
  if (typeof observerOrNext === "function") {
    return {
      next: (v) => observerOrNext(v),
      error: (e) => onError && onError(e),
      complete: () => onComplete && onComplete(),
    };
  } else {
    return {
      next: (v) => observerOrNext.next && observerOrNext.next(v),
      error: (e) => observerOrNext.error && observerOrNext.error(e),
      complete: () => observerOrNext.complete && observerOrNext.complete(),
    };
  }
}

export default PusherLink;
