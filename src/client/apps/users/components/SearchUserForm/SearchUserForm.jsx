import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getSearchedUsersList,
  hideSearchedUsersList,
} from "../../../../shared/redux/actions/usersAction";

const SearchUserForm = ({ userName, setUserName }) => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);

  const handleUserName = (event) => {
    setUserName(event.target.value);

    event.target.value
      ? dispatch(getSearchedUsersList(users, event.target.value))
      : dispatch(hideSearchedUsersList());
  };

  return (
    <form>
      <input type="text" value={userName} onChange={handleUserName} />
      <button>Search</button>
    </form>
  );
};

export default SearchUserForm;
