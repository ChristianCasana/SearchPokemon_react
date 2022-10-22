import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import PokemonCard from './components/PokemonCard'

function App() {

  //* Gaurda la información que nos trae la API
  const [pokemon, setPokemon] = useState()
  //* Guarda el texto que nos da el usuario en input
  const [textSearch, setTextSearch] = useState('')

  useEffect(() => {
    let URL
    if (textSearch) {
      URL = `https://pokeapi.co/api/v2/pokemon/${textSearch}`
    } else {
      URL = ('https://pokeapi.co/api/v2/pokemon/pikachu')
    }
    axios.get(URL)
      .then(res => setPokemon(res.data))
      .catch(err => console.log(err))
  }, [textSearch])

  console.log(pokemon);

  const handleSubmit = e => {
    e.preventDefault()
    setTextSearch(e.target.search.value)
  }

  return (
    <div className="App">
      <h1>Buscando Pokemons</h1>
      <form onSubmit={handleSubmit}>
        <input id='search' type="text" />
        <button>Search</button>
      </form>
      < PokemonCard
        pokemon={pokemon} />
    </div>
  )
}

export default App
