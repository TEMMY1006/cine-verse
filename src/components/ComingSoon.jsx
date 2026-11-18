import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MovieCard from './MovieCard';

const ComingSoon = () => {


const movies = [
  { id: 1, 
    title: "RAMPAGE",
    rating: "16+",
    duration: "3h 00min",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoQKWCSc9VB3eNKnEeDFWvFz4PNCVg4Bel-VKJXfsxRA&s=10"
  },

  { id: 2, 
    title: "DUNE",
    rating: "16+",
    duration: "3h 00min",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRylJUeDX0A3szgi45w98Mu_lnGQ20a5PErFHJsrPV9CA&s=10"
  },

  { id: 3, 
    title: "JUMANJI",
    rating: "18+",
    duration: "3h 00min",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQER4kCKpRZxqO6mwl3zoR_Z4vdjbB9RYRJ9pSkxY5fbA&s"
  },

  { id: 4, 
    title: "BEE-KEEPER",
    rating: "18+",
    duration: "3h 00min",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKf9eMTGbAowqAOSf3-Cmgns_YWUvhoHxXsTVgo1yKTA&s=10"
  },

  { id: 5, 
    title: "WILDWOOD",
    rating: "16+",
    duration: "3h 00min",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSivihaY5mefrBPREy7w2Xol8_ATudtW2V60hAy0yOv4A&s=10"
  },

  { id: 6, 
    title: "DRUMMER-BOY",
    rating: "16+",
    duration: "3h 00min",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgOqQWoKUpMBsy-98Td4JlHIOjxZV1D-yy_uZvqtm5pQ&s=10"
  },
  
]




  return (
    <div className='grad'>
        <section className='now-showing  text-white py-5 px-0'>
          <Container>
<div className='h2'>
  <h2>Coming Soon</h2>
</div>




      <Row className='row'>
        {movies.map((movie) => (

          <Col lg={2} key={movie.id}>
            
            <MovieCard movie={movie}/>
          </Col>
        ))
}
      </Row>
    </Container>




        </section>
    </div>
  )
}

export default ComingSoon