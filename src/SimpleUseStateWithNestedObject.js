import React, { useState } from "react";
import { Container, Form, Titles } from "./styledComps";

const SimpleUseStateWithNestedObject = () => {
  const [nestedData, setNestedData] = useState({
    name: "",
    occupation: "",
    address: {
      state: "",
      city: "",
      postalCode: "",
    },
  });
  return (
    <Container>
      <Titles> Simple UseState With Nested Object</Titles>
      <Form>
        <div>name</div>
        <input
          onChange={(e) =>
            setNestedData((state) => ({ ...state, name: e.target.value }))
          }
        />
      </Form>
      <Form>
        <div>occupation</div>
        <input
          onChange={(e) =>
            setNestedData((state) => ({ ...state, occupation: e.target.value }))
          }
        />
      </Form>
      <Form>
        <div>state</div>
        <input
          onChange={(e) =>
            setNestedData((state) => ({
              ...state,
              address: { ...state.address, state: e.target.value },
            }))
          }
        />
      </Form>
      <Form>
        <div>city</div>
        <input
          onChange={(e) =>
            setNestedData((state) => ({
              ...state,
              address: { ...state.address, city: e.target.value },
            }))
          }
        />
      </Form>
      <Form>
        <div>postalCode</div>
        <input
          onChange={(e) =>
            setNestedData((state) => ({
              ...state,
              address: { ...state.address, postalCode: e.target.value },
            }))
          }
        />
      </Form>
      <p>{nestedData.name}</p>
      <p>{nestedData.occupation}</p>
      <p>{nestedData.address.state}</p>
      <p>{nestedData.address.city}</p>
      <p>{nestedData.address.postalCode}</p>
    </Container>
  );
};

export default SimpleUseStateWithNestedObject;
