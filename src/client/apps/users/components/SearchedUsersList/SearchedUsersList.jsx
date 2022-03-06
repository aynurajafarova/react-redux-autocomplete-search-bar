import React from "react";
import { useSelector } from "react-redux";

const SearchedUsersList = () => {
  const { searchedUsers } = useSelector((state) => state.users);

  return (
    <div>
      <div>Results: {searchedUsers.length}</div>
      {searchedUsers.length > 0 ? (
        <ul>
          {searchedUsers.map((user, index) => {
            return <li key={index}>{user.name}</li>;
          })}
        </ul>
      ) : (
        "User not found"
      )}
    </div>
  );
};

export default SearchedUsersList;
