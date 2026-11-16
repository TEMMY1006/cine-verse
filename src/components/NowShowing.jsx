import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MovieCard from './MovieCard';

const NowShowing = () => {


const movies = [
  { id: 1, 
    title: "Avengers: Doomsday",
    rating: "16+",
    duration: "3h 00min",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYaT6IHyHfx89hyFLymUyZRrgbvUOur2LlhsPLN7IxjA&s=10"
  },

  { id: 2, 
    title: "Avengers: Endgame",
    rating: "16+",
    duration: "3h 00min",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBHuijcDqq1e-2kRx2RbZqHAItrnpksbsA7eK8rTdoow&s=10"
  },

  { id: 3, 
    title: "Lupin",
    rating: "18+",
    duration: "3h 00min",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUr9gzzHMJqv56dly7ACralo7DpwqaMzGqnQLx4G2UFA&s=10"
  },

  { id: 4, 
    title: "JagunJagun",
    rating: "18+",
    duration: "3h 00min",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8lxgQcZTMg9Zi-8fHgEcviOhP89Onjg7dA-jIUXC3yw&s"
  },

  { id: 5, 
    title: "Koleosho",
    rating: "16+",
    duration: "3h 00min",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR69j2ZgkqAkhF76eH02kxGUkeWqmJNwicpcFwIzCJWYA&s=10"
  },

  { id: 6, 
    title: "No fury",
    rating: "16+",
    duration: "3h 00min",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO7BFZxNmfkZ8Z7ZO0gzTrtQAqwXBerUyO6d0k4GSuxg&s=10"
  },

  { id: 7, 
    title: "Warlord",
    rating: "16+",
    duration: "3h 00min",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY5loVJpRMcBD3qgNS1xmy9P51yuNhHwsBul2DCMg7Hg&s=10"
  },

  { id: 8, 
    title: "Ip Man",
    rating: "16+",
    duration: "3h 00min",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREzWDcUvQOs7z7p7fto34z7WDAtZzVvUmEheD3412EXg&s=10"
  },

  { id: 9, 
    title: "Line of Duty",
    rating: "16+",
    duration: "3h 00min",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ1Y8VpgA0WOwxQ6ouL2grwAfa-VKhDAKIkh7mLCqHpw&s=10"
  },
]




  return (
    <div>
        <section>
          <Container>
<div>
  <p>Experience the Magik</p>
  <h2>Now Showing</h2>
</div>





      <Row>
        {movies.map((movie) => (

          <Col key={movie.id}>
            
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