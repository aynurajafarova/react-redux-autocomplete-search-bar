import React from "react";

import "./Container.css";

const Container = ({ children }) => {
  return <div className="container center">{children}</div>;
};

export default Container;
