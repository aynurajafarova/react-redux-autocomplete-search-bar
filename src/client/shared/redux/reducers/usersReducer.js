import { types } from "../actions/types";

const initialState = {
  users: [],
  errMessage: "",
  isLoading: false,
  searchedCharacter: "",
};

const usersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.FETCH_USERS_PENDING:
      return {
        ...state,
        isLoading: true,
        users: [],
        errMessage: "",
        searchedCharacter: "",
      };
    case types.FETCH_USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: payload,
        errMessage: "",
        searchedCharacter: "",
      };
    case types.FETCH_USERS_FAILURE:
      return {
        ...state,
        isLoading: false,
        users: [],
        errMessage: payload,
        searchedCharacter: "",
      };
    case types.SEARCH_CHARACTER:
      return {
        ...state,
        isLoading: false,
        users: [],
        errMessage: "",
        searchedCharacter: payload,
      };
    default:
      return state;
  }
};

export default usersReducer;
