import { ReactElement, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addPlaylist } from "../../containers/playlist/slice";
import { toast } from "react-toastify";
import { preferencesSelectors } from "../../containers/preferences/selectors";
interface AddPlaylistProps {
  onClose: () => void;
}

// onclose is a function that will be passed from the parent component

function AddPlaylist({ onClose }: AddPlaylistProps): ReactElement {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const isDarkMode = useSelector(preferencesSelectors.getDarkmode);

  const dispatch = useDispatch();

  const notify = () => toast.error("Please enter a name!");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (name === "") {
      notify();
      return;
    }

    dispatch(addPlaylist({ name, description } as any));
    onClose();
  };

  return (
    <Form className="m-2" onSubmit={handleSubmit}>
      <Form.Group controlId="formName" className="my-2">
        <Form.Control
          type="text"
          className={`${
            isDarkMode ? "bg-dark text-white dark-placeholder" : ""
          }`}
          placeholder="Enter name"
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
          placeholder="Enter description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </Form.Group>

      <Button className="my-3" variant="outline-success" type="submit">
        Add
      </Button>
    </Form>
  );
}

export default AddPlaylist;
