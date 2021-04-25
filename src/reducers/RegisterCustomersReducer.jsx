import { GET_NAME_REGISTER, GET_AGE_REGISTER, GET_EMAIL_REGISTER } from "../actions/Register_Customers";

const INITIAL_STATE = {
  Nome_Registro: "",
  Idade_Registro: "",
  Email_Registro: "",
};
export function RegisterCustomersReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_NAME_REGISTER:
      return { ...state, Nome_Registro: action.get_Name_Register};
    case GET_EMAIL_REGISTER:
      return { ...state, Email_Registro: action.get_Email_Register};
    case GET_AGE_REGISTER:
      return { ...state, Idade_Registro: action.get_Age_Register };
    default:
      return state;
  }
}
