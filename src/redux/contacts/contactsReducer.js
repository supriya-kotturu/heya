import contactsTypes from "./contactsTypes";

const initialContactList = {
  contactList: [
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
  ],
};

const contactsReducer = (state = initialContactList, action) => {
  switch (action.type) {
    case contactsTypes.UPDATE_CONTACTS:
      return {
        contactList: [action.payload, ...state.contactList],
      };

    default:
      return state;
  }
};

export default contactsReducer;
