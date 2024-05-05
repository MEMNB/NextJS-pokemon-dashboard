//import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";
import { FavoritePokemons } from "@/pokemons/components/FavoritePokemons";
//import { IoHeartOutline } from "react-icons/io5";


export const metadata = {
 title: 'Favoritos',
 description: 'Ad minin sit cupidan culpa',
};


export default async function PokemonsPage() {

  return (
    <div className="flex flex-col">

      <span className="text-5xl my-2">Pokémons favoritos<small className="text-pink-500">Global state</small></span>

      {/*<PokemonGrid pokemons={[]} />*/}
      <FavoritePokemons />
      
      
    </div>
  );
}