import { useCallback, React, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';

import PropTypes from 'prop-types';

import FormInput from './UI/FormInput';
import Button from './UI/Button';
import Modal from './UI/Modal';

import {
  setFirstName,
  setLastName,
  setWorkPhone,
  setLandline,
  setWorkEmail,
  setEmail,
  addNewContactInSupabase,
  setErrorMessage,
  updateContact,
} from '../redux';

const ContactForm = ({ handleShowForm }) => {
  const firstName = useSelector((state) => state.form.firstName);
  const lastName = useSelector((state) => state.form.lastName);
  const workPhone = useSelector((state) => state.form.workPhone);
  const landline = useSelector((state) => state.form.landline);
  const workEmail = useSelector((state) => state.form.workEmail);
  const email = useSelector((state) => state.form.email);
  const isEditing = useSelector((state) => state.form.isEditing);
  const message = useSelector((state) => state.message);
  const id = useSelector((state) => state.form.id);

  const dispatch = useDispatch();

  const handleChange = {
    firstName: useCallback(
      (e) => {
        dispatch(setFirstName(e.target.value));
      },
      [dispatch]
    ),
    lastName: useCallback(
      (e) => dispatch(setLastName(e.target.value)),
      [dispatch]
    ),
    workPhone: useCallback(
      (e) => dispatch(setWorkPhone(e.target.value)),
      [dispatch]
    ),
    landline: useCallback(
      (e) => dispatch(setLandline(e.target.value)),
      [dispatch]
    ),
    workEmail: useCallback(
      (e) => dispatch(setWorkEmail(e.target.value)),
      [dispatch]
    ),
    email: useCallback((e) => dispatch(setEmail(e.target.value)), [dispatch]),
  };

  const capitalize = useCallback((name) => {
    const lower = name.toLowerCase();
    return name[0].toUpperCase() + lower.slice(1);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = { title: '', description: '' };

    if (!firstName && !lastName) {
      message.title = 'Who are they?';
      message.description =
        'First name and last names cannot be empty. Please enter the values before submitting';
      dispatch(setErrorMessage(message));
      return;
    } else if (!workPhone && !landline && !workEmail && !email) {
      message.title = 'How would we reach out to them?';
      message.description =
        'Please enter their contact number or email before submitting.';
      dispatch(setErrorMessage(message));
      return;
    } else {
      if (
        (workPhone && workPhone.length !== 10) ||
        (landline && landline.length !== 10)
      ) {
        // console.log(workPhone.match(/D/g), landline.match(/D/g));
        message.title = 'Invalid phone';
        message.description = 'Please enter a valid contact number.';
        dispatch(setErrorMessage(message));
      } else {
        const newContact = {
          id: uuid(),
          firstName: capitalize(firstName),
          lastName: lastName && capitalize(lastName),
          workPhone: workPhone,
          landline: landline,
          workEmail: workEmail,
          email: email,
        };
        const editContact = isEditing && {
          id: id,
          firstName: capitalize(firstName),
          lastName: lastName && capitalize(lastName),
          workPhone: workPhone,
          landline: landline,
          workEmail: workEmail,
          email: email,
        };

        // console.log(editContact, id);
        // console.log('id : ', id);

        isEditing && dispatch(updateContact(id, editContact));
        !isEditing && dispatch(addNewContactInSupabase(newContact));
      }
    }
  };

  return (
    <Fragment>
      <Modal message={message} />
      <form
        className="main-container md:grid md:grid-flow-row justify-items-left grid-cols-2 gap-x-6 gap-y-3 rounded-xl my-2"
        onSubmit={handleSubmit}
      >
        <FormInput
          label="First Name"
          type="text"
          name="firstName"
          placeholder="Clark Joseph"
          value={firstName}
          onChange={handleChange.firstName}
        />

        <FormInput
          label="Last Name"
          type="text"
          name="lastName"
          placeholder="Kent"
          value={lastName}
          onChange={handleChange.lastName}
        />

        <FormInput
          label="Work Contact"
          type="text"
          name="workPhone"
          placeholder="8825963255"
          value={workPhone}
          max={10}
          onChange={handleChange.workPhone}
        />

        <FormInput
          label="Landline"
          type="text"
          name="landline"
          placeholder="7785425899"
          value={landline}
          max={10}
          onChange={handleChange.landline}
        />

        <FormInput
          label="Work Email"
          type="email"
          name="workEmail"
          placeholder="clark.kent@dailyplanet.org"
          value={workEmail}
          max={10}
          onChange={handleChange.workEmail}
        />
        <FormInput
          label="Email"
          type="email"
          name="email"
          placeholder="clark@yahoo.com"
          value={email}
          max={10}
          onChange={handleChange.email}
        />
        {/* <TextArea label="Note" name="note" value="note" cols="67" rows="8" /> */}

        <div className="col-span-2 mx-auto p-6">
          <Button
            isSecondary={true}
            label="Cancel"
            handleClick={handleShowForm}
          />
          <Button
            isPrimary={true}
            isSubmit={true}
            label={isEditing ? 'Confirm' : `Add Contact`}
          />
        </div>
      </form>
    </Fragment>
  );
};

ContactForm.propTypes = {
  handleShowForm: PropTypes.func,
};

export default ContactForm;
