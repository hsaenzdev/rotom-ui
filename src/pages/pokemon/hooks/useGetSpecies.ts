import { useQuery } from "@apollo/client";
import {
  SpeciesQueryPayload,
  SpeciesQueryVariables,
} from "../../types/species/speciesQueryTypes";
import { SPECIES_QUERY } from "../../queries/speciesQuery";

interface Props {
  pokemonoId: number | undefined;
}

export const useGetSpecies = (props: Props) => {
  const { data } = useQuery<SpeciesQueryPayload, SpeciesQueryVariables>(
    SPECIES_QUERY,
    {
      variables: {
        id: props.pokemonoId ?? Infinity,
      },
      skip: !props?.pokemonoId,
    },
  );

  return {
    species: data?.species,
  };
};
