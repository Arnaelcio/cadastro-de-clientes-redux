import { GET_EMAIL, GET_PWD } from "../actions/Login";

const INITIAL_STATE = {
  Email: "",
  Senha: "",
};
export function LoginReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_EMAIL:
      return { ...state, Email: action.get_Email };

    case GET_PWD:
      return { ...state, Senha: action.get_Pwd };

    default:
      return state;
  }
}
