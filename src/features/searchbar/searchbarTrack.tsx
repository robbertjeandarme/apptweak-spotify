import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactElement } from "react";
import { Track } from "../../types/track";
import { useDispatch, useSelector } from "react-redux";
import { addTrackToPlaylist } from "../../containers/playlist/slice";
import { playlistSelectors } from "../../containers/playlist/selectors";
import { toast } from "react-toastify";

interface SearchbarTrackProps {
  track: Track;
}

function SearchbarTrack(props: SearchbarTrackProps): ReactElement {
  const track = props.track;
  const selectedPlaylist = useSelector(playlistSelectors.selectPlaylist);

  const notify = () => toast.warn("Please select a playlist!");

  const dispatch = useDispatch();

  return (
    <>
      <div className="d-flex justify-content-between align-items-center w-100  m-2 square border shadow rounded-3">
        <img
          src={track.album.images[0].url}
          alt={track.name}
          width={60}
          className="rounded-3"
        />
        <div>
          <p>{track.name}</p>
        </div>
        {selectedPlaylist !== undefined ? (
          <button
            className="btn"
            onClick={() => dispatch(addTrackToPlaylist(track))}
          >
            <FontAwesomeIcon
              icon={faPlusCircle}
              className="text-success fa-beat"
            />
          </button>
        ) : (
          <button className="btn" onClick={notify}>
            <FontAwesomeIcon icon={faPlusCircle} className="text-warning" />
          </button>
        )}
      </div>
    </>
  );
}

export default SearchbarTrack;
