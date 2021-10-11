import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { authStyles } from "../../themes/styles";
import PropTypes from "prop-types";

const FormContainer = ({ children, title = "" }) => {
  const classes = authStyles();
  return (
    <Grid container justifyContent="center" alignItems="center" className={classes.formContainer}>
      <Typography className={classes.formTitle}>{title}</Typography>
      {children}
    </Grid>
  );
};

FormContainer.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

export default FormContainer;
