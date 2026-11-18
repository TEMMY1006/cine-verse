import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MovieCard from './MovieCard';

const NowShowing = () => {


const movies = [
  { id: 1, 
    title: "AVENGERS: DOOMSDAY",
    rating: "16+",
    duration: "3h 00min",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYaT6IHyHfx89hyFLymUyZRrgbvUOur2LlhsPLN7IxjA&s=10"
  },

  { id: 2, 
    title: "AVENGERS: ENDGAME",
    rating: "16+",
    duration: "3h 00min",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBHuijcDqq1e-2kRx2RbZqHAItrnpksbsA7eK8rTdoow&s=10"
  },

  { id: 3, 
    title: "LUPIN",
    rating: "18+",
    duration: "3h 00min",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUr9gzzHMJqv56dly7ACralo7DpwqaMzGqnQLx4G2UFA&s=10"
  },

  { id: 4, 
    title: "JAUGUN-JAGUN",
    rating: "18+",
    duration: "3h 00min",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsD29R_b1ile1Bt3KHy4RyuSw7K9vBitaDtiYnixRW6A&s=10"
  },

  { id: 5, 
    title: "KOLEOSO",
    rating: "16+",
    duration: "3h 00min",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx77FB3d0VNMKMHi5OXoyQcw6kd-u3PUOnVqdUMwpj3g&s=10"
  },

  { id: 6, 
    title: "NO FURY",
    rating: "16+",
    duration: "3h 00min",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO7BFZxNmfkZ8Z7ZO0gzTrtQAqwXBerUyO6d0k4GSuxg&s=10"
  },

  { id: 7, 
    title: "WARLORD",
    rating: "16+",
    duration: "3h 00min",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCx46qoJUMQlcuRRtIZa0Rmyd-EAka5nHVTa8I3uhjgA&s=10"
  },

  { id: 8, 
    title: "IP MAN",
    rating: "16+",
    duration: "3h 00min",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREzWDcUvQOs7z7p7fto34z7WDAtZzVvUmEheD3412EXg&s=10"
  },

  { id: 9, 
    title: "LINE OF DUTY",
    rating: "16+",
    duration: "3h 00min",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ1Y8VpgA0WOwxQ6ouL2grwAfa-VKhDAKIkh7mLCqHpw&s=10"
  },
   { id: 10, 
    title: "SPIDER",
    rating: "16+",
    duration: "3h 00min",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ERgIy1sHV5-aUh_86vXrXsW1TF1LglMKs5aVUJdLBw&s=10"
  },
   { id: 11, 
    title: "THE TRAITORS",
    rating: "16+",
    duration: "3h 00min",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpTkmRf4bIFMzdWZ4jUZHDnJeYDvpuN-LIrSCRgZEMEw&s=10"
  },
  { id: 11, 
    title: "BLACK ADAM",
    rating: "16+",
    duration: "3h 00min",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHkzFP8yD6MU7_3FXbsFksqPx68KjOAw27tLbcNo3j5A&s=10"
  },
  
]




  return (
    <div>
        <section className='now-showing bg-dark text-white py-5 px-0'>
          <Container>
<div className='hell'>
  <p>Experience the Magik</p>
  <h2>Now Showing</h2>
</div>





      <Row>
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

export default NowShowing