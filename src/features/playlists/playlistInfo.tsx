import { ReactElement, useState } from "react";
import { playlistSelectors } from "../../containers/playlist/selectors";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import EditPlaylist from "./editPlaylist";
import { authSelectors } from "../../containers/auth/selectors";
import { preferencesSelectors } from "../../containers/preferences/selectors";

function PlaylistInfo(): ReactElement {
  const [showEditPlaylist, setShowEditPlaylist] = useState(false);

  const selectedPlaylist = useSelector(playlistSelectors.selectPlaylist);
  const user = useSelector(authSelectors.getUser);
  const isDarkMode = useSelector(preferencesSelectors.getDarkmode);

  const validteCorrectOwner = () => {
    if (selectedPlaylist?.owner.id === user?.userId) {
      return true;
    }
    return false;
  };

  return (
    <>
      <div
        className={`rounded-2 p-1 m-2 d-flex justify-content-between ${
          isDarkMode ? "bg-dark text-white" : "bg-body-tertiary"
        }`}
      >
        {" "}
        {selectedPlaylist === undefined && (
          <h4 className="text-center">Select a playlist</h4>
        )}
        <div className="p-1">
          <h4>{selectedPlaylist?.name}</h4>
          <h6 className="opacity-75">{selectedPlaylist?.description}</h6>
        </div>
        <div className="justify-content-center d-flex">
          {selectedPlaylist && validteCorrectOwner() && (
            <button
              className="btn"
              onClick={() => setShowEditPlaylist(!showEditPlaylist)}
            >
              <FontAwesomeIcon icon={faEdit} className="text-warning fs-4" />
            </button>
          )}
        </div>
      </div>

      {showEditPlaylist && (
        <EditPlaylist onClose={() => setShowEditPlaylist(false)}></EditPlaylist>
      )}
    </>
  );
}

export default PlaylistInfo;
