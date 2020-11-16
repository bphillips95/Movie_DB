import React from 'react'

export default function MovieList({movie}) {

    const handleClick = () => {

    }
    
    return (
        <div>
           <h4>{movie.Title} </h4> 
            <img src={movie.Poster} alt='' onClick={() => handleClick(movie.imdbID)}/>
        </div>
    )
}
