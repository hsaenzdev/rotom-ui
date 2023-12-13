import { gql } from "@apollo/client";

export const SPECIES_QUERY = gql`
  query species($id: Int!) {
    species(id: $id) {
      id
      name
      flavorTextEntries {
        language
        flavorText
      }
    }
  }
`;
