import { useState } from "react";
// import PropTypes from "prop-types";

import FormInput from "./UI/FormInput";
import Button from "./UI/Button";

const ContactForm = (props) => {
  const [firstName, setFirstName] = useState("");
  //   const [lastName, setLastName] = useState("");
  //   const [phoneNumber, setPhoneNumber] = useState("");

  const handleChange = (e) => {
    setFirstName(e.target.value);
  };
  return (
    <form className="main-container md:grid md:grid-flow-row justify-items-left grid-cols-2 gap-x-6 gap-y-3 rounded-xl my-2">
      <FormInput
        label="First Name"
        type="text"
        name="firstName"
        value={firstName}
        onChange={handleChange}
      />

      <FormInput
        label="Last Name"
        type="text"
        name="lastName"
        value={firstName}
        onChange={handleChange}
      />

      <FormInput
        label="Work Contact"
        type="text"
        name="phoneNumber"
        value={firstName}
        max={10}
        onChange={handleChange}
      />

      <FormInput
        label="Landline"
        type="text"
        name="phoneNumber"
        value={firstName}
        max={10}
        onChange={handleChange}
      />

      <FormInput
        label="Work Email"
        type="text"
        name="phoneNumber"
        value={firstName}
        max={10}
        onChange={handleChange}
      />
      <FormInput
        label="Email"
        type="text"
        name="phoneNumber"
        value={firstName}
        max={10}
        onChange={handleChange}
      />
      {/* <TextArea label="Note" name="note" value="note" cols="67" rows="8" /> */}
      <div className="col-span-2 mx-auto p-6">
        <Button isSecondary={true} label="Cancel" />
        <Button isPrimary={true} label="Add Contact" />
      </div>
    </form>
  );
};

ContactForm.propTypes = {};

export default ContactForm;
