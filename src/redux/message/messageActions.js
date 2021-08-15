import messageTypes from "./messageTypes";

export function setErrorMessage(error) {
  resetMessge();
  return {
    type: messageTypes.SET_ERROR_MESSAGE,
    payload: error,
  };
}

export function setSuccessMessage(message) {
  resetMessge();
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
