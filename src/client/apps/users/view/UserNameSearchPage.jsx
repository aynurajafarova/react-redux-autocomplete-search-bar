import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import UserNameSearchForm from "../components/UserNameSearchForm/UserNameSearchForm";
import { fetchUsers } from "../../../shared/redux/actions/usersAction";

const UserNameSearchPage = () => {
  const dispatch = useDispatch();

  const { isLoading, users } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <section className="search-name">
      <UserNameSearchForm />
    </section>
  );
};

export default UserNameSearchPage;
