import { configureStore, combineReducers } from "@reduxjs/toolkit";

/** import reducers */
import postsReducer from "../features/posts/state/slice";

const appReducer = combineReducers({
  /** add reducers */
  postsReducer,
});

const store = configureStore({
  reducer: appReducer,
});

export default store;
