import { ReactElement, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { playlistSelectors } from "../../containers/playlist/selectors";
import { getPlaylistTracks } from "../../containers/playlist/slice";
import { Item, PlaylistTrack } from "../../types/playlistTrack";
import { Track } from "../../types/track";

function PlaylistTracks(): ReactElement {
  const listOfPlayListTracks = useSelector(playlistSelectors.getPlaylistTracks);

  // const xx = listOfPlayListTracks[0].items[0].track?.name;
  // console.log(xx);

  useEffect(() => {
    console.log("tracks in the playlist tracks component");
    console.log(listOfPlayListTracks);
  }, [listOfPlayListTracks]);

  return (
    <>
      <h1>fjsdfjsdl</h1>

      {listOfPlayListTracks.map((item: Track) => {
        return (
          <div>
            <h1>{item.name}</h1>
          </div>
        );
      })}
    </>
  );
}

export default PlaylistTracks;
