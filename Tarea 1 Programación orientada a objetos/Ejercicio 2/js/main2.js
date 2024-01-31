var pokemonList = ["Bulbasaur", "Charmander", "Squirtle", "Pikachu", "Eevee", "Jigglypuff", "Lucario"];

function seleccionarPokemon() {

  var indiceAleatorio = Math.floor(Math.random() * pokemonList.length);

  var pokemonSeleccionado = pokemonList[indiceAleatorio];

  alert(`${pokemonSeleccionado}, yo te elijo.`);
}

seleccionarPokemon();