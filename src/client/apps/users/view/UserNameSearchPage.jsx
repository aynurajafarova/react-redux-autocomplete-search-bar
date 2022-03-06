import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import UserNameSearchForm from "../components/UserNameSearchForm/UserNameSearchForm";
import SearchedUsersList from "../components/SearchedUsersList/SearchedUsersList";
import { fetchUsers } from "../../../shared/redux/actions/usersAction";

const UserNameSearchPage = () => {
  const [userName, setUserName] = useState("");

  const dispatch = useDispatch();
  const { showSearchedUsers } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <section className="search-name">
      <UserNameSearchForm {...{ userName, setUserName }} />
      {showSearchedUsers && <SearchedUsersList {...{ setUserName }} />}
    </section>
  );
};

export default UserNameSearchPage;
