import { FC, ReactElement, useState } from "react";
import { Navbar, Container, Button } from "react-bootstrap";

function Header(): ReactElement {
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
}

export default Header;
