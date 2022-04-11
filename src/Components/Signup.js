import React from "react";
import styled from "styled-components";
import "../styles.scss";

function Signup() {
  return (
    <Package.Wrapper className="container-fluid px-0">
      <Package.Row>
        <div className="col-md-12 text-center">
          <h2 className="display-3">Subscribe</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
          <Form.Group className="mt-5">
            <Form.Input type="text" placeholder="Name" />
            <Form.Input type="text" placeholder="Email Address" />
            <Form.Input type="submit" value="Submit" />
          </Form.Group>
        </div>
      </Package.Row>
    </Package.Wrapper>
  );
}

const Package = {
  Wrapper: styled.div`
    overflow-x: hidden;
    z-index: 1;
    margin-bottom: 50px;
  `,

  Row: styled.div`
    margin: 0 auto;
    width: 90%;
  `
};

const Form = {
  Group: styled.form`
    display: flex;
    flex-wrap: wrap;

    & > input {
      flex: 1 1 2rem;
      margin: 0.5rem;

      &[type="email"] {
        flex: 3 1 4rem;
      }
    }
  `,

  Input: styled.input`
    border: none;
    background: hsl(0, 0%, 93%);
    border-radius: 0.25rem;
    padding: 1rem 2rem;

    &[type="submit"] {
      background: #35dba9;
      color: #ffffff;
      box-shadow: 0 0.75rem 0.5rem -0.5rem #a8e6cd;
    }
  `
};
export default Signup;
