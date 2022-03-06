import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchSearchedUsersList,
  hideSearchedUsersList,
  fetchSingleUser,
} from "../../../../shared/redux/actions/usersAction";
import Input from "../../../../shared/components/Input/Input";
import Button from "../../../../shared/components/Button/Button";

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
    <form onSubmit={onSubmit} className="center">
      <Input
        type="text"
        placeholder="Search user by name..."
        value={userName}
        onChange={handleUserName}
      />
      <Button
        type="submit"
        disabled={!userName}
        text="Search"
        color="warning"
        icon={
          <svg
            fill="#24292f"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            width="20px"
            height="20px"
          >
            <path d="M 24 2.8886719 C 12.365714 2.8886719 2.8886719 12.365723 2.8886719 24 C 2.8886719 35.634277 12.365714 45.111328 24 45.111328 C 29.036552 45.111328 33.664698 43.331333 37.298828 40.373047 L 52.130859 58.953125 C 52.130859 58.953125 55.379484 59.435984 57.396484 57.333984 C 59.427484 55.215984 58.951172 52.134766 58.951172 52.134766 L 40.373047 37.298828 C 43.331332 33.664697 45.111328 29.036548 45.111328 24 C 45.111328 12.365723 35.634286 2.8886719 24 2.8886719 z M 24 7.1113281 C 33.352549 7.1113281 40.888672 14.647457 40.888672 24 C 40.888672 33.352543 33.352549 40.888672 24 40.888672 C 14.647451 40.888672 7.1113281 33.352543 7.1113281 24 C 7.1113281 14.647457 14.647451 7.1113281 24 7.1113281 z" />
          </svg>
        }
      />
    </form>
  );
};

export default SearchUserForm;
