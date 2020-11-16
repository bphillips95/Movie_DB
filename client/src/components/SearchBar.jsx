import React, {useState} from 'react'

function SearchBar({search}) {

    const [state, setstate] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        search(state)
    }

    return (
        <div>
         <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={state.value} onChange={(e) => setstate(e.target.value)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
        </div>
    )
}

export default SearchBar
