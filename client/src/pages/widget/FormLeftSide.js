import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { authStyles } from "../../themes/styles";
import bubble from "../../assets/images/bubble.svg";
import authBgImage from "../../assets/images/bg-img.png";

const FormLeftSide = () => {
  const classes = authStyles({ bgImage: authBgImage });
  return (
    <Grid item className={classes.formLeftContainer} md={5} xl={4} xs={5}>
      <img style={{ width: "4rem", marginBottom: "2rem" }} src={bubble} alt="chat" />
      <Typography variant="h5">Converse With anyone</Typography>
      <Typography variant="h5">with any language</Typography>
    </Grid>
  );
};

export default FormLeftSide;
