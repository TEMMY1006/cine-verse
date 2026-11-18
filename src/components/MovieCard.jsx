import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

const MovieCard = ({ movie }) => {
  return (
    <Card className='movie-card position-relative border-0'>

      {/* Movie Poster */}
      <Card.Img variant="top" src={movie.poster} alt='{movie.title}'/>

      {/* Top-right age rating badge */}
      <Badge bg="dark" className='movie-rating position-absolute top-0 end-0 m-2 p-3'>{movie.rating}</Badge>

      {/* overlay badge */}
      <div className='movie-overlay'>

<div className='text-center'>
        <Button variant='danger' size='sm'>
          <span>▶</span>Play Trailer
        </Button>
</div>

{/* Movie Title */}
<Card.Title>Movie Title</Card.Title>


{/* Duration and Rating now */}
<div>
  <span>⏱️ {movie.duration}</span>/ | 
  <span>{movie.rating}</span>
</div>


{/* Buy Tickets */}
<Button>Buy Ticket</Button>

{/* More Info */}
<a href="">More Info ➔</a>

      </div>
    </Card>

    
  )
}

export default MovieCard