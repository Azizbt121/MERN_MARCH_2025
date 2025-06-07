const pokemon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 35,  "name": "Clefairy",   "types": ["normal"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);

const isEven =(x)=>{
     return x%3===0
}

const findPokemon = pokemon.filter(poke =>  isEven(poke.id));

const pokeType = pokemon.filter(poke => poke.types.includes("fire"));

const pokePower = pokemon.filter(poke => poke.types.length >=2 );

const pokeNames = pokemon.map(poke => poke.name);

const greater=(x)=>{
    return x>99
}
const pokeId = pokemon.filter(poke =>greater(poke.id) );


const pokePoison = pokemon.filter(poke => poke.types.includes("poison") || poke.types.length > 2);

const pokePlane = pokemon.filter(poke => poke.types[1]=="flying");

const pokeSurf = pokemon.filter(poke => poke.types.includes("normal")).length;

const pokeThrow = pokemon.filter(poke => poke.id !== 48);


const updatedPokemon = pokemon.map(poke => {
  if (poke.id === 35) {
    return { ...poke, types: ["fairy"] };
  }
  return poke;
});



