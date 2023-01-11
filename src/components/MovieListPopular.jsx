// import TaskCard from "./TaskCard";
import { useContext, useState } from "react";
import { MovieContext } from "../context/movieContext";

import MovieCard from "./MovieCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import CardGroup from "react-bootstrap/CardGroup";

function MovieListPopular() {
  const { popularMovies, searchMovie } = useContext(MovieContext);
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    searchMovie(query);
    setQuery("");
  };

  return (
    <>
      <Row>
        <form onSubmit={handleSubmit}>
          <InputGroup size="lg" className="m-2 p-3">
            <InputGroup.Text id="inputGroup-sizing-lg">
              <strong>BuscaPelis</strong>
            </InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Busca una pelicula"
              name="input-search"
              onChange={(e) => setQuery(e.target.value)}
            />
            <InputGroup.Text id="basic-addon2">
              <button className="border-0">Buscar</button>
            </InputGroup.Text>
          </InputGroup>
        </form>
      </Row>
      <Row className="">
        {popularMovies.map((popularMovie, index) => (
          <Col className="mb-2" key={index} sm={6} md={4}>
            <MovieCard movie={popularMovie} />
          </Col>
        ))}
      </Row>
      <Row>
        <footer className="page-footer font-small blue pt-4">
          <div className="footer-copyright text-center text-white py-3">
            © 2022 Developed by <span> </span> 
             <a href="https://github.com/kevinQ98">KevQue</a>
          </div>
        </footer>
      </Row>
    </>
  );
}

export default MovieListPopular;
