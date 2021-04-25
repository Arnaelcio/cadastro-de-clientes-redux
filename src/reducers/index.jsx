import { combineReducers } from "redux";

import { LoginReducer } from "./LoginReducer";
import { RegisterCustomersReducer } from "./RegisterCustomersReducer";
import { RegisteredCustomersReducer } from "./RegisteredCustomersReducer";

const rootReducer = combineReducers({
  LoginReducer,
  RegisterCustomersReducer,
  RegisteredCustomersReducer,
});

export default rootReducer;
