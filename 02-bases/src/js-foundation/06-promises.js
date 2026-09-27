


const getPokemonById = ( id ) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((response) => console.log(response.json()
    .then((pokemon) => console.log(pokemon.name))
))
}

module.exports = {
    getPokemonById
}