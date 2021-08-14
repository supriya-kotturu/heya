import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";

import rootReducer from "./rootReducer";

const middlewares = [ReduxThunk];
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
