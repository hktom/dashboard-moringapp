export const REQ_COUNTRY = `countries{
    id
    name
    name_fr
}`;
export const REQ_CONDITION = `conditions{
    id
    name
    name_fr
    value
}`;
export const REQ_CITY = `cities{
    id
    name
    name_fr
    country{
        id
        name
        name_fr
    }
}`;
export const REQ_CATEGORY = `categories{
    id
    name
    name_fr
    image
    description
    parent{
        id
        name
    }
    service{
        id
        name
    }
    condition{
        id
        name
        value
    }
}`;
export const REQ_SERVICE = `services{
    id
    name
    name_fr
    image
    description
    categories{
        id
        name
    }
    condition{
        id
        name
        value
    }
}`;
export const REQ_TASK = `tasks{
    id
    name
    image
    description
    can_be_booked
    can_be_urgent
    accept_offer
    price_by_hour
    min_price
    min_price
    category{
        id
        name
    }
    condition{
        id
        name
        value
    }
}`;

export const REQ_ROLE = `roles{
    id
    name
    value
}`;

export const REQ_USER = `
    id
    first_name
    last_name
    email
    gender
    avatar
    birth_year
    street
    mobile
    certificate
    bio
    zip_code
    url
    role{
        id
        name
        value
    }
    condition{
        id
        name
        value
    }
    city{
        id
        name
        country{
            id
            name
        }
    }
    jobs{
          id
          is_completed
          price_by_hour
          total_hours
          street
          description
          the_date
          the_time
          payment_due_date
          city{
              id
              name
              country{
                  id
                  name
              }
          }
          condition{
              id
              name
          }
      }
    tasks{
        id
        name
        description
        image
        can_be_booked
        can_be_urgent
        accept_offer
        min_price
        price_by_hour
        created_at
        jobs{
            id
            is_completed
            price_by_hour
            total_hours
            street
            description
            the_date
            the_time
            payment_due_date
            city{
                id
                name
                country{
                    id
                    name
                }
            }
            condition{
                id
                name
                value
            }
        }
        category{
            id
            name
        }
        condition{
            id
            name
            value
        }
    }
    created_at
    updated_at


`;
export const REQ_QUESTION = `questions{
    id
    content
    image
    like{
        id
        user{
            id
            first_name
            last_name
            avatar
        }
    }
    replies{
        id
        image
        content
        user{
            id
            first_name
            last_name
            avatar
        }
    }
    user{
        id
        first_name
        last_name
        avatar
    }
    created_at
}`;

export const REQ_CONTENT = `pages{
    id
    title
    content
    image
    value
    label
    link
}`;

export const REQ_ROOM = `rooms{
    id
    delete_from
    delete_to
    chats{
        id
        content
        image
        created_at
        user{
            id
            first_name
            last_name
            avatar
        }
    }
    user_from{
        id
        first_name
        last_name
        avatar
    }
    user_to{
        id
        first_name
        last_name
        avatar
    }
    created_at
}`;
