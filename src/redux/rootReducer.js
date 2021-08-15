import { combineReducers } from "redux";

import formReducer from "./form/formReducer";
import contactsReducer from "./contacts/contactsReducer";
import messageReducer from "./message/messageReducer";

const rootReducer = combineReducers({
  form: formReducer,
  contacts: contactsReducer,
  message: messageReducer,
});

export default rootReducer;
