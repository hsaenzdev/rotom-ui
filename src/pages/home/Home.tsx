import { useState } from "react";
import {
  Box,
  Divider,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Pokemon } from "../pokemon/Pokemon";

export const Home = () => {
  const [pokemonNameInput, setPokemonNameInput] = useState("");
  const [pokemonSearch, setPokemonSearch] = useState("");

  return (
    <Grid
      container
      spacing={4}
      padding={8}
      justifyContent={"center"}
    >
      <Grid item>
        <Paper
          elevation={4}
          sx={{
            p: 2,
            textAlign: "center",
          }}
        >
          <Divider sx={{mb: 2}}/>
          <Typography variant="h4">Pokedex</Typography>
          <Typography variant="caption" color="GrayText">
            Search a pokemon by its name or number
          </Typography>
          <Box
            sx={{
              mt: 3,
            }}
            component="form"
            onSubmit={(event) => {
              event.preventDefault();

              setPokemonSearch(pokemonNameInput);
            }}
          >
            <TextField
              sx={{
                width: 370,
              }}
              size="small"
              label="Enter a pokemon name or number"
              value={pokemonNameInput}
              type="search"
              onChange={(ev) => {
                setPokemonNameInput(ev.target.value);
              }}
            />
          </Box>
          <Divider sx={{ mt: 2 }} />
        </Paper>
      </Grid>

      <Grid item>
        <Pokemon pokemonName={pokemonSearch} />
      </Grid>
    </Grid>
  );
};
