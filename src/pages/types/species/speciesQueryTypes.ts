import { Species } from "./speciesTypes";

export interface SpeciesQueryVariables {
  id: number;
}

export interface SpeciesQueryPayload {
  species: Species;
}
