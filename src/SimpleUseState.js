import React, { useState } from "react";
import styled from "styled-components";
import { Container, Titles } from "./styledComps";

const SimpleUseState = () => {
  const [data, setData] = useState("");

  return (
    <div>
      <Container>
        <Titles>Simple useState</Titles>
        <input onChange={(e) => setData(e.target.value)} />

        <p>{data}</p>
      </Container>
    </div>
  );
};

export default SimpleUseState;
