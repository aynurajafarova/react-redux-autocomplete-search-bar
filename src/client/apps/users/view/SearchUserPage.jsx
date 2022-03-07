import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import SearchUserForm from "../components/SearchUserForm/SearchUserForm";
import SearchedUsersList from "../components/SearchedUsersList/SearchedUsersList";
import UserIDCard from "../components/UserIDCard/UserIDCard";
import Header from "../../../shared/components/Header/Header";
import Loading from "../../../shared/components/Loading/Loading";
import Container from "../../../shared/components/Container/Container";
import { fetchUsers } from "../../../shared/redux/actions/usersAction";

const UserNameSearchPage = () => {
  const [userName, setUserName] = useState("");
  const [showUserIDCard, setShowUserIDCard] = useState(false);
  const [openSearchedUsersList, setOpenSearchedUsersList] = useState(false);

  const dispatch = useDispatch();

  const { isLoading } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <Container>
      <main>
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
      </main>
    </Container>
  );
};

export default UserNameSearchPage;
