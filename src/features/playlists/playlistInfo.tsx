import { ReactElement } from "react";
import { selectedPlaylist } from "../../containers/playlist/slice";
import { playlistSelectors } from "../../containers/playlist/selectors";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

function PlaylistInfo(): ReactElement {
  const selectedPlaylist = useSelector(playlistSelectors.selectPlaylist);

  return (
    <>
      <div className="bg-body-tertiary rounded-2 p-1 m-2 d-flex justify-content-between">
        {selectedPlaylist === undefined && (
          <h4 className="text-center">Select a playlist</h4>
        )}
        <div className="p-1">
          <h4>{selectedPlaylist?.name}</h4>
          <h6 className="opacity-75">{selectedPlaylist?.description}</h6>
        </div>

        <div className="justify-content-center d-flex">
          <button className="btn">
            <FontAwesomeIcon icon={faEdit} className="text-warning fs-4" />
          </button>
        </div>
      </div>
    </>
  );
}

export default PlaylistInfo;
