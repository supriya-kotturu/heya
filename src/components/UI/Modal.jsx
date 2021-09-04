import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import Button from "./Button";
import { resetMessge } from "../../redux";

const Modal = ({ message }) => {
  const dispatch = useDispatch();
  // modal fixed top-30% left-10 w-80% z-100 overflow-hidden" "top-1/3 left-1/4 "
  return (
    <Fragment>
      <div
        className={`backdrop fixed bg-gray-700 bg-opacity-30  top-0 left-0 w-full h-full z-10 ${
          !message.showMessage && "hidden"
        }`}
      />
      <div
        className={`modal md:w-3/5 w-3/4 lg:w-1/4 mx-auto h-72 m-3 bg-white  font-sans rounded-lg shadow-lg fixed z-50 inset-40 overflow-hidden text-center ${
          !message.showMessage && "hidden"
        }`}
      >
        <header>
          <h2 className="header text-3xl font-bold p-6 bg-blue-002 rounded-t-lg text-white-003">
            {message.title}
          </h2>
        </header>
        <div>
          <p className="message p-4 mx-6 my-3 text-medium-02">
            {message.description}
          </p>
        </div>
        <footer className="footer px-6 py-3 text-right">
          <hr />
          <Button
            isPrimary={true}
            label="Okay"
            handleClick={() => dispatch(resetMessge())}
          />
        </footer>
      </div>
    </Fragment>
  );
};

Modal.propTypes = {
  message: PropTypes.object,
};

export default Modal;
