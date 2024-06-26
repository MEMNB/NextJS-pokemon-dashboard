import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";


export const metadata = {
 title: '151 Pokémons',
 description: 'Ad minin sit cupidan culpa',
};


const getPokemons = async(limit = 20, offset = 0):Promise<SimplePokemon[]> => {
    const data:PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}151&offset=${offset}`)
    .then(res => res.json());

    const pokemons = data.results.map(pokemon => ({
      id: pokemon.url.split('/').at(-2)!,
      name: pokemon.name,
    }));

    //throw new Error('Esto es un error que no debería suceder');
    //throw notFound();

    return pokemons;
}

export default async function PokemonsPage() {

    const pokemons = await getPokemons(151);

  return (
    <div className="flex flex-col">

      <span className="text-5xl my-2">Listado de Pokémons <small className="text-pink-500">estático</small></span>

      <PokemonGrid pokemons={pokemons} />
    </div>
  );
}