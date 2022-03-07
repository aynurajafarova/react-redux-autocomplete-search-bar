import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import SearchUserForm from "../components/SearchUserForm/SearchUserForm";
import SearchedUsersList from "../components/SearchedUsersList/SearchedUsersList";
import UserIDCard from "../components/UserIDCard/UserIDCard";
import Header from "../../../shared/components/Header/Header";
import { fetchUsers } from "../../../shared/redux/actions/usersAction";

const UserNameSearchPage = () => {
  const [userName, setUserName] = useState("");
  const [showUserIDCard, setShowUserIDCard] = useState(false);
  const [openSearchedUsersList, setOpenSearchedUsersList] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <>
      <Header title="Autocomplete" />
      <SearchUserForm
        {...{
          userName,
          setUserName,
          setShowUserIDCard,
          setOpenSearchedUsersList,
        }}
      />
      {openSearchedUsersList && (
        <SearchedUsersList {...{ setUserName, setOpenSearchedUsersList }} />
      )}
      {showUserIDCard && <UserIDCard />}
    </>
  );
};

export default UserNameSearchPage;
