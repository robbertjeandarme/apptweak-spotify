import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import React, { FC, ReactElement, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { authSelectors } from "./containers/auth/selectors";
import { Navbar, Container, Button } from "react-bootstrap";

const App: FC = (): ReactElement => {
  const dispatch = useDispatch();
  const user = useSelector(authSelectors.getUser);
  // TODO: You can access user data and now fetch user's playlists
  console.log(user);

  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Navbar className={isDarkMode ? "bg-dark" : "bg-body-tertiary"}>
      <Container>
        <Navbar.Brand href="#home">Brand link</Navbar.Brand>
        <Button
          className={isDarkMode ? "btn btn-light" : "btn btn-dark"}
          onClick={toggleDarkMode}
        >
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </Button>
      </Container>
    </Navbar>
  );
};

export default App;
