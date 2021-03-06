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

export const fetchSearchedUsersList = (usersArr, inputVal) => (dispatch) => {
  let searchedUsersList = usersArr.filter((item, index) => {
    return (
      inputVal &&
      item.name.substr(0, inputVal.length).toUpperCase() ==
        inputVal.toUpperCase()
    );
  });

  dispatch({
    type: types.FETCH_SEARCHED_USERS_LIST_SUCCESS,
    payload: searchedUsersList,
  });
};

export const fetchSingleUser = (usersArr, name) => (dispatch) => {
  const [singleUser] = usersArr.filter(
    (user) => user.name.toUpperCase() == name.toUpperCase()
  );

  dispatch({
    type: types.FETCH_SINGLE_USER_SUCCESS,
    payload: singleUser,
  });
};
