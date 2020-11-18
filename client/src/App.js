import './App.css';
import React, {useState} from 'react'
import MovieList from './components/MovieList'
import SearchBar from './components/SearchBar'

function App() {

  const [state, setstate] = useState([]) 

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

  return (
    <div className="App">
      <SearchBar search={search}/>
      <div>
       {movies}
      </div>
    </div>
  );
}

export default App;