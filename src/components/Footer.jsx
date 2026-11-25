import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Nav } from 'react-bootstrap';
import gold from '/gold.png'
import Form from 'react-bootstrap/Form';

const Footer = () => {
  return (
    <div>
      <footer className='bg-black text-white' >
<Container fluid>

      <Row>

        <Col>
        <img src={gold} alt="" />
        <p>Escape Reality, Enter the World of Cinema</p>
        <p>CineVerse – Where Every Story Comes Alive. 
Explore endless movies, discover amazing stories,and experience the magic of cinema.
Your world of entertainment, all in one place.</p>


        </Col>

        <Col>
        <h5>Quick Links</h5>
<Nav>
         <Nav.Link href="/home">Home and Movie Details</Nav.Link> 

          <Nav.Link href="/coming soon">Coming Soon</Nav.Link>

           <Nav.Link href="/now showing">Now Showing</Nav.Link>

            <Nav.Link href="/cinemas">Cinemas</Nav.Link>

             <Nav.Link href="/showtimes">Showtimes</Nav.Link>
</Nav>
        </Col>


        <Col>
<h5>Explore</h5>
<Nav>
<Nav.Link href="/refreshment">Refreshment</Nav.Link>
<Nav.Link href="/about us">About us and Services</Nav.Link>
<Nav.Link href="/contact us">Contact us </Nav.Link>
<Nav.Link href="/account">My Account</Nav.Link>
<Nav.Link href="/bookings">My Bookings</Nav.Link>
</Nav>
        </Col>

        <Col>
        <h5>Support</h5>
        <Nav>
        <Nav.Link href="/helpcenterindetails">Help Center in Details</Nav.Link>
<Nav.Link href="/FAQs">FAQs</Nav.Link>
<Nav.Link href="/bookingassistance">Booking Assistance</Nav.Link>
<Nav.Link href="/cancellationpolicy">Cancellation Policy</Nav.Link>
</Nav>
        </Col>

        <Col>
        <h5>Follow us</h5>
        <Nav>
        <Nav.Link href="https://web.facebook.com/filmoneng" target='_blank'> <i class="fa-brands fa-facebook"></i>Facebook</Nav.Link> <br />
<Nav.Link href="https://www.instagram.com/filmhousecinemas"><i class="fa-brands fa-instagram"></i>Instagram</Nav.Link>
<Nav.Link href="https://www.instagram.com/filmhousecinemas"><i class="fa-brands fa-x-twitter"></i>X(Twitter)</Nav.Link>
<Nav.Link href="https://www.youtube.com/@filmhousecinemas9926"><i class="fa-brands fa-youtube"></i>Youtube</Nav.Link>
</Nav>
        </Col>
        
      

      </Row>

      <Row className='border-top border-secondary mt-5 py-4'>
        <Col>
        <h3>Stay Updated with Cine-Verse</h3>
        <p>Get the latest movie releases, exclusive offers and cinema updartes delivered to Your inbox</p>
        </Col>
        <Col>
        <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>

      <Button type='button' style={{backgroundColor: 'goldenrod', color: 'black', whiteSpace:'nowrap'}}>Subscribe</Button>
    </Form>
    
        </Col>
      </Row>

      <Row  className='border-top border-secondary mt-5 py-4'>
        <Col>&copy; {new Date().getFullYear()} CineVerse. All Rights Reserved.</Col>
      </Row>
    </Container>
      </footer>
    </div>
  )
}

export default Footer