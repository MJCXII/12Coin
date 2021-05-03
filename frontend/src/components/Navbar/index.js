import React from "react";
import { Nav, NavbarContainer, NavLogo } from "./NavbarElements";

const App = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">TWXIIVE</NavLogo>
          <h1>Hello</h1>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default App;
