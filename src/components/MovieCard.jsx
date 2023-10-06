import React from 'react';
import { Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MovieCard = ({movie,genre}) => {


    const div_style = {
        backgroundImage:`url(https://www.themoviedb.org/t/p/w355_and_h200_multi_faces${movie?.poster_path})`
        ,height:"200px",width:"355px"
    }
 
   

   // 배열명.find((매개변수) => 매개변수.id === 비교할값).name 

   

    

  return (
    <div style={div_style} className='movie-card'>
      <Link to={`/movies/${movie.id}`}>
      <div className='poster'>
        <h3 className='movieName'>{movie.title}</h3>
        <div className='movieGenre'>
          {movie.genre_ids.map((item,index)=>(<Badge bg="danger" key={index} >
            {/* find() : 일치한 정보 중 첫번째 요소만 반환하는 함수 */}
            {genre.find((item2)=>(item2.id === item)).name}
            
            </Badge>))}
        </div>
        <div className='movieVote'>
          <span>{`평점: ${movie.vote_average}점`}</span>
          <span>|</span>
          <span>{movie.adult?'청불':'청소년관람'}</span>
        </div>
      </div>
      </Link>
    </div>
  )
}

export default MovieCard