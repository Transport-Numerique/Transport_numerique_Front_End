import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Card from "./Card";
import Header from "../structure/Header";
import Footer from "../structure/Footer";
function ListCar() {
  const traject = [
    { id: 1, depart: "Tana", arriver: "Antsiranana", Horaire: "07:00" },
    { id: 2, depart: "Tana", arriver: "Mahajanga", Horaire: "07:00" },
    { id: 3, depart: "Tana", arriver: "Toamasina", Horaire: "07:00" },
    { id: 4, depart: "Tana", arriver: "Antsirabe", Horaire: "07:00" },
    { id: 5, depart: "Tana", arriver: "Toliara", Horaire: "07:00" },
    { id: 6, depart: "Tana", arriver: "Fianaratsoa", Horaire: "07:00" },
    { id: 7, depart: "Tana", arriver: "Morondava", Horaire: "07:00" },
    { id: 8, depart: "Tana", arriver: "Morondava", Horaire: "07:00" },
    { id: 9, depart: "Tana", arriver: "Antsiranana", Horaire: "07:00" },
    { id: 10, depart: "Tana", arriver: "Mahajanga", Horaire: "07:00" },
    { id: 11, depart: "Tana", arriver: "Toamasina", Horaire: "07:00" },
    { id: 12, depart: "Tana", arriver: "Antsirabe", Horaire: "07:00" },
    { id: 13, depart: "Tana", arriver: "Toliara", Horaire: "07:00" },
    { id: 14, depart: "Tana", arriver: "Fianaratsoa", Horaire: "07:00" },
    { id: 15, depart: "Tana", arriver: "Morondava", Horaire: "07:00" },
  ];
  return (
    <>
      <Box position={"fixed"} zIndex={55} width={"100%"}>
        <Header />
      </Box>
      <Box borderTop={"10vh white solid"}>
        <Typography
          sx={{
            textAlign: {
              xs: "center",
            },
          }}
          variant="h2"
          color={"#000000"}
          paddingX={6}
          fontWeight={"bolder"}
        >
          Tous les trajets
        </Typography>
      </Box>

      <Box
        py={3}
        boxShadow={10}
        sx={{
          width: "100%",
          borderRadius: "8px",
          backgroundColor: "white",
        }}
      >
        <Stack alignItems="center">
          <Grid
            container
            justifyContent={"center"}
            // display={"flex"}
            alignItems={"center"}
            margin="auto"
            // flexDirection={"row"}
            width={"100%"}
            // border={"red solid 2px"}
            // px={2}
            // sx={{
            //   overflowX: "hidden",
            //   "&::-webkit-scrollbar": {
            //     width: 0,
            //   },
            // }}
          >
            {traject &&
              traject.map((e) => (
                <Box key={e.id}>
                  <Grid
                    container
                    justifyContent={"center"}
                    // border={"red solid 2px"}
                    // m={2}
                    sx={{
                      minWidth: { xs: 300, sm: 350 },
                      borderRadius: 2,
                      overflow: "hidden",
                    }}
                    p={3}
                  >
                    <Card datas={e} />
                  </Grid>
                </Box>
              ))}
          </Grid>
        </Stack>
      </Box>
      <Footer />
    </>
  );
}

export default ListCar;
