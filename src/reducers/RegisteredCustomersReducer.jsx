import { GET_CUSTOMER_REGISTERED, UPDATE_CUSTOMER_REGISTERED  } from "../actions/Registered_Customers";

const INITIAL_STATE = {
  Customer_Registered:[]
};
export function RegisteredCustomersReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
      case GET_CUSTOMER_REGISTERED:
        return { ...state, Customer_Registered: [...state.Customer_Registered,  action.res]};
        case UPDATE_CUSTOMER_REGISTERED:
          return { ...state =  action.res};
    default:
      return state;
  }
}
