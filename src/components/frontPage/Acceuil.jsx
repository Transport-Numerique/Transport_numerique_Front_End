import React from "react";
import Header from "../structure/Header";
import bannier from "../../assets/image/city-trucks-rush-by-delivering-urgent-cargo-generated-by-ai.jpg";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const gridStyle = {
  backgroundImage: `url(${bannier})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  width: "100%",
  height: "100vh",
};

function Acceuil() {
  const navigate = useNavigate();
  const handelNavigate = () => {
    navigate("/trajet");
  };
  return (
    <>
      <Box position={"fixed"} zIndex={55} width={"100%"}>
        <Header />
      </Box>

      <Grid maxHeight={"100%"} container style={gridStyle}>
        <Grid
          container
          sx={{
            backdropFilter: "blur(1px)", // Appliquer un flou de 5px à l'arrière-plan
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Couleur de fond avec transparence pour l'effet de flou
          }}
          justifyContent={"center"}
          alignItems={"center"}
          direction={"column"}
        >
          <Typography variant="h3" color={"white"} fontStyle={"italic"}>
            Un moyen rapide et facile pour voyager
          </Typography>
          <Typography fontStyle={"italic"} variant="h5" color={"white"}>
            avec
          </Typography>
          <Typography
            variant="h2"
            fontFamily={"monospace"}
            fontWeight={"bold"}
            color={"white"}
          >
            TransNUM
          </Typography>
          <Button
            onClick={handelNavigate}
            sx={{ color: "white", my: 3 }}
            variant="contained"
          >
            Start
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default Acceuil;
