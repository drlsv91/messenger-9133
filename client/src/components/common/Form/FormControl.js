import { FormControl, Grid } from "@material-ui/core";
import React from "react";
import { authStyles } from "../../../themes/styles";

const CustomFormControl = ({ children, ...rest }) => {
  const classes = authStyles();
  return (
    <Grid className={classes.inputContainer}>
      <FormControl className={classes.formControl} {...rest}>
        {children}
      </FormControl>
    </Grid>
  );
};

export default CustomFormControl;
