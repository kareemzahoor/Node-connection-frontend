import userStore from "./user";
import saylaniStore from "./saylani";
// import { configureStore } from "@reduxjs/toolkit";

// const store = configureStore({
//   reducer: {
//     userStore,
//     saylaniStore,
//   },
// });

// export default store;

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    userStore,
    saylaniStore,
  })
);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
