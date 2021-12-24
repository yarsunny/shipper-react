import { configureStore, combineReducers } from "@reduxjs/toolkit";
import sidebarReducer from "../common/sidebarSlice";

const staticReducers = {
  sidebar: sidebarReducer,
};
const store = configureStore({
  reducer: {
    ...staticReducers,
  },
});

store.injectReducer = (key, asyncReducer) => {
  console.log(`Injecting ${key}Slice Dynamically`);
  store.asyncReducers = {};
  store.asyncReducers[key] = asyncReducer;
  store.replaceReducer(
    combineReducers({
      ...staticReducers,
      ...store.asyncReducers,
    })
  );
};

export default store;
