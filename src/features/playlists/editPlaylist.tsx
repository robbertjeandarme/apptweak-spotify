import { ReactElement, useState } from "react";
import { Form, Button } from "react-bootstrap";
import addPlaylist from "./addPlaylist";
import { useDispatch, useSelector } from "react-redux";
import { editPlaylist } from "../../containers/playlist/slice";
import { playlistSelectors } from "../../containers/playlist/selectors";
import { preferencesSelectors } from "../../containers/preferences/selectors";
import { toast } from "react-toastify";

interface EditPlaylistProps {
  onClose: () => void;
}

function EditPlaylist({ onClose }: EditPlaylistProps): ReactElement {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const selectedPlaylist = useSelector(playlistSelectors.selectPlaylist);
  const isDarkMode = useSelector(preferencesSelectors.getDarkmode);

  const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (name === "" && description === "") {
      toast.error("Please enter a name and description!");
      return;
    }
    toast.success("Playlist edited successfully!");
    dispatch(editPlaylist({ name, description } as any));
    onClose();
  };

  return (
    <>
      <Form
        className={`m-2 rounded-3 ${
          isDarkMode ? "bg-dark text-white" : "bg-body-tertiary"
        }`}
        onSubmit={handleSubmit}
      >
        <Form.Group controlId="formName" className="my-2">
          <Form.Control
            className={`${
              isDarkMode ? "bg-dark text-white dark-placeholder" : ""
            }`}
            type="text"
            placeholder="Enter new name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </Form.Group>

        <Form.Group className="my-2" controlId="formDescription">
          <Form.Control
            as="textarea"
            className={`${
              isDarkMode ? "bg-dark text-white dark-placeholder" : ""
            }`}
            rows={3}
            placeholder="Enter new description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </Form.Group>

        <Button className="my-3" variant="outline-success" type="submit">
          Edit
        </Button>
      </Form>
    </>
  );
}

export default EditPlaylist;
