import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import Button from "./Button";
import { resetMessge } from "../../redux";

const Backdrop = ({ message }) => {
  const dispatch = useDispatch();

  return (
    <div
      className={`modal-backdrop ${!message.showMessage && "hidden"}`}
      onClick={() => {
        dispatch(resetMessge());
      }}
    />
  );
};

const ModalOverlay = ({ message }) => {
  const dispatch = useDispatch();

  return (
    <div className={`modal-container ${!message.showMessage && "hidden"}`}>
      <header>
        <h2 className="modal-header">{message.title}</h2>
      </header>
      <div>
        <p className="modal-message">{message.description}</p>
      </div>
      <footer className="modal-footer">
        <hr className="modal-hr" />
        <Button
          isPrimary={true}
          label="Okay"
          handleClick={() => dispatch(resetMessge())}
        />
      </footer>
    </div>
  );
};

const Modal = ({ message }) => {
  // modal fixed top-30% left-10 w-80% z-100 overflow-hidden" "top-1/3 left-1/4 "
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop message={message} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay message={message} />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

Modal.propTypes = {
  message: PropTypes.object,
};

export default Modal;
