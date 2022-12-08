import React from "react";

const Title = () => {
  console.log("title rendered");
  return <div>useCallback</div>;
};

export default React.memo(Title);
