import React from 'react'

export default function SavedMovies({movie}) {
    return (
        <div>
           <h3> {movie.title} </h3> 
           <br/>
           <button> Likes: {movie.likes}</button> 
           <button> Dislikes: {movie.dislikes}</button>
        </div>
    )
}
