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

export const getSearchedUsersList = (usersArr, inputVal) => (dispatch) => {
  let searchedUsersList = usersArr.filter((item, index) => {
    return (
      inputVal &&
      item.name.substr(0, inputVal.length).toUpperCase() ==
        inputVal.toUpperCase()
    );
  });

  dispatch({
    type: types.GET_SEARCHED_USERS_LIST_SUCCESS,
    payload: searchedUsersList,
  });
};

export const hideSearchedUsersList = () => (dispatch) => {
  dispatch({
    type: types.HIDE_SEARCHED_USERS_LIST,
  });
};
