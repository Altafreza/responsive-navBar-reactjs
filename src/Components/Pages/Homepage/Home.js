import React, { useState } from "react";
import styled from "styled-components";
import HeroSection from "../../HeroSection";
import ContentOne from "../../ContentOne";
import ContentTwo from "../../ContentTwo";
import Plates from "../../Plates";
import Meals from "../../Meals";
import Signup from "../../Signup";
import Testimonials from "../../Testimonials";
import Contact from "../../Contact";
import Footer from "../../Footer";
import { homeObjOne, homeObjTwo, homeObjThree } from "./Data";

function Home() {
  return (
    <div>
      <HeroSection {...homeObjOne} />
      <ContentOne {...homeObjTwo} />
      <ContentTwo {...homeObjThree} />
      <Plates />
      <Meals />
      <Signup />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
