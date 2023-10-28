import { ReactElement, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { playlistSelectors } from "../../containers/playlist/selectors";
import { getPlaylists } from "../../containers/playlist/slice";
import PlaylistItem from "./playlistItem";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function PlayList(): ReactElement {
  const dispatch = useDispatch();

  const playlists = useSelector(playlistSelectors.getPlaylists);

  useEffect(() => {
    dispatch(getPlaylists());
  }, [dispatch]);

  return (
    <>
      <div className="d-flex flex-column bg-body-tertiary rounded-2  p-2 m-2">
        <div className="d-flex justify-content-between m-1">
          <h4>Playlists</h4>
          <button className="btn ">
            <FontAwesomeIcon icon={faPlus} className="text-success fs-4" />
          </button>
        </div>

        {playlists.map((playlist) => (
          <PlaylistItem key={playlist.id} playlist={playlist}></PlaylistItem>
        ))}
      </div>
    </>
  );
}

export default PlayList;
