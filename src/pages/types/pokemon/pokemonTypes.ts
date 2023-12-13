export interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: PokemonSprites;
  abilities: Array<PokemonAbilities>;
  types: Array<PokemonPowerTypes>;
}

export interface PokemonAbilities {
  name: string;
  url: string;
}

export interface PokemonPowerTypes {
  name: string;
  url: string;
}

export interface PokemonSprites {
  frontDefault: string;
  backDefault: string;
  frontShiny: string;
  backShiny: string;
  officialArtwork: PokemonSpritesOfficialArtwork;
}

export interface PokemonSpritesOfficialArtwork {
  frontDefault: string;
  frontShiny: string;
}
