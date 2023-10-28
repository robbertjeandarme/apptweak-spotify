import { ReactElement, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { playlistSelectors } from "../../containers/playlist/selectors";
import {
  getPlaylists,
  getPlaylistsSuccess,
} from "../../containers/playlist/slice";

function Playlists(): ReactElement {
  const dispatch = useDispatch();

  const playlists = useSelector(playlistSelectors.getPlaylists);

  useEffect(() => {
    dispatch(getPlaylists());
  }, [dispatch]);

  console.log(playlists);

  return (
    <div>
      <h1>Playlists</h1>
      {playlists.map((playlist) => (
        <div key={playlist.id}>
          <p>{playlist.name}</p>
          <p>{playlist.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Playlists;
