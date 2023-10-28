import { ReactElement, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { playlistSelectors } from "../../containers/playlist/selectors";
import { getPlaylistTracks } from "../../containers/playlist/slice";

function PlaylistTracks(): ReactElement {
  //how to get the tracks from the store?
  const tracks = useSelector(playlistSelectors.getPlaylistTracks);

  useEffect(() => {
    console.log("tracks in the playlist tracks component");
    console.log(tracks);
  }, [tracks]);

  return (
    <>
      <p>dhfsdhfdskjfhdsfhsdk</p>
      {tracks.map((track, id) => (
        <div key={id}>
          <h1 className="text-bg-danger">{track.name}</h1>
          <h1>{track.disc_number}</h1>
        </div>
      ))}
    </>
  );
}

export default PlaylistTracks;
