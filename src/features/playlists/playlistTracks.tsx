import { ReactElement, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { playlistSelectors } from "../../containers/playlist/selectors";
import { getPlaylistTracks } from "../../containers/playlist/slice";
import { Item, PlaylistTrack } from "../../types/playlistTrack";
import { Track } from "../../types/track";
import { Card } from "react-bootstrap";

function PlaylistTracks(): ReactElement {
  const listOfPlayListTracks = useSelector(playlistSelectors.getPlaylistTracks);

  useEffect(() => {
    console.log("tracks in the playlist tracks component");
    console.log(listOfPlayListTracks);
  }, [listOfPlayListTracks]);

  return (
    <>
      <div className=" d-flex flex-wrap">
        {listOfPlayListTracks.map((track: Track) => {
          return (
            <Card
              className="shadow"
              style={{ width: "12rem", margin: "0.5rem" }}
            >
              <Card.Img
                height={150}
                variant="top"
                src={track.album.images[0].url}
              />
              <Card.Body>
                <Card.Title>{track.name}</Card.Title>
                <Card.Text>
                  {track.artists.map((artist) => artist.name).join(", ")}
                </Card.Text>
                <Card.Text>
                  Released: {track.album.release_date.toString()}
                </Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </>
  );
}

export default PlaylistTracks;
