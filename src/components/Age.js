import React from "react";

const Age = ({ age }) => {
  console.log("rendering age");
  return <div>{age}</div>;
};

export default React.memo(Age);
