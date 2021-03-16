import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import News from "./reducer/NewsReducer";

const rootReducer = combineReducers({
  news: News,
});

const middleware = applyMiddleware(thunk);

export default createStore(rootReducer, middleware);
