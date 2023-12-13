import { gql } from "@apollo/client";

export const POKEMON_QUERY = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      height
      weight
      order
      sprites {
        frontDefault
        backDefault
        frontShiny
        backShiny
        officialArtwork {
          frontDefault
          frontShiny
        }
      }
      abilities {
        name
        url
      }
      types {
        name
        url
      }
    }
  }
`;
