import contactsTypes from "./contactsTypes";

export function updateContacts(newContact) {
  return {
    type: contactsTypes.UPDATE_CONTACTS,
    payload: newContact,
  };
}
