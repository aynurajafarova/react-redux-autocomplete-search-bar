import { types } from "../actions/types";

const initialState = {
  users: [],
  errMessage: "",
  isLoading: false,
  inputValue: "",
  searchedUsers: [],
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
        searchedUsers: [],
      };
    case types.FETCH_USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: payload,
        errMessage: "",
        inputValue: "",
        searchedUsers: [],
      };
    case types.FETCH_USERS_FAILURE:
      return {
        ...state,
        isLoading: false,
        users: [],
        errMessage: payload,
        inputValue: "",
        searchedUsers: [],
      };
    case types.SET_INPUT_VALUE:
      return {
        ...state,
        isLoading: false,
        errMessage: "",
        inputValue: payload,
      };
    case types.GET_SEARCHED_USERS_LIST:
      return {
        ...state,
        isLoading: false,
        errMessage: "",
        searchedUsers: payload,
      };
    default:
      return state;
  }
};

export default usersReducer;
