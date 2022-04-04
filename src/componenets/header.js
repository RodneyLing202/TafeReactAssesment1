import { Link, NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
export const Header = () => {
  let linkStyle = { textDecoration: "none", color: "white" };

  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <NavLink style={linkStyle} to="/">
            Notes
          </NavLink>
        </Navbar.Brand>
        <Nav>
          <Nav.Link>
            <NavLink style={linkStyle} to="/">
              Home
            </NavLink>
          </Nav.Link>

          <Nav.Link>
            <NavLink style={linkStyle} to="/addNote">
              Add A New Note
            </NavLink>
          </Nav.Link>

          <Nav.Link>
            <NavLink style={linkStyle} to="/editNote">
              edit an existing Note
            </NavLink>
          </Nav.Link>

          <Nav.Link>
            <NavLink style={linkStyle} to="/clearAll">
              Clear All Notes
            </NavLink>
          </Nav.Link>
        </Nav>

        {/* <Link to="/addNote">Add A New Note</Link>
                <span> </span>
                <Link to="/editNote">edit an existing Note</Link>
                <span> </span>
                <Link to="/clearAll">Clear All Notes</Link> */}
      </Container>
    </Navbar>
  );
};
