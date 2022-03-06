import React from "react";
import { useSelector } from "react-redux";

import "./SearchedUsersList.css";

const SearchedUsersList = ({ setUserName, setOpenSearchedUsersList }) => {
  const { searchedUsers } = useSelector((state) => state.users);

  const handleClick = (name) => {
    setUserName(name);
    setOpenSearchedUsersList(false);
  };

  return (
    <div className="searched-users-list">
      {searchedUsers.length > 0 ? (
        <ul>
          {searchedUsers.map((user, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  handleClick(user.name);
                }}
              >
                {user.name}
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Not found</p>
      )}
    </div>
  );
};

export default SearchedUsersList;
