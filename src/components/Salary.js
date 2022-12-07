import React from "react";

const Salary = ({ salary }) => {
  console.log("rendering salary");
  return <div>{salary}</div>;
};

export default React.memo(Salary);
