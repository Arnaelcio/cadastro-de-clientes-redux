import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import rootRedeucer from "../reducers/index";
const persistConfig = {
  key: "customers",
  storage,
  whitelist: ["RegisteredCustomersReducer", "LoginReducer"],
};
const persistedReducer = persistReducer(
  persistConfig,
  rootRedeucer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
