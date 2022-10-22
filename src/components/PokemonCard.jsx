import React from 'react'

const PokemonCard = ({ pokemon }) => {

  return (
    <section>
      <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="sprite" />
      <h1>NamePokemon: {pokemon?.name}</h1>
      <h3>Type: </h3>
      <ul>
        {
          pokemon?.types.map(type => (
            <li key={type.type.name}>{type.type.name}</li>
          ))
        }
      </ul>
      <h3>Movements: </h3>
      <ul>
        {
          pokemon?.moves.map(move => (
            <li key={move.move.name}>{move.move.name}</li>
          ))
        }
      </ul>
    </section>
  )
}

export default PokemonCard