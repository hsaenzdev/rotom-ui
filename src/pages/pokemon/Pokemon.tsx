import { FC, useMemo } from "react";
import { useGetPokemon } from "./hooks/useGetPokemon";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { capitalizeFirstLetter } from "../../utils/stringUtils";
import { transformToMetric } from "../../utils/numberUtils";
import { POWER_TYPE_COLORS } from "../../constants";
import { useGetSpecies } from "./hooks/useGetSpecies";

interface Props {
  pokemonName: string;
}

const POKEMON_WIDTH = 400;

export const Pokemon: FC<Props> = (props) => {
  const { pokemon } = useGetPokemon({ pokemonName: props.pokemonName });

  const { species } = useGetSpecies({
    pokemonoId: pokemon?.id,
  });

  const memoizedTextFlavorEntries = useMemo(
    () =>
      species?.flavorTextEntries.filter(({ language }) => language === "en") ||
      [],
    [species?.flavorTextEntries],
  );

  const memoizedPokemonName = useMemo(() => {
    if (!pokemon?.name) {
      return "";
    }

    return capitalizeFirstLetter(pokemon.name);
  }, [pokemon?.name]);

  const memoizedPokemonNumber = useMemo(() => {
    if (!pokemon?.id) {
      return "0000";
    }

    return pokemon.id.toString().padStart(4, "0");
  }, [pokemon?.id]);

  const baseBackgroundColor = useMemo(
    () =>
      pokemon?.types[0]?.name
        ? POWER_TYPE_COLORS[pokemon?.types[0]?.name].backgroundColor
        : "",
    [pokemon?.types],
  );

  return (
    <Grid container justifyContent="center">
      <Grid item>
        <Grid container justifyContent={"flex-end"}>
          <Grid item>
            <Card sx={{ width: POKEMON_WIDTH }} elevation={4}>
              <CardHeader
                sx={{
                  backgroundColor: baseBackgroundColor,
                  height: POKEMON_WIDTH / 2,
                }}
              />
              <CardMedia
                sx={{
                  marginTop: -30,
                }}
                component="img"
                image={pokemon?.sprites?.officialArtwork?.frontDefault}
              />
              <CardContent
                sx={{
                  marginTop: -2,
                }}
              >
                <Grid container direction="column" rowSpacing={5}>
                  <Grid item>
                    <Grid
                      container
                      direction="column"
                      alignItems={"center"}
                      justifyContent={"center"}
                    >
                      <Grid item>
                        {pokemon?.id ? (
                          <Typography variant="h4" color="InfoText">
                            {memoizedPokemonName}
                          </Typography>
                        ) : (
                          <Box
                            sx={{
                              mt: 1,
                            }}
                          >
                            <Typography variant="overline" color="InfoText">
                              POKEMON INFO
                            </Typography>
                          </Box>
                        )}
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle2" color="lightgray">
                          #{memoizedPokemonNumber}
                        </Typography>
                      </Grid>
                      <Grid item sx={{ mt: 1 }}>
                        <Typography variant="body2" align="center">
                          {memoizedTextFlavorEntries.length > 0 &&
                            memoizedTextFlavorEntries[0].flavorText}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Grid container justifyContent={"space-evenly"}>
                      <Grid item>
                        <Typography variant="subtitle1">
                          {transformToMetric(pokemon?.height ?? 0)}m
                        </Typography>
                      </Grid>
                      <Divider orientation="vertical" flexItem />
                      <Grid item>
                        <Stack direction="row" spacing={1}>
                          {pokemon?.types.map((type, key) => (
                            <Chip
                              key={key}
                              label={
                                <Typography variant="caption">
                                  {capitalizeFirstLetter(type?.name ?? "")}
                                </Typography>
                              }
                              sx={{
                                color: POWER_TYPE_COLORS[type?.name].color,
                                background:
                                  POWER_TYPE_COLORS[type?.name].backgroundColor,
                              }}
                              variant="filled"
                            />
                          ))}
                        </Stack>
                      </Grid>
                      <Divider orientation="vertical" flexItem />
                      <Grid item>
                        <Typography variant="subtitle1">
                          {transformToMetric(pokemon?.weight ?? 0)}kg
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Divider flexItem sx={{ mt: 5 }} />
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
