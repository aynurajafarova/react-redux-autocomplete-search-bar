import React from "react";
import { useSelector } from "react-redux";

const SearchedUsersList = () => {
  const { searchedUsers } = useSelector((state) => state.users);

  return (
    <div>
      <ul>
        {searchedUsers.map((user, index) => {
          return <li key={index}>{user.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default SearchedUsersList;
