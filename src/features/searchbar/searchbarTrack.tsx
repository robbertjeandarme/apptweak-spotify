import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactElement } from "react";

interface SearchbarTrackProps {
  id: string;
  name: string;
  artist: string;
  imageUrl: string;
}

function SearchbarTrack(props: SearchbarTrackProps): ReactElement {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center w-50  m-2 square border shadow rounded-3">
        <img
          src={props.imageUrl}
          alt={props.name}
          width={60}
          className="rounded-3"
        />
        <div>
          <p>{props.name}</p>
        </div>
        <button className="btn">
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
