import { useQuery } from "@apollo/client";
import { useMemo } from "react";
import { POKEMON_QUERY } from "../../queries/pokemonQuery";
import {
  PokemonQueryPayload,
  PokemonQueryVariables,
} from "../../types/pokemon/pokemonQueryTypes";
import { Pokemon } from "../../types/pokemon/pokemonTypes";

interface Props {
  pokemonName: string;
}

export const useGetPokemon = (
  props: Props,
): {
  loading: boolean;
  pokemon: Pokemon | undefined;
} => {
  const sanitizedPokemonName = useMemo(
    () => props.pokemonName.toLocaleLowerCase().trim(),
    [props.pokemonName],
  );

  const { data, loading } = useQuery<
    PokemonQueryPayload,
    PokemonQueryVariables
  >(POKEMON_QUERY, {
    variables: {
      name: sanitizedPokemonName,
    },
    skip: !sanitizedPokemonName,
  });

  const pokemon = useMemo(() => data?.pokemon, [data]);

  return {
    loading,
    pokemon,
  };
};
