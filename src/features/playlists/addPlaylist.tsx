import { ReactElement, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {
  addPlaylist,
  addPictureToPlaylist,
} from "../../containers/playlist/slice";

function AddPlaylist(): ReactElement {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isPublic, setIsPublic] = useState(false);
  const [picture, setPicture] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("picture", picture);

    dispatch(addPlaylist({ name, description, public: isPublic } as any));
    // dispatch(addPictureToPlaylist(picture));
  };

  const handlePictureChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      if (file.size > 256 * 1024) {
        alert("File size must be less than 256KB");
        setPicture("");
        event.target.value = "";
        return;
      }
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        if (typeof reader.result === "string") {
          setPicture(reader.result);
        }
      };
    }
  };

  return (
    <Form className="m-2" onSubmit={handleSubmit}>
      <Form.Group controlId="formIsPublic">
        <Form.Check
          className=""
          type="checkbox"
          label="Public"
          checked={isPublic}
          onChange={(event) => setIsPublic(event.target.checked)}
        />
      </Form.Group>

      <Form.Group controlId="formName" className="my-2">
        <Form.Control
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </Form.Group>

      <Form.Group className="my-2" controlId="formDescription">
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </Form.Group>

      <Form.Group className="my-2" controlId="formPicture">
        <Form.Label>Picture</Form.Label>
        <Form.Control
          type="file"
          accept="image/jpeg"
          onChange={handlePictureChange}
        />
      </Form.Group>

      <Button className="my-3" variant="outline-success" type="submit">
        Add
      </Button>
    </Form>
  );
}

export default AddPlaylist;
