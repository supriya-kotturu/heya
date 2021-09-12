import contactsTypes from "./contactsTypes";
import { supabase } from "../../utils/supabase";

const initialContactList = {
  loading: false,
  contactList: !supabase.auth.user()
    ? [
        {
          id: "1",
          firstName: "Bob",
          lastName: "Marley",
          workPhone: "7785469311",
          email: "bob.marley@yahoo.com",
        },
        {
          id: "2",
          firstName: "Maddison",
          lastName: "Smith",
          workPhone: "7866329822",
          email: "maddie.smith34@gmail.com",
        },
      ]
    : [],
};

const contactsReducer = (state = initialContactList, action) => {
  switch (action.type) {
    case contactsTypes.GET_CONTACTS:
      return {
        contactList: [...action.payload],
      };

    case contactsTypes.UPDATE_CONTACTS:
      return {
        contactList: [action.payload, ...state.contactList],
      };

    default:
      return state;
  }
};

export default contactsReducer;
