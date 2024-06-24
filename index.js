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
    console.log(pokemonData);
    createPokemonCard(pokemonData);
  } catch (error) {
    console.log(error);
  }
};

const createPokemonCard = (pokemonData) => {
  const pokemonEl = document.createElement("div");
  pokemonEl.classList.add("pokemon");

  const pokemonInnerHtml = `<div class="img-container">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonData.id}.png"
            alt=""
          />
        </div>
        <div class="info">
          <span class="number">${pokemonData.id}</span>
          <h3 class="name">${pokemonData.name}</h3>
          <small class="type">Type <span>${pokemonData.types[0].type.name}</span></small>
        </div>`;
  pokemonEl.innerHTML = pokemonInnerHtml;
  console.log(pokemonEl);
  pokeContainer.appendChild(pokemonEl);
};

fetchPokemons();
