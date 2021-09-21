import contactsTypes from './contactsTypes';
import { supabase } from '../../utils/supabase';
import {
  setErrorMessage,
  resetFormState,
  setIsEditing,
  setFirstName,
  setLastName,
  setLandline,
  setWorkPhone,
  setWorkEmail,
  setEmail,
  setId,
} from '..';

export function getContacts(contactList) {
  return {
    type: contactsTypes.GET_CONTACTS,
    payload: contactList,
  };
}

export function getContactsFromSupabase() {
  return async (dispatch, getState) => {
    const message = { title: '', description: '' };
    try {
      const user = supabase.auth.user();

      let {
        data: contacts,
        error,
        status,
      } = await supabase
        .from('contacts')
        .select(
          'id, firstName, lastName, workPhone, landline, workEmail, email'
        )
        .eq('user_id', user.id);
      // console.log(user);
      // console.log(contacts);

      if (error && status !== 406) {
        throw error;
      }

      if (contacts) {
        dispatch(getContacts(contacts));
        return contacts;
      }
    } catch (error) {
      message.title = 'Cannot get your contacts';
      message.description = error.message || error.error_description;
      // dispatch(setErrorMessage(message));
    }
  };
}

export const addNewContactInSupabase = (contact) => {
  return async (dispatch) => {
    const message = { title: '', description: '' };
    try {
      const user = supabase.auth.user();
      const { error } = await supabase.from('contacts').insert(
        {
          id: contact.id,
          firstName: `${contact.firstName}`,
          lastName: `${contact.lastName}`,
          workPhone: `${contact.workPhone}`,
          landline: `${contact.landline}`,
          workEmail: `${contact.workEmail}`,
          email: `${contact.email}`,
          user_id: user.id,
        },
        { returning: 'minimal' }
      );

      dispatch(getContactsFromSupabase());
      dispatch(resetFormState());

      if (error) {
        throw error;
      }
    } catch (error) {
      message.title = 'Cannot add new contacts';
      message.description = error.message || error.error_description;
      console.log(error);
      dispatch(setErrorMessage(message));
    }
  };
};

export function editContact(contactId) {
  return async (dispatch, getState) => {
    dispatch(setIsEditing(true));
    const message = { title: '', description: '' };
    const contactList = getState().contacts.contactList.filter(
      (ele) => ele.id !== contactId
    );

    try {
      const { data: existingContact, error: existingContactError } =
        await supabase
          .from('contacts')
          .select(
            'id, firstName, lastName, workPhone, landline, workEmail, email'
          )
          .eq('id', contactId);

      // console.log('edit contact', existingContact);

      dispatch(setFirstName(existingContact[0].firstName));
      dispatch(setLastName(existingContact[0].lastName));
      dispatch(setWorkPhone(existingContact[0].workPhone));
      dispatch(setLandline(existingContact[0].landline));
      dispatch(setEmail(existingContact[0].email));
      dispatch(setWorkEmail(existingContact[0].workEmail));
      dispatch(setId(contactId));

      dispatch(getContacts(contactList));

      if (existingContactError) throw existingContactError;
    } catch (error) {
      message.title = 'Cannot edit the contact';
      message.description = error.message || error.error_description;
      console.log(error);
      dispatch(setErrorMessage(message));
    }
  };
}

export function updateContact(contactId, newContact) {
  return async (dispatch) => {
    const message = { title: '', description: '' };
    const user = await supabase.auth.user();
    try {
      const { error } = await supabase
        .from('contacts')
        .update({
          firstName: `${newContact.firstName}`,
          lastName: `${newContact.lastName}`,
          workPhone: `${newContact.workPhone}`,
          landline: `${newContact.landline}`,
          workEmail: `${newContact.workEmail}`,
          email: `${newContact.email}`,
          user_id: user.id,
        })
        .eq('id', contactId);

      dispatch(getContactsFromSupabase());
      dispatch(resetFormState());
      dispatch(setIsEditing(false));

      if (error) throw error;
    } catch (error) {
      message.title = 'Cannot update the contact';
      message.description = error.message || error.error_description;
      console.log(error);
      dispatch(setErrorMessage(message));
    } finally {
    }
  };
}

export function deleteContact(contactId) {
  return async (dispatch, getState) => {
    const message = { title: '', description: '' };
    const contactList = getState().contacts.contactList.filter(
      (ele) => ele.id !== contactId
    );
    try {
      const { error } = await supabase
        .from('contacts')
        .delete()
        .eq('id', contactId);

      // console.log('del : ', data, error);

      dispatch(getContacts(contactList));
      dispatch(getContactsFromSupabase());

      if (error) throw error;
    } catch (error) {
      message.title = 'Cannot delete the contact';
      message.description = error.message || error.error_description;
      console.log(error);
      dispatch(setErrorMessage(message));
    }
  };
}

export function updateContacts(newContact) {
  return {
    type: contactsTypes.UPDATE_CONTACTS,
    payload: newContact,
  };
}
