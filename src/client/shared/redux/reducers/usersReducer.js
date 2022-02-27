import { types } from "../actions/types";

const initialState = {
  users: [],
  errMessage: "",
  isLoading: false,
};

const usersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.FETCH_USERS_PENDING:
      return {
        ...state,
        isLoading: true,
        users: [],
        errMessage: "",
      };
    case types.FETCH_USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: payload,
        errMessage: "",
      };
    case types.FETCH_USERS_FAILURE:
      return {
        ...state,
        isLoading: false,
        users: [],
        errMessage: payload,
      };
    default:
      return state;
  }
};

export default usersReducer;
