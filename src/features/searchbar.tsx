import { ReactElement } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

function Searchbar(): ReactElement {
  // this component will be used to search for songs

  return (
    <Container className="mt-5 ">
      <Row>
        <Col sm={12}>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 rounded-pill"
              aria-label="Search"
            />
            <Button className="rounded-pill" variant="outline-primary">
              Search
            </Button>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col sm={6} className="d-flex flex-column align-items-center w-100 ">
          <div className="d-flex justify-content-between align-items-center w-50  m-2 square border shadow rounded-3">
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.KQiZrFu3WGGqwLcdu4hjzgHaHa%26pid%3DApi&f=1&ipt=16e7fd890545e8852e3c8f8500389cbaeee80205b4b917b30c72f3b4587e1e75&ipo=images"
              alt="track"
              height={60}
              width={60}
              className="rounded-3"
            />
            <p>Track Name</p>
            <button>Add</button>
          </div>
          <div className="d-flex justify-content-between align-items-center w-50  m-2 square border shadow rounded-3">
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.KQiZrFu3WGGqwLcdu4hjzgHaHa%26pid%3DApi&f=1&ipt=16e7fd890545e8852e3c8f8500389cbaeee80205b4b917b30c72f3b4587e1e75&ipo=images"
              alt="track"
              height={60}
              width={60}
              className="rounded-3"
            />
            <p>Track Name</p>
            <button className="btn btn-icon">add</button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Searchbar;
