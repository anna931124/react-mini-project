import React from 'react'

const Banner = ({movie}) => {
    console.log('[Banner.jsx]:', movie);
    const div_style = {
        backgroundImage:`url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${movie?.poster_path})`
        
    }
    const title =  movie?.title
    const overview = movie?.overview
  return (
    <div style={div_style} className='banner'>
        <p className='title'>{title}</p>    
        <p className='overview'>{overview}</p>
    </div>
  )
}

export default Banner