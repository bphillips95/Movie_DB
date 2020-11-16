import React, {useState} from 'react'

export default function MovieList({movie}) {

    const [state, setstate] = useState([])

    const handleClick = (id) => {
        fetch(`https://movie-database-imdb-alternative.p.rapidapi.com/?i=${id}&r=json`, {
            "headers": {
              "x-rapidapi-key": process.env.REACT_APP_API_KEY,
              "x-rapidapi-host": process.env.REACT_APP_API_HOST,
              "Content-Type": 'application/json'
            }
          })
          .then(r => r.json()).then(data => {
                setstate(data)
               })
    }

    return (
        <div>
           <h4>{movie.Title} </h4> 
            <img src={movie.Poster} alt='' onClick={() => handleClick(movie.imdbID)}/>
            {/* movie info here on click */}
        </div>
    )
}
