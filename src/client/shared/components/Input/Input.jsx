import React from "react";

import "./Input.css";

const Input = ({ type, value, onChange, placeholder }) => {
  return (
    <input
      className="search-input"
      {...{ type, value, onChange, placeholder }}
    />
  );
};

export default Input;
