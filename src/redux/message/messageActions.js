import messageTypes from "./messageTypes";

export function setErrorMessage(error) {
  return {
    type: messageTypes.SET_ERROR_MESSAGE,
    payload: error,
  };
}

export function setSuccessMessage(message) {
  return {
    type: messageTypes.SET_SUCCESS_MESSAGE,
    payload: message,
  };
}

export function resetMessge() {
  return {
    type: messageTypes.RESET_MESSAGE,
  };
}
