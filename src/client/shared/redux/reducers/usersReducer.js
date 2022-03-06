import { types } from "../actions/types";

const initialState = {
  users: [],
  errMessage: "",
  isLoading: false,
  inputValue: "",
};

const usersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.FETCH_USERS_PENDING:
      return {
        ...state,
        isLoading: true,
        users: [],
        errMessage: "",
        inputValue: "",
      };
    case types.FETCH_USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: payload,
        errMessage: "",
        inputValue: "",
      };
    case types.FETCH_USERS_FAILURE:
      return {
        ...state,
        isLoading: false,
        users: [],
        errMessage: payload,
        inputValue: "",
      };
    case types.SET_INPUT_VALUE:
      return {
        ...state,
        isLoading: false,
        users: [],
        errMessage: "",
        inputValue: payload,
      };
    default:
      return state;
  }
};

export default usersReducer;
