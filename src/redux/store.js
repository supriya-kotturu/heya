import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";

import { getContactsFromSupabase } from "../redux";
import rootReducer from "./rootReducer";

const middlewares = [ReduxThunk];
const store = createStore(rootReducer, applyMiddleware(...middlewares));

store.dispatch(getContactsFromSupabase());

export default store;
