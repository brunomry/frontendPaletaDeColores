import { Nav, Navbar, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <header className="">
      <Navbar expand="md" className="bg-body-tertiary py-3">
        <Container className="d-flex flex-md-column gap-3">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-center mb-3">
              <NavLink
               className="nav-link me-3 fs-5 mt-3"
               to="/"
              >
                Paleta de Colores
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Menu;
