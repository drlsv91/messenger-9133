import React from "react";
import { authStyles } from "../../../themes/styles";

const Form = ({ children, onSubmit, ...rest }) => {
  const classes = authStyles();
  return (
    <form onSubmit={onSubmit} className={classes.form} {...rest}>
      {children}
    </form>
  );
};

export default Form;
