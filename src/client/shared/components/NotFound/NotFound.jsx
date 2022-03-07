import React from "react";

import notFoundIcon from "../../assets/images/icons/not-found-icon.svg";

import "./NotFound.css";

const NotFound = ({ title }) => {
  return (
    <div className="not-found center">
      <div>
        <img src={notFoundIcon} alt="not-found" />
      </div>
      <div className="not-found__title">
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default NotFound;
