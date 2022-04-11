import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Custom from "./styles.scss";
import Navbar from "./Components/Navbar";
import Home from "./Components/Pages/Homepage/Home";
import Menu from "./Components/Pages/Menu/Menu";
import DiningRooms from "./Components/Pages/DiningRooms/DiningRooms";
import Gifts from "./Components/Pages/Gifts/Gifts";

function App() {
  return (
    <React.Fragment>
      <CSSReset />

      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/menu">
            <Menu />
          </Route>
          <Route path="/dining-rooms">
            <DiningRooms />
          </Route>
          <Route path="/gifts">
            <Gifts />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

//Styled Components

const Styles = {
  Wrapper: styled.main`
    margin: 80%;
  `
};

const CSSReset = createGlobalStyle`

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%; /*1rem = 10px*/
  box-sizing: border-box;
}

body {
  font-size: 1.4rem;
  font-family: sans-serif;
}
`;

export default App;
