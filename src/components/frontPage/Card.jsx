import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import image1 from "../../assets/image/camping-wheels-car-sustainable-travel.jpg";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
export default function card(props) {
  const data = props.datas;
  return (
    <Card
      sx={{ maxWidth: 345, textDecoration: "none" }}
      style={{ width: "100%" }}
      component={Link}
      to={`detail/${data.id}`}
    >
      <CardMedia sx={{ height: 200 }} image={image1} title="green iguana" />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          fontWeight={"bold"}
          component="div"
        >
          Depart :{" "}
          <span style={{ fontWeight: "initial", fontSize: "large" }}>
            {data.depart}
          </span>{" "}
          <br />
          Arriver :{" "}
          <span style={{ fontWeight: "initial", fontSize: "large" }}>
            {data.arriver}
          </span>
        </Typography>
        <Typography variant="body2" color="text.secondary"></Typography>
      </CardContent>
      <Grid container justifyContent={"flex-end"} pr={2}>
        <Button variant="contained">Reserver</Button>
      </Grid>
      <CardActions>{/* <Button size="small">Share</Button> */}</CardActions>
    </Card>
  );
}
