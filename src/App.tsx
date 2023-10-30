import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { FC, ReactElement, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authSelectors } from "./containers/auth/selectors";
import { playlistSelectors } from "./containers/playlist/selectors";
import Header from "./core/header";
import { Container, Row, Col } from "react-bootstrap";
import Searchbar from "./features/searchbar/searchbar";
import PlayList from "./features/playlists/playlist";
import PlaylistTracks from "./features/playlists/playlistTracks";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App: FC = (): ReactElement => {
  const user = useSelector(authSelectors.getUser);
  const selectedPlaylist = useSelector(playlistSelectors.selectPlaylist);

  return (
    <>
      <Header />
      <Container fluid>
        <Row>
          <Col lg={3}>
            <PlayList></PlayList>
          </Col>
          <Col lg={9}>
            <Searchbar></Searchbar>
            <Row className="m-1">
              {selectedPlaylist === undefined && (
                <h4 className="text-center">Select a playlist</h4>
              )}
              <h4>{selectedPlaylist?.name}</h4>
              <h6 className="opacity-75">{selectedPlaylist?.description}</h6>
            </Row>
            <PlaylistTracks></PlaylistTracks>
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </>
  );
};

export default App;
