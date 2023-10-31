import { ReactElement, useState } from "react";
import { Form, Button } from "react-bootstrap";
import addPlaylist from "./addPlaylist";
import { useDispatch, useSelector } from "react-redux";
import { editPlaylist } from "../../containers/playlist/slice";
import { playlistSelectors } from "../../containers/playlist/selectors";

function EditPlaylist(): ReactElement {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const selectedPlaylist = useSelector(playlistSelectors.selectPlaylist);

  const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (name === "") {
      return;
    }

    dispatch(editPlaylist({ name, description } as any));
  };

  return (
    <>
      <Form className="m-2 bg-body-tertiary rounded-3" onSubmit={handleSubmit}>
        <Form.Group controlId="formName" className="my-2">
          <Form.Control
            type="text"
            placeholder="Enter new name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </Form.Group>

        <Form.Group className="my-2" controlId="formDescription">
          <Form.Control
            as="textarea"
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
