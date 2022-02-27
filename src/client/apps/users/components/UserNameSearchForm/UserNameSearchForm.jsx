import React from "react";
import { useDispatch } from "react-redux";

import { searchCharacter } from "../../../../shared/redux/actions/usersAction";

const UserNameSearchForm = () => {
  const dispatch = useDispatch();

  const onChange = (event) => {
    dispatch(searchCharacter(event.target.value));
  };

  return (
    <form>
      <input type="text" onChange={onChange} />
      <button>Search</button>
    </form>
  );
};

export default UserNameSearchForm;
