import React, { useCallback, useState } from "react";
import Age from "./Age";
import Button from "./Button";
import Salary from "./Salary";
import Title from "./Title";

const Parent = () => {
  const [salary, setSalary] = useState(50000);
  const [age, setAge] = useState(25);
  const incSalary = useCallback(() => {
    setSalary((prev) => prev + 1);
  }, [salary]);
  const incAge = useCallback(() => {
    setAge((prev) => prev + 1);
  }, [age]);
  return (
    <div>
      <Title />
      <Salary salary={salary} />
      <Button handleClick={incSalary} children="Button Salary" />
      <Age age={age} />
      <Button handleClick={incAge} children="Button Age" />
    </div>
  );
};

export default Parent;
