import './App.css';
import React, {useState, useEffect} from 'react'
import MovieList from './components/MovieList'
import SearchBar from './components/SearchBar'

function App() {

  const [state, setstate] = useState([])

  const URL = "https://movie-database-imdb-alternative.p.rapidapi.com/?s=Avengers%&page=1&r=json"

  // useEffect(() => {
  //   fetch(URL, {
  //     "headers": {
  //       "x-rapidapi-key": process.env.REACT_APP_API_KEY,
  //       "x-rapidapi-host": process.env.REACT_APP_API_HOST,
  //       "Content-Type": 'application/json'
  //     }
  //   })
  //   .then(r => r.json()).then(data => {
  //     setstate(data)
  //    })
  // }, [])
  
  const movies = state?.Search?.map(movie => <MovieList movie={movie}/> )

  const search = info => console.log(info)

  // Have to hold movie id, if click on movie fetch movie info with movie id. 

  return (
    <div className="App">
      <h3>Front-end here</h3>
      <SearchBar search={search}/>
      <div>
       {/* {movies} */}
      </div>
    </div>
  );
}

export default App;
