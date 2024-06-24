const pokeContainer = document.getElementById("poke-container");
// console.log(pokeContainer)

const pokemonCount = 150;

const fetchPokemons = async () => {
  for (let id = 1; id <= pokemonCount; id++) {
    await getPokemon(id);
  }
};

const getPokemon = async (id) => {
  try {
    //Api call to the pokeapi

    const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    const res = await fetch(url);
    const pokemonData = await res.json();
    console.log(pokemonData)
  } catch (error) {
    console.log(error);
  }
};
fetchPokemons()