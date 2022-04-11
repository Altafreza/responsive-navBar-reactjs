import React from "react";
import styled from "styled-components";
import "../styles.scss";

function Testimonials() {
  return (
    <Package.Wrapper
      className="container-fluid px-0"
      style={{ backgroundColor: "#edfff9" }}
    >
      <div className="row text-center">
        <div className="col-md-12">
          <h2 className="display-4 mb-5" style={{ color: "a8e6cd!important" }}>
            Our Testimonials
          </h2>
        </div>
      </div>
      <Package.Row className="row">
        <Package.Box className="col-md-6">
          <Box.Image src="images/oranges.png" alt="Avatar" width="90px" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>- Anne Townes</p>
        </Package.Box>
        <Package.Box className="col-md-6">
          <Box.Image src="images/oranges.png" alt="Avatar" width="90px" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>- Joseph Jones</p>
        </Package.Box>
      </Package.Row>
    </Package.Wrapper>
  );
}

const Package = {
  Wrapper: styled.div`
    overflow-x: hidden;
    z-index: 1;
    margin-bottom: 50px;

    padding: 50px 0px 50px 0px;

    @media only screen and (max-width: 40em) {
      padding: 50px 0px 10px 0px;
    }
  `,

  Row: styled.div`
    margin: 0 auto;
    width: 90%;
  `,

  Box: styled.div`
    padding: 16px;
    margin: 16px 0;

    &:after {
      content: "";
      clear: both;
      display: table;
    }

    @media and screen and (max-width: 40em) {
      text-align: center;
    }
  `
};

const Box = {
  Image: styled.img`
    border-radius: 50%;
    width: 150px;
    height: 150px;
    float: left;
    margin-right: 20px;

    @media and screen and (max-width: 40em) {
      margin: auto;
      float: none;
      display: block;
    }
  `
};

export default Testimonials;
