import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { getSearchedUsersList } from "../../../../shared/redux/actions/usersAction";

const UserNameSearchForm = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);

  const handleSearchCharacter = (event) => {
    dispatch(getSearchedUsersList(users, event.target.value));
  };

  return (
    <form>
      <input type="text" onChange={handleSearchCharacter} />
      <button>Search</button>
    </form>
  );
};

export default UserNameSearchForm;
