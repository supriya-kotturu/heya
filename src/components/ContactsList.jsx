import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

const ContactsList = (props) => {
  const contactList = useSelector((state) => state.contacts.contactList);
  console.log("list: ", contactList);

  return <div>CONTACT LIST</div>;
};

ContactsList.propTypes = {};

export default ContactsList;
