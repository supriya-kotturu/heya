import messageTypes from "./messageTypes";

const initialMessageState = {
  title: "",
  description: "",
  type: "",
  showMessage: false,
};

const messageReducer = (state = initialMessageState, action) => {
  switch (action.type) {
    case messageTypes.SET_ERROR_MESSAGE:
      return {
        title: action.payload.title,
        description: action.payload.description || "Don't know what went wrong",
        type: "ERROR",
        showMessage: !state.showMessage,
      };

    case messageTypes.SET_SUCCESS_MESSAGE:
      return {
        title: action.payload.title,
        description: action.payload.description || "Don't know what went right",
        type: "SUCCESS",
        showMessage: !state.showMessage,
      };

    case messageTypes.RESET_MESSAGE:
      return initialMessageState;

    default:
      return state;
  }
};

export default messageReducer;
