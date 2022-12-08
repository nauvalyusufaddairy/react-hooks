import React from "react";

const Count = ({ value, name }) => {
  console.log("rendering - ", name);
  return (
    <div>
      {name} : {value}
    </div>
  );
};

export default React.memo(Count);
