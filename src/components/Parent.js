import React, { useCallback, useMemo, useState } from "react";
import Button from "./Button";
import Count from "./Count";
import Title from "./Title";

const Parent = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const incrementCounter1 = useCallback(() => {
    setCounter1(counter1 + 1);
  }, [counter1]);
  const incrementCounter2 = useCallback(() => {
    setCounter2(counter2 + 1);
  }, [counter2]);
  const expensiveCompute = useMemo(() => {
    let temp = 0;
    temp = ((counter1 * 10000) / 3.14) * 100000000000000000000000000000000;
    return temp;
  }, [counter1]);
  return (
    <div>
      <Title />
      <Count name="counter 1" value={counter1} />
      <Button handleClick={incrementCounter1}> Button Count 1</Button>
      <Count name="counter 2" value={counter2} />
      <Button handleClick={incrementCounter2}> Button Count 2</Button>
      <div>ec :{expensiveCompute}</div>
    </div>
  );
};

export default Parent;
