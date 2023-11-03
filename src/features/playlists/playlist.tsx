import { ReactElement, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { playlistSelectors } from "../../containers/playlist/selectors";
import { getPlaylists } from "../../containers/playlist/slice";
import PlaylistItem from "./playlistItem";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AddPlaylist from "./addPlaylist";
import { preferencesSelectors } from "../../containers/preferences/selectors";

function PlayList(): ReactElement {
  const [showAddPlaylist, setShowAddPlaylist] = useState(false);

  const dispatch = useDispatch();

  const playlists = useSelector(playlistSelectors.getPlaylists);
  const isDarkMode = useSelector(preferencesSelectors.getDarkmode);

  useEffect(() => {
    dispatch(getPlaylists());
  }, [dispatch]);

  return (
    <>
      <div
        className={`d-flex flex-column rounded-2 p-2 m-2 ${
          isDarkMode ? "bg-dark , text-white" : "bg-body-tertiary"
        }`}
      >
        <div className="d-flex justify-content-between m-1">
          <h4>Playlists</h4>
          {showAddPlaylist === false ? (
            <button className="btn" onClick={() => setShowAddPlaylist(true)}>
              <FontAwesomeIcon icon={faPlus} className="text-success fs-4" />
            </button>
          ) : (
            <button className="btn" onClick={() => setShowAddPlaylist(false)}>
              <FontAwesomeIcon icon={faMinus} className="text-danger fs-4" />
            </button>
          )}
        </div>

        {showAddPlaylist && (
          <AddPlaylist onClose={() => setShowAddPlaylist(false)}></AddPlaylist>
        )}

        {playlists.map((playlist) => (
          <PlaylistItem key={playlist.id} playlist={playlist}></PlaylistItem>
        ))}
      </div>
    </>
  );
}

export default PlayList;
