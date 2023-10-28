import { ReactElement, useCallback, useEffect, useState } from "react";
import { Container, Row, Col, Form, Button, Spinner } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { RootState } from "../../store/store";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../containers/auth/slice";
import axios from "axios";
import SearchbarTrack from "./searchbarTrack";
import { Track } from "../../types/track";
import Playlists from "../playlists/playlist";

function Searchbar(): ReactElement {
  const [searchInput, setSearchInput] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const [test, setTest] = useState<boolean>(false);

  //store the items
  const [tracks, setTracks] = useState([]);

  const accessToken = useSelector(
    (state: RootState) => state.authentication.accessToken
  );

  const onSearch = async () => {
    tracks.length = 0; //clear the array
    setLoading(true);
    try {
      const response = await axios.get("https://api.spotify.com/v1/search", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        params: {
          q: searchInput,
          type: "track",
          limit: 5,
        },
      });
      setTracks(response.data.tracks.items);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const clearSearch = () => {
    // clear the search
    setSearchInput("");
    setTracks([]);
    setTest(true);
  };

  const handleSearchInputChange = useCallback((e: any) => {
    setSearchInput(e.target.value);
  }, []);

  return (
    <Container className="m-4">
      <Row>
        <Col sm={12}>
          <Form className="d-flex">
            <Form.Control
              type="search"
              onChange={handleSearchInputChange}
              placeholder="Search"
              className="me-2 rounded-pill"
              aria-label="Search"
            />
            <Button
              disabled={searchInput.length === 0 || loading}
              onClick={onSearch}
              className="rounded-pill"
              variant="outline-success"
            >
              {loading ? <Spinner animation="border" size="sm" /> : "Search"}
            </Button>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col sm={6} className="d-flex flex-column align-items-center w-100 ">
          {tracks
            .map((track: Track) => (
              <SearchbarTrack
                key={track.id}
                id={track.id}
                name={track.name}
                artist={track.artists[0].name}
                imageUrl={track.album.images[0].url}
              />
            ))
            .slice(0, 5)}

          {tracks.length !== 0 && (
            <Button
              onClick={clearSearch}
              className="rounded-pill"
              variant="outline-success"
            >
              Clear
            </Button>
          )}
        </Col>
      </Row>
      {test && <Playlists />}
    </Container>
  );
}
export default Searchbar;
