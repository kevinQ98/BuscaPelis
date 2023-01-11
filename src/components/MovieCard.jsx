import { API_IMG } from "../data/api";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import ListGroup from "react-bootstrap/ListGroup";

// import { show } from "react-bootstrap/show";

function MovieCard({ movie }) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let imgUrlPath;
  if (!movie.poster_path) {
    imgUrlPath =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png";
  } else {
    imgUrlPath = API_IMG + movie.poster_path;
  }
  let imgUrlBackdrop;
  if (!movie.backdrop_path) {
    imgUrlBackdrop =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png";
  } else {
    imgUrlBackdrop = API_IMG + movie.backdrop_path;
  }

  return (
    <>
      <Card
        className="bg-dark text-white h-100 p-1 cardShows"
        onClick={handleShow}
      >
        <Card.Img variant="top" src={imgUrlPath} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>
            <Badge pill bg="warning" text="dark">
              Promedio de votos: {movie.vote_average}
            </Badge>{" "}
            <Badge pill bg="light" text="dark">
              {movie.release_date}
            </Badge>
          </Card.Text>
        </Card.Body>
      </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="bg-dark text-white">
          <Modal.Title>{movie.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark">
          <Card className="text-white" bg={"dark"}>
            <Card.Header className="m-0 p-0">
              <Card.Img
                variant="top"
                src={imgUrlBackdrop}
                className="m-0 p-0"
              />
            </Card.Header>
            <Card.Body>
              <Card.Title className="text-center ">
                {movie.original_title}
              </Card.Title>
              <ListGroup>
                <ListGroup.Item variant="secondary" className="">
                  {movie.overview}
                </ListGroup.Item>
                <ListGroup.Item variant="warning">
                  IMDb: {movie.vote_average}
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
            <Card.Footer className="text-muted">
              Estreno: <strong>{movie.release_date}</strong>
            </Card.Footer>
          </Card>
        </Modal.Body>
        <Modal.Footer className="bg-dark">
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MovieCard;

// npm install react-bootstrap bootstrap@5.2.3
