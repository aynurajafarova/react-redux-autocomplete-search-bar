import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchSearchedUsersList,
  hideSearchedUsersList,
  fetchSingleUser,
} from "../../../../shared/redux/actions/usersAction";

const SearchUserForm = ({ userName, setUserName, setShowUserInfoCard }) => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);

  const handleUserName = (event) => {
    setUserName(event.target.value);

    event.target.value
      ? dispatch(fetchSearchedUsersList(users, event.target.value))
      : dispatch(hideSearchedUsersList());
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchSingleUser(users, userName));
    setShowUserInfoCard(true);
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={userName} onChange={handleUserName} />
      <button disabled={!userName} type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchUserForm;
