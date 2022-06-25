import { getDatabase, ref, set } from "firebase/database";

import { collection, addDoc, Timestamp } from "firebase/firestore";

import { firebaseDB } from "../../_app.page";

export const addRoomRequest = (data: any) => {
  const db = getDatabase();
  set(ref(db, "rooms"), {
    created_at: Date.now(),
    updated_at: Date.now(),
    deleted_from: false,
    deleted_to: false,
    from: data.from,
    to: data.to,
    last_message: "...",
    users: [data.from.id, data.from.to],
  });
};

export const addChatRequest = (data: any) => {
  let payload = {
    created_at: Timestamp.fromDate(new Date()),
    content: data.content,
    room: data.room,
    user: data.user?.id,
  };

  addDoc(collection(firebaseDB, "messages"), payload);
};
