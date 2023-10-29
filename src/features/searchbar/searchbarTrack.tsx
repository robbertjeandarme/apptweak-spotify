import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactElement } from "react";
import { Track } from "../../types/track";
import { useDispatch } from "react-redux";
import { addTrackToPlaylist } from "../../containers/playlist/slice";
import { playlistSelectors } from "../../containers/playlist/selectors";

interface SearchbarTrackProps {
  track: Track;
}

function SearchbarTrack(props: SearchbarTrackProps): ReactElement {
  const dispatch = useDispatch();

  const track = props.track;
  return (
    <>
      <div className="d-flex justify-content-between align-items-center w-50  m-2 square border shadow rounded-3">
        <img
          src={track.album.images[0].url}
          alt={track.name}
          width={60}
          className="rounded-3"
        />
        <div>
          <p>{track.name}</p>
        </div>
        <button
          className="btn"
          onClick={() => dispatch(addTrackToPlaylist(track))}
        >
          <FontAwesomeIcon
            icon={faPlusCircle}
            className="text-success fa-beat"
          />
        </button>
      </div>
    </>
  );
}

export default SearchbarTrack;
