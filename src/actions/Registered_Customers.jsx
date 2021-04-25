export const GET_CUSTOMER_REGISTERED = "GET_CUSTOMER_REGISTERED";
export const UPDATE_CUSTOMER_REGISTERED = "UPDATE_CUSTOMER_REGISTERED";

export const getCusmtomerRegistered = (res) => ({ type: GET_CUSTOMER_REGISTERED, res});
export const upDateCusmtomerRegistered = (res) => ({ type: UPDATE_CUSTOMER_REGISTERED, res});
