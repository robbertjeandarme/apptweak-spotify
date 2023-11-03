import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FC, ReactElement } from "react";
import { useSelector } from "react-redux";
import Header from "./core/header";
import { Container, Row, Col } from "react-bootstrap";
import Searchbar from "./features/searchbar/searchbar";
import PlayList from "./features/playlists/playlist";
import PlaylistTracks from "./features/playlists/playlistTracks";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PlaylistInfo from "./features/playlists/playlistInfo";
import { preferencesSelectors } from "./containers/preferences/selectors";

const App: FC = (): ReactElement => {
  const isDarkMode = useSelector(preferencesSelectors.getDarkmode);
  return (
    <>
      <Header />
      <Container
        fluid
        className={`${isDarkMode ? "text-white" : ""}`}
        style={{
          backgroundColor: isDarkMode ? "#1B1E21" : undefined,
          minHeight: "100vh",
        }}
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
