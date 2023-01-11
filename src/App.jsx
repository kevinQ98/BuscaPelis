import MovieListPopular from "./components/MovieListPopular";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function App() {
  return (
    <main>
      {/* <Navbar bg="dark" variant="dark">
        <Container className="">
          <Navbar.Brand href="/">BuscaPelis</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Develop by: <a href="#login">BlueK</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
      <Container>
        <MovieListPopular />
      </Container>
    </main>
  );
}

export default App;
