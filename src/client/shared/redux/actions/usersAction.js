import { types } from "./types";
import { getAllUsers } from "../../../apps/users/api";

export const fetchUsers = () => (dispatch) => {
  dispatch({ type: types.FETCH_USERS_PENDING });

  getAllUsers()
    .then((response) =>
      dispatch({
        type: types.FETCH_USERS_SUCCESS,
        payload: response.data,
      })
    )
    .catch((error) =>
      dispatch({
        type: types.FETCH_USERS_FAILURE,
        payload: error.message,
      })
    );
};

export const setInputValue = (value) => (dispatch) => {
  dispatch({
    type: types.SET_INPUT_VALUE,
    payload: value,
  });
};
