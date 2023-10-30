import { ReactElement, useState } from "react";
import { Form, Button } from "react-bootstrap";

function AddPlaylist(): ReactElement {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isPublic, setIsPublic] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("Name", name);
    console.log("Description", description);
    console.log("Is public", isPublic);
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

      <Button className="my-3" variant="outline-success" type="submit">
        Add
      </Button>
    </Form>
  );
}

export default AddPlaylist;
