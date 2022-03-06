import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import UserNameSearchForm from "../components/UserNameSearchForm/UserNameSearchForm";
import SearchedUsersList from "../components/SearchedUsersList/SearchedUsersList";
import { fetchUsers } from "../../../shared/redux/actions/usersAction";

const UserNameSearchPage = () => {
  const dispatch = useDispatch();

  const { searchedUsers } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <section className="search-name">
      <UserNameSearchForm />
      {searchedUsers.length > 0 && <SearchedUsersList />}
    </section>
  );
};

export default UserNameSearchPage;
