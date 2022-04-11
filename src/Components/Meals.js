import React from "react";
import styled from "styled-components";
import "../styles.scss";

function Meals() {
  return (
    <Package.Wrapper className="container-fluid px-0">
      <div className="row">
        <Package.Box1 className="col-md-4 text-center">
          <div className="boxwrap">
            <h2 style={{ fontStyle: "italic" }}>Late Morning</h2>
            <h2 className="display-3">Brunch</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
          </div>
          <div className="overlay"></div>
        </Package.Box1>
        <Package.Box2 className="col-md-4 text-center">
          <div className="boxwrap">
            <h2 style={{ fontStyle: "italic" }}>Elegant Approach to</h2>
            <h2 className="display-3">Cooking</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
          </div>
          <div className="overlay"></div>
        </Package.Box2>
        <Package.Box3 className="col-md-4 text-center">
          <div className="boxwrap">
            <h2 style={{ fontStyle: "italic" }}>Tasting</h2>
            <h2 className="display-3">Desserts</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
          </div>
          <div className="overlay"></div>
        </Package.Box3>
      </div>
    </Package.Wrapper>
  );
}

const Package = {
  Wrapper: styled.div`
    overflow-x: hidden;
    z-index: 1;
    margin-bottom: 50px;
  `,

  Box1: styled.div`
    background-image: url("images/steak.jpeg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    min-height: 350px;

    @media only screen and (max-width: 40em) {
      min-height: 300px;
    }
  `,
  Box2: styled.div`
    background-image: url("images/oranges.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    min-height: 350px;
    border-left: 5px solid #ffffff;
    border-right: 5px solid #ffffff;

    @media only screen and (max-width: 40em) {
      min-height: 300px;
      border-top: 5px solid #ffffff;
      border-bottom: 5px solid #ffffff;
    }
  `,
  Box3: styled.div`
    background-image: url("images/steak-and-salad.jpeg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    min-height: 350px;

    @media only screen and (max-width: 40em) {
      min-height: 300px;
    }
  `
};

export default Meals;
