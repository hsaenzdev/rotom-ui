import { Pokemon } from "./pokemonTypes";

export interface PokemonQueryPayload {
  pokemon: Pokemon;
}

export interface PokemonQueryVariables {
  name: string;
}
