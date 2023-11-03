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
import PlaylistInfo from "./features/playlists/playlistInfo";
import EditPlaylist from "./features/playlists/editPlaylist";
import { preferencesSelectors } from "./containers/preferences/selectors";

const App: FC = (): ReactElement => {
  const user = useSelector(authSelectors.getUser);
  const selectedPlaylist = useSelector(playlistSelectors.selectPlaylist);
  const isDarkMode = useSelector(preferencesSelectors.getDarkmode);
  return (
    <>
      <Header />
      <Container
        fluid
        className={`${isDarkMode ? "text-white" : ""}`}
        style={isDarkMode ? { backgroundColor: "#1B1E21" } : {}}
      >
        <Row>
          <Col lg={3}>
            <PlayList></PlayList>
          </Col>
          <Col lg={9}>
            <Searchbar></Searchbar>
            <Row className="m-1">
              <PlaylistInfo></PlaylistInfo>
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
