import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import SearchUserForm from "../components/SearchUserForm/SearchUserForm";
import SearchedUsersList from "../components/SearchedUsersList/SearchedUsersList";
import UserIDCard from "../components/UserIDCard/UserIDCard";
import { fetchUsers } from "../../../shared/redux/actions/usersAction";

const UserNameSearchPage = () => {
  const [userName, setUserName] = useState("");
  const [showUserInfoCard, setShowUserInfoCard] = useState(false);
  const [openSearchedUsersList, setOpenSearchedUsersList] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <>
      <SearchUserForm
        {...{
          userName,
          setUserName,
          setShowUserInfoCard,
          setOpenSearchedUsersList,
        }}
      />
      {openSearchedUsersList && (
        <SearchedUsersList {...{ setUserName, setOpenSearchedUsersList }} />
      )}
      {showUserInfoCard && <UserIDCard />}
    </>
  );
};

export default UserNameSearchPage;
