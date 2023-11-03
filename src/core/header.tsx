import { FC, ReactElement, useState } from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { preferencesSelectors } from "../containers/preferences/selectors";
import { toggleDarkmode } from "../containers/preferences/slice";

function Header(): ReactElement {
  const dispatch = useDispatch();
  const isDarkMode = useSelector(preferencesSelectors.getDarkmode);

  return (
    <Navbar className={isDarkMode ? "bg-dark text-white" : "bg-body-tertiary"}>
      <Container>
        <Navbar.Brand className={isDarkMode ? "text-white" : ""}>
          Spotify app-tweak
        </Navbar.Brand>
        <Button
          className={isDarkMode ? "btn btn-light" : "btn btn-dark"}
          onClick={() => dispatch(toggleDarkmode())}
        >
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </Button>
      </Container>
    </Navbar>
  );
}

export default Header;
