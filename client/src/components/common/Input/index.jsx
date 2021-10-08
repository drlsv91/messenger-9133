import { TextField } from "@material-ui/core";
import React from "react";
import { authStyles } from "../../../themes/styles";

const Input = ({ label, name, type = "text", ...rest }) => {
  const classes = authStyles();
  return (
    <TextField
      {...rest}
      classes={{ root: classes.root }}
      InputLabelProps={{
        style: { fontSize: 12, fontWeight: "bold" },
        required: false,
        classes: { root: classes.root },
      }}
      label={label}
      type={type}
      name={name}
    />
  );
};

export default Input;
