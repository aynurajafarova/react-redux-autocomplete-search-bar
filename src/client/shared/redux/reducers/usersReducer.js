import { types } from "../actions/types";

const initialState = {
  users: [],
  errMessage: "",
  isLoading: false,
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
        searchedUsers: [],
      };
    case types.FETCH_USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: payload,
        errMessage: "",
        searchedUsers: [],
      };
    case types.FETCH_USERS_FAILURE:
      return {
        ...state,
        isLoading: false,
        users: [],
        errMessage: payload,
        searchedUsers: [],
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
