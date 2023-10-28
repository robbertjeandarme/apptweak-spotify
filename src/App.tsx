import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { FC, ReactElement, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authSelectors } from "./containers/auth/selectors";
import Header from "./core/header";
import { Container, Row, Col } from "react-bootstrap";
import Searchbar from "./features/searchbar/searchbar";
import PlayList from "./features/playlists/playlist";

const App: FC = (): ReactElement => {
  const dispatch = useDispatch();
  const user = useSelector(authSelectors.getUser);
  // TODO: You can access user data and now fetch user's playlists
  console.log(user);

  return (
    <>
      <>
        <Header />
        <Container fluid>
          <Row>
            <Col md={2}>
              <PlayList></PlayList>
            </Col>
            <Col md={8}>
              <Searchbar></Searchbar>
            </Col>
          </Row>
        </Container>
      </>
    </>
  );
};

export default App;
