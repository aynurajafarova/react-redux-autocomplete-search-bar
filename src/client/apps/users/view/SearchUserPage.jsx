import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import SearchUserForm from "../components/SearchUserForm/SearchUserForm";
import SearchedUsersList from "../components/SearchedUsersList/SearchedUsersList";
import UserInfoCard from "../components/UserInfoCard/UserInfoCard";
import { fetchUsers } from "../../../shared/redux/actions/usersAction";

const UserNameSearchPage = () => {
  const [userName, setUserName] = useState("");
  const [showUserInfoCard, setShowUserInfoCard] = useState(false);

  const dispatch = useDispatch();
  const { showSearchedUsers } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <>
      <SearchUserForm {...{ userName, setUserName, setShowUserInfoCard }} />
      {showSearchedUsers && <SearchedUsersList {...{ setUserName }} />}
      {showUserInfoCard && <UserInfoCard />}
    </>
  );
};

export default UserNameSearchPage;
