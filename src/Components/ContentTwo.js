import React, { useState } from "react";
import styled from "styled-components";
import Gallery from "react-photo-gallery";
import { photos } from "./Photo";
import "../styles.scss";

function ContentTwo({
  img,
  imgStart,
  alt,
  topLine,
  heading,
  subheading,
  description
}) {
  return (
    <Package.Wrapper
      className="container-fluid px-0"
      style={{ backgroundColor: "#edfff9" }}
    >
      <Package.Row className="row">
        <Package.Box1 className="col-md-6" alt={alt}>
          <Package.Box1Image></Package.Box1Image>
        </Package.Box1>
        <Package.Box2 className="col-md-6" alt={alt}>
          <Package.Box2Content>
            <h2 style={{ fontStyle: "italic" }}>{topLine}</h2>
            <h1 className="content-title display-4">{heading}</h1>
            <p> {description} </p>

            <h3>{subheading}</h3>
          </Package.Box2Content>
        </Package.Box2>
      </Package.Row>
    </Package.Wrapper>
  );
}

const Package = {
  Wrapper: styled.main`
    overflow-x: hidden;
    z-index: 1;

    padding: 50px 0px 50px 0px;

    @media only screen and (max-width: 40em) {
      padding: 50px 0px 50px 0px;
    }
  `,

  Row: styled.div`
    margin: 0 auto;
    width: 90%;
  `,

  Box1: styled.div`
    @media only screen and (max-width: 40em) {
      order: 2;
      padding-top: 25px;
    }
  `,

  Box1Image: styled.div`
    background-image: url("images/oranges.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    min-height: 350px;

    @media only screen and (max-width: 40em) {
      min-height: 300px;
    }
  `,

  Box2: styled.div`
    order: 1;
  `,

  Box2Content: styled.div`
    @media only screen and (min-width: 40em) {
      margin: 20px;
    }
  `
};

export default ContentTwo;
