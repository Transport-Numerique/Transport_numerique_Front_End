import { Box, Grid, Link, Stack, Typography } from "@mui/material";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import InfoIcon from "@mui/icons-material/Info";
import ContactsIcon from "@mui/icons-material/Contacts";
import AssignmentIcon from "@mui/icons-material/Assignment";
import React from "react";

function Footer() {
  return (
    <>
      <Box
        sx={{
          backgroundImage: "linear-gradient(120deg, #ffffff 50%, #000000 50%)",
        }}
        width={"100%"}
        mt={4}
      >
        <Grid
          container
          py={5}
          justifyContent={"space-around"}
          alignItems={"flex-start"}
        >
          <Stack>
            <Typography variant="h5" color={"back"}>
              <InfoIcon /> Coordonnees de contact
            </Typography>
            <Link color="inherit" underline="hover">
              <span sx={{ marginRight: "4px", fontSize: "12px" }}>&bull;</span>
              Lot : ITH 28 Andraharo
            </Link>
            <Link color="inherit" underline="hover">
              <span sx={{ marginRight: "4px", fontSize: "12px" }}>&bull;</span>
              +261 34 047 98
            </Link>
            <Link color="inherit" underline="hover">
              <span sx={{ marginRight: "4px", fontSize: "12px" }}>&bull;</span>
              transnum@gmail.com
            </Link>
          </Stack>
          <Stack>
            <Typography variant="h5" color={"back"}>
              <AssignmentIcon /> Reseaux sociaux
            </Typography>
            <Link color="inherit" underline="hover">
              <span sx={{ marginRight: "4px", fontSize: "12px" }}>&bull;</span>
              FB:Transport Numerique
            </Link>
            <Link color="inherit" underline="hover">
              <span sx={{ marginRight: "4px", fontSize: "12px" }}>&bull;</span>
              Whatsapp : +261 34 047 98
            </Link>
          </Stack>

          <Stack>
            <Typography variant="h5" color={"white"}>
              <HomeRepairServiceIcon />
              Politique de cookies
            </Typography>
            <Link color="white" underline="hover">
              <span sx={{ marginRight: "4px", fontSize: "12px" }}>&bull;</span>
              Politique de confidentiel
            </Link>
            <Link color="white" underline="hover">
              <span sx={{ marginRight: "4px", fontSize: "12px" }}>&bull;</span>
              Politique malgache
            </Link>
          </Stack>
          <Stack>
            <Typography variant="h5" color={"white"}>
              <HomeRepairServiceIcon />
              Politique de cookies
            </Typography>
            <Link color="white" underline="hover">
              <span sx={{ marginRight: "4px", fontSize: "12px" }}>&bull;</span>
              Politique de confidentiel
            </Link>
            <Link color="white" underline="hover">
              <span sx={{ marginRight: "4px", fontSize: "12px" }}>&bull;</span>
              Politique malgache
            </Link>
          </Stack>
        </Grid>
      </Box>
      <footer
        style={{
          backgroundColor: "#000",
          color: "#fff",
          padding: "5px 0",
          textAlign: "center",
          width: "100%",
        }}
      >
        <p>© Nante Design 2024</p>
      </footer>
    </>
  );
}

export default Footer;
