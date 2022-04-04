import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
export const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/">Notes</Link>
        </Navbar.Brand>

        <Nav.Link>
          <Link to="/">Home</Link>
        </Nav.Link>

        <Nav.Link>
          <Link to="/addNote">Add A New Note</Link>
        </Nav.Link>

        <Nav.Link>
          <Link to="/editNote">edit an existing Note</Link>
        </Nav.Link>

        <Nav.Link>
          <Link to="/clearAll">Clear All Notes</Link>
        </Nav.Link>

        {/* <Link to="/addNote">Add A New Note</Link>
                <span> </span>
                <Link to="/editNote">edit an existing Note</Link>
                <span> </span>
                <Link to="/clearAll">Clear All Notes</Link> */}
      </Container>
    </Navbar>
  );
};
