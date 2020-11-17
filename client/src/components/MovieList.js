import React, {useState} from 'react'

export default function MovieList({movie}) {

    const [infoState, setinfoState] = useState([])
    const [likes, setlikes] = useState(false)
    const [dislikes, setdislikes] = useState(false)
    const [savedLikes, setsavedLikes] = useState(0)
    const [savedDislikes, setsavedDislikes] = useState(0)

    const handleInfoClick = (id) => {
        fetch(`https://movie-database-imdb-alternative.p.rapidapi.com/?i=${id}&r=json`, {
            "headers": {
              "x-rapidapi-key": process.env.REACT_APP_API_KEY,
              "x-rapidapi-host": process.env.REACT_APP_API_HOST,
              "Content-Type": 'application/json'
            }
          })
          .then(r => r.json()).then(data => {
                setinfoState(data)
               })
    }
    const handleLikes = () => {
       let newLikes = !likes
       setlikes(newLikes)
       if(newLikes === true) {
           setsavedLikes(savedLikes+1)
       } else {
        setsavedLikes(savedLikes-1)
       }
    }
    const handleDislikes = () => {
        let newDislikes = !dislikes
        setdislikes(newDislikes)
        if(newDislikes === true) {
            setsavedDislikes(savedDislikes+1)
        } else {
            setsavedDislikes(savedDislikes-1)
        }
    }
    return (
        <div>
           <h4>{movie.Title} </h4> 
            <img src={movie.Poster} alt='' />
            <br/>
            <button onClick={() => handleInfoClick(movie.imdbID)}>Click here for more info</button>
            {infoState.Plot ? 
            <div>
               Director: {infoState.Director} 
               <br/>
               Released: {infoState.Year}
                <br/>
               Plot: {infoState.Plot}
               <br/>
            <button onClick={handleLikes}  >Like: {savedLikes}</button> 
            <button onClick={handleDislikes} >Dislike: {savedDislikes}</button>
            </div> : null}
        </div>
    )
}
