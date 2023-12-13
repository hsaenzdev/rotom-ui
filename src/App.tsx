import { Typography } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";

export const App = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
      </Route>
      <Route
        path="*"
        element={
          <>
            <Typography>PAGE NOT FOUND</Typography>
          </>
        }
      />
    </Routes>
  );
};
