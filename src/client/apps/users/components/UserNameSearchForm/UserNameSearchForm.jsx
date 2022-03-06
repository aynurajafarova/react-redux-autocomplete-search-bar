import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getSearchedUsersList,
  hideSearchedUsersList,
} from "../../../../shared/redux/actions/usersAction";

const UserNameSearchForm = ({ userName, setUserName }) => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);

  const handleSearchCharacter = (event) => {
    setUserName(event.target.value);

    event.target.value
      ? dispatch(getSearchedUsersList(users, event.target.value))
      : dispatch(hideSearchedUsersList());
  };

  return (
    <form>
      <input type="text" value={userName} onChange={handleSearchCharacter} />
      <button>Search</button>
    </form>
  );
};

export default UserNameSearchForm;
