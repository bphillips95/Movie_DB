import React from 'react'

export default function MovieList({movie}) {
    return (
        <div>
           <h4>{movie.Title} </h4> 
            <img src={movie.Poster} alt=''/>
        </div>
    )
}
