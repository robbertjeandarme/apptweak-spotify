import { ReactElement } from "react";
import { Playlist } from "../../types/playlist";
import { faLinkSlash } from "@fortawesome/free-solid-svg-icons";

export interface PlaylistsProps {
  playlist: Playlist;
}

function PlaylistItem(prop: PlaylistsProps): ReactElement {
  return (
    <>
      <div
        className="d-flex  align-items-center m-1 square border shadow hover"
        key={prop.playlist.id}
        onClick={(e) => console.log(prop.playlist.id)}
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
