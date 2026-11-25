import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

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
            <Nav.Link href="/cinemas">Cinemas</Nav.Link>
            <Nav.Link href="/showtimes">Showtimes</Nav.Link>
            <Nav.Link href="/food and drinks">Food and Drinks</Nav.Link>
            <Nav.Link href="/about us">About Us</Nav.Link>
            <Nav.Link href="/contact us">Contact Us</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <button>Book Tickets</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;