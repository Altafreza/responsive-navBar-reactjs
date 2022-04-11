import React from "react";
import styled from "styled-components";
import {
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG
} from "react-icons/fa";

const launchHouse = "";
function Contact() {
  return (
    <Package.Wrapper className="container-fluid px-0">
      <Package.Row className="row">
        <div className="col-md-6">
          <h2 className="display-4">Contact Us</h2>
          <p>4578 Mamora Rd, Glassgow DC4 89GB</p>
          <p>
            <FaPhoneAlt /> + 410 8795 6871
          </p>
          <p>Mon - Sun 8:00am to 12:00pm</p>
          <div className="social">
            <Social.Item>
              <Social.Items>
                <Social.Icons>
                  <FaFacebookF />
                </Social.Icons>
              </Social.Items>
              <Social.Items>
                <Social.Icons>
                  <FaTwitter />
                </Social.Icons>
              </Social.Items>
              <Social.Items>
                <Social.Icons>
                  <FaGooglePlusG />
                </Social.Icons>
              </Social.Items>
            </Social.Item>
          </div>
        </div>
        <div className="col-md-6"></div>
      </Package.Row>
    </Package.Wrapper>
  );
}

const Package = {
  Wrapper: styled.div`
    overflow-x: hidden;
    z-index: 1;

    padding: 0px 0px 50px 0px;
    @media only screen and (max-width: 40em) {
      padding: 0px 0px 50px 0px;
    }
  `,
  Row: styled.div`
    margin: 0 auto;
    width: 90%;
  `
};

const Social = {
  Item: styled.ul`
    display: flex;
    list-style: none;
  `,

  Items: styled.li`
    position: relative;
    top: 5px;
    font-size: 20px;
    color: #35dba9;
    padding: 1.5rem;
    margin-right: 1rem;
    border: 1px solid #a8e6cd;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    cursor: pointer;

    &:hover {
    }
  `,

  Icons: styled.div`
    position: relative;
    bottom: 8px;
  `
};

export default Contact;
