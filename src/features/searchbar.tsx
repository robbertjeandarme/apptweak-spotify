import { ReactElement } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPlusCircle } from "@fortawesome/free-solid-svg-icons";

function Searchbar(): ReactElement {
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
              width={60}
              className="rounded-3"
            />
            <p>Track Name</p>

            <button className="btn">
              <FontAwesomeIcon
                icon={faPlusCircle}
                className="text-success fa-beat"
              />
            </button>
          </div>
          <div className="d-flex justify-content-between align-items-center w-50  m-2 square border shadow rounded-3">
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.KQiZrFu3WGGqwLcdu4hjzgHaHa%26pid%3DApi&f=1&ipt=16e7fd890545e8852e3c8f8500389cbaeee80205b4b917b30c72f3b4587e1e75&ipo=images"
              alt="track"
              height={65}
              width={65}
              className="rounded-3 m-0 p-0"
            />
            <div className="mt-1">
              <h6>Track Name</h6>
              <p className="text-center fs-6">Artist</p>
            </div>

            <button className="btn">
              <FontAwesomeIcon
                icon={faPlusCircle}
                className="text-success fa-beat"
              />
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Searchbar;
