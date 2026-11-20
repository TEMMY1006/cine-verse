import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Navbar expand="lg" className="bg-black py-3" sticky="top">
      <Container>
        <Navbar.Brand href="/">
            <img src="/gold.png" alt="" width="250px" height="80px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/movies">Cinemas</Nav.Link>
            <Nav.Link href="/movie details">Showtimes</Nav.Link>
            <Nav.Link href="/book tickets">Food & Drinks</Nav.Link>
            <Nav.Link href="/contact">About Us</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
            <Nav.Link href="/contact">Login</Nav.Link>
            <button>Book Tickets</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;