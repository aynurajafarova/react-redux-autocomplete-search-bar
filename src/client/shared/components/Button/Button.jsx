import React from "react";

import "./Button.css";

const Button = ({ type, disabled, text, color, icon }) => {
  return (
    <button className={`btn btn-${color} center`} {...{ type, disabled }}>
      {icon} {text}
    </button>
  );
};

export default Button;
