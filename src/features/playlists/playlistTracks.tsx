import { ReactElement, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { playlistSelectors } from "../../containers/playlist/selectors";
import { Track } from "../../types/track";
import { Card } from "react-bootstrap";
import { authSelectors } from "../../containers/auth/selectors";
import { faPlay, faStop, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  deleteTrackFromPlaylist,
  selectedPlaylist,
} from "../../containers/playlist/slice";
import { preferencesSelectors } from "../../containers/preferences/selectors";
import { toast } from "react-toastify";

function PlaylistTracks(): ReactElement {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  const listOfPlayListTracks = useSelector(playlistSelectors.getPlaylistTracks);
  const selectedPlaylist = useSelector(playlistSelectors.selectPlaylist);
  const accessToken = useSelector(authSelectors.getAccessToken);
  const user = useSelector(authSelectors.getUser);
  const isDarkMode = useSelector(preferencesSelectors.getDarkmode);

  const dispatch = useDispatch();

  useEffect(() => {}, [listOfPlayListTracks]);

  const handlePlayClick = (url: string) => {
    const urlWithToken = `${url}?access_token=${accessToken}`;
    const newAudio = new Audio(urlWithToken);
    newAudio.crossOrigin = "anonymous";
    newAudio.preload = "auto";
    newAudio.autoplay = true;
    newAudio.addEventListener("error", (error) => {
      console.error("Error playing audio", error);
    });

    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }

    setAudio(newAudio);
  };

  const handleStopClick = () => {
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
  };

  const handleDeleteClick = (track: Track) => {
    dispatch(deleteTrackFromPlaylist(track));
    notify();
  };

  const notify = () =>
    toast.success("Track deleted from playlist successfully!");

  return (
    <>
      <div className=" d-flex flex-wrap">
        {listOfPlayListTracks.map((track: Track) => {
          return (
            <Card
              key={track.id}
              className={`shadow ${isDarkMode ? "bg-dark text-white" : ""}`}
              style={{ width: "12rem", margin: "0.5rem" }}
            >
              <Card.Img
                height={150}
                variant="top"
                src={track.album.images[0].url}
              />
              <Card.Body>
                <Card.Title className="fs-6">{track.name}</Card.Title>
                <Card.Text>
                  {track.artists.map((artist) => artist.name).join(", ")}
                </Card.Text>
                <Card.Text className="opacity-50">
                  Released: {track.album.release_date?.toString()}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted d-flex justify-content-around">
                  <button
                    className="btn text-success"
                    onClick={() => handlePlayClick(track.preview_url)}
                  >
                    <FontAwesomeIcon icon={faPlay} />
                  </button>
                  <button
                    className="btn text-secondary"
                    onClick={handleStopClick}
                  >
                    <FontAwesomeIcon icon={faStop} />
                  </button>
                  {user?.userId === selectedPlaylist?.owner.id && (
                    <button
                      className="btn text-danger"
                      onClick={() => handleDeleteClick(track)}
                    >
                      <FontAwesomeIcon icon={faTrashCan} />
                    </button>
                  )}
                </small>
              </Card.Footer>
            </Card>
          );
        })}
      </div>
    </>
  );
}

export default PlaylistTracks;
