import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import SearchUserForm from "../components/SearchUserForm/SearchUserForm";
import SearchedUsersList from "../components/SearchedUsersList/SearchedUsersList";
import UserInfoCard from "../components/UserInfoCard/UserInfoCard";
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
      {showUserInfoCard && <UserInfoCard />}
    </>
  );
};

export default UserNameSearchPage;
