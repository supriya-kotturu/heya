import { combineReducers } from "redux";

import formReducer from "./form/formReducer";
import contactsReducer from "./contacts/contactsReducer";

const rootReducer = combineReducers({
  form: formReducer,
  contacts: contactsReducer,
});

export default rootReducer;
