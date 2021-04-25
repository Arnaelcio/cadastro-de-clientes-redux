export const GET_EMAIL = "GET_EMAIL";
export const GET_PWD = "GET_PWD";

export const getEmail = (get_Email) => ({ type: GET_EMAIL, get_Email });
export const getPwd = (get_Pwd) => ({ type: GET_PWD, get_Pwd });
