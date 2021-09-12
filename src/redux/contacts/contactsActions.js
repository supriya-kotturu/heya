import contactsTypes from './contactsTypes';
import { supabase } from '../../utils/supabase';
import { setErrorMessage } from '..';

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
      console.log(user);
      console.log(contacts);

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
      dispatch(setErrorMessage(message));
    } finally {
      // setLoading(false);
    }
  };
}

export const addNewContactInSupabase = (contact) => {
  console.log('here: ', contact);
  return async (dispatch, getState) => {
    const message = { title: '', description: '' };
    try {
      const user = supabase.auth.user();
      console.log(user);

      const { data, error } = await supabase.from('contacts').insert(
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

      if (data) {
        console.log(data);
        // dispatch(updateContacts(contact));
      }

      console.log(data, error);

      if (error) {
        throw error;
      }
    } catch (error) {
      message.title = 'Cannot add new contacts';
      message.description = error.message || error.error_description;
      console.log(error);
      dispatch(setErrorMessage(message));
    } finally {
    }
  };
};

export function updateContacts(newContact) {
  return {
    type: contactsTypes.UPDATE_CONTACTS,
    payload: newContact,
  };
}
