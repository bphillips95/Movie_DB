import './App.css';
import React, {useState, useEffect} from 'react'
import MovieList from './components/MovieList'
import SearchBar from './components/SearchBar'
import SavedMovies from './components/SavedMovies'
// import {Switch, Route} from 'react-router-dom'

function App() {

  const [state, setstate] = useState([]) 
  const [likedMovieList, setLikedMovieList] = useState([])
  const [showMovieList, setshowMovieList] = useState(false)

  useEffect(() => {
    fetch('http://localhost:8000/movies', {
      "headers": {
        "Content-Type": 'application/json'
      }
    })
    .then(r => r.json()).then(data => {
      setLikedMovieList(data)
     })
  }, [])
  
  const movies = state?.Search?.map(movie => <MovieList movie={movie}/> )

  const search = info => {
    fetch(`https://movie-database-imdb-alternative.p.rapidapi.com/?s=${info}%&page=1&r=json`, {
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
  const listSavedMovies = likedMovieList.map(movie => <SavedMovies movie={movie}  />)

  const toggle = () => {
    let newToggle = !showMovieList
    setshowMovieList(newToggle)
  }

  return (
    <div className="App">
      <SearchBar search={search}/>
      <div>
        <button onClick={toggle} >
          {!showMovieList ? <h4> Show Saved Movies </h4> : <h4> Hide Saved Movies </h4> }
        </button>
      </div>
      <div>
        {showMovieList ? listSavedMovies : null}
      </div>
      <div>
       {movies}
      </div>
    </div>
  );
}

export default App;