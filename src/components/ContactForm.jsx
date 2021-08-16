import { useSelector, useDispatch } from "react-redux";
import uuid from "react-uuid";

// import PropTypes from "prop-types";

import FormInput from "./UI/FormInput";
import Button from "./UI/Button";

import {
  setFirstName,
  setLastName,
  setWorkPhone,
  setLandline,
  setWorkEmail,
  setEmail,
  updateContacts,
} from "../redux";

const ContactForm = () => {
  const firstName = useSelector((state) => state.form.firstName);
  const lastName = useSelector((state) => state.form.lastName);
  const workPhone = useSelector((state) => state.form.workPhone);
  const landline = useSelector((state) => state.form.landline);
  const workEmail = useSelector((state) => state.form.workEmail);
  const email = useSelector((state) => state.form.email);
  const contacts = useSelector((state) => state.contacts.contactList);
  const dispatch = useDispatch();

  const handleChange = {
    firstName: (e) => dispatch(setFirstName(e.target.value)),
    lastName: (e) => dispatch(setLastName(e.target.value)),
    workPhone: (e) => dispatch(setWorkPhone(e.target.value)),
    landline: (e) => dispatch(setLandline(e.target.value)),
    workEmail: (e) => dispatch(setWorkEmail(e.target.value)),
    email: (e) => dispatch(setEmail(e.target.value)),
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newContact = {
      id: uuid(),
      firstName: firstName,
      lastName: lastName,
      workPhone: workPhone,
      landline: landline,
      workEmail: workEmail,
      email: email,
    };
    dispatch(updateContacts(newContact));
    console.log(contacts);
  };

  return (
    <form
      className="main-container md:grid md:grid-flow-row justify-items-left grid-cols-2 gap-x-6 gap-y-3 rounded-xl my-2"
      onSubmit={handleSubmit}
    >
      <FormInput
        label="First Name"
        type="text"
        name="firstName"
        value={firstName}
        onChange={handleChange.firstName}
      />

      <FormInput
        label="Last Name"
        type="text"
        name="lastName"
        value={lastName}
        onChange={handleChange.lastName}
      />

      <FormInput
        label="Work Contact"
        type="text"
        name="workPhone"
        value={workPhone}
        max={10}
        onChange={handleChange.workPhone}
      />

      <FormInput
        label="Landline"
        type="text"
        name="landline"
        value={landline}
        max={10}
        onChange={handleChange.landline}
      />

      <FormInput
        label="Work Email"
        type="text"
        name="phoneNumber"
        value={workEmail}
        max={10}
        onChange={handleChange.workEmail}
      />
      <FormInput
        label="Email"
        type="text"
        name="phoneNumber"
        value={email}
        max={10}
        onChange={handleChange.email}
      />
      {/* <TextArea label="Note" name="note" value="note" cols="67" rows="8" /> */}

      <div className="col-span-2 mx-auto p-6">
        <Button isSecondary={true} label="Cancel" />
        <Button isPrimary={true} isSubmit={true} label="Add Contact" />
      </div>
    </form>
  );
};

// ContactForm.propTypes = {};

export default ContactForm;
