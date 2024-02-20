import React from "react";
import { Button, Grid, IconButton, Typography } from "@mui/material";
import logo from "../../assets/image/Logo.png";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  const handelNavigate = () => {
    navigate("/trajet");
  };
  const handelHome = () => {
    navigate("/");
  };
  return (
    <>
      <Grid
        sx={{
          backgroundImage: "linear-gradient(120deg, #ffffff 50%, #000000 50%)",
        }}
        container
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Grid
          container
          // justifyContent={"space-between"}
          alignItems={"center"}
          item
          xs={5}
          width={"100%"}
        >
          <Grid ml={4}>
            <img
              src={logo}
              alt="Logo"
              style={{ width: "100%", height: "10vh" }}
            />
          </Grid>
          <Typography mx={3} variant="h4">
            TransNum
          </Typography>
        </Grid>
        <Grid
          container
          item
          xs={5}
          justifyContent={"space-around"}
          alignItems={"center"}
          color={"white"}
        >
          <IconButton style={{ color: "white" }}>
            <SearchIcon />
          </IconButton>
          <Button
            onClick={handelHome}
            sx={{ color: "white", border: "2px white solid" }}
            variant="outlined"
          >
            Acceuil
          </Button>
          <Button
            onClick={handelNavigate}
            sx={{ color: "white", border: "2px white solid" }}
            variant="outlined"
          >
            Trajet
          </Button>
          <Button
            sx={{ color: "white", border: "2px white solid" }}
            variant="outlined"
          >
            Apropos
          </Button>
        </Grid>
      </Grid>
      <Grid></Grid>
    </>
  );
}

export default Header;
