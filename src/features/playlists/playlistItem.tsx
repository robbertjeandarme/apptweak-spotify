import { ReactElement } from "react";
import { Playlist } from "../../types/playlist";
import { useDispatch, useSelector } from "react-redux";
import { playlistSelectors } from "../../containers/playlist/selectors";
import {
  getPlaylistTracks,
  selectedPlaylist,
} from "../../containers/playlist/slice";
export interface PlaylistsProps {
  playlist: Playlist;
}

function PlaylistItem(prop: PlaylistsProps): ReactElement {
  const openPlaylist = useSelector(playlistSelectors.selectPlaylist);

  const dispatch = useDispatch();

  const handlePlayListClick = (currentSelectedPlaylist: Playlist) => {
    dispatch(getPlaylistTracks(currentSelectedPlaylist.id as any));
    dispatch(selectedPlaylist(currentSelectedPlaylist));
  };

  return (
    <>
      <div
        className={`d-flex align-items-center m-1 square  shadow hover ${
          openPlaylist?.id === prop.playlist.id ? "openPlaylist" : ""
        }`}
        key={prop.playlist.id}
        onClick={() => handlePlayListClick(prop.playlist)}
      >
        <img width={60} src={prop.playlist.images[0].url} alt="" />
        <div className="d-flex flex-column m-1">
          <p className="m-0">{prop.playlist.name}</p>
          <p className="opacity-50 m-0">{prop.playlist.owner.display_name}</p>
        </div>
      </div>
    </>
  );
}

export default PlaylistItem;
