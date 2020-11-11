import './App.css';
import React, {useState, useEffect} from 'react'

function App() {

  const [state, setstate] = useState([])

  const URL = "https://movie-database-imdb-alternative.p.rapidapi.com/?s=Avengers%20Endgame&page=1&r=json"

  useEffect(() => {
    fetch(URL, {
      "access-control-allow-credentials": "true",
      "access-control-allow-origin": "*",
      "method": "GET",
      "headers": {
        "x-rapidapi-key": process.env.REACT_API_KEY,
        "x-rapidapi-host": process.env.REACT_API_HOST,
        "Content-Type": 'application/json'
      }
    })
    .then(r => r.json()).then(data => {
      setstate(data)
     })
  }, [])

  return (
    <div className="App">
      Front-end here
    </div>
  );
}

export default App;
