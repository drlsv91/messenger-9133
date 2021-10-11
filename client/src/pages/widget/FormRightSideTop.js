import { Button, Grid, Typography } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";
import { authStyles } from "../../themes/styles";
import PropTypes from "prop-types";

const FormRightSideTop = ({ title, buttonLabel, gotoUrl }) => {
  const classes = authStyles();
  const history = useHistory();
  return (
    <Grid container item justifyContent="center" alignItems="center" className={classes.top}>
      <Typography color="inherit" variant="caption" style={{ opacity: 0.5 }}>
        {title}
      </Typography>
      <Button color="primary" className={classes.buttonOutline} onClick={() => history.push(gotoUrl)}>
        {buttonLabel}
      </Button>
    </Grid>
  );
};

FormRightSideTop.propTypes = {
  title: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  gotoUrl: PropTypes.string.isRequired,
};

export default FormRightSideTop;
