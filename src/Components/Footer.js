import React from "react";
import styled from "styled-components";
import "../styles.scss";

function Footer() {
  return (
    <Package.Wrapper className="container-fluid px-0">
      <Package.Row className="row">
        <h5>Designed and Developed by Natasha Johnson 2020.</h5>
      </Package.Row>
    </Package.Wrapper>
  );
}

const Package = {
  Wrapper: styled.div`
    overflow-x: hidden;
    z-index: 1;

    padding: 20px 0px 20px 0px;
    background-color: #35dba9;
    color: #ffffff;
  `,

  Row: styled.div`
    margin: 0 auto;
    width: 90%;
  `
};

export default Footer;
