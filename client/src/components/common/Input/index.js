import { TextField } from "@material-ui/core";
import React from "react";
import { authStyles } from "../../../themes/styles";

const Input = ({ label, name, type = "text", ...rest }) => {
  const classes = authStyles();
  return (
    <TextField
      {...rest}
      classes={{ root: classes.inputFieldRoot }}
      InputLabelProps={{
        style: { fontSize: 14, fontWeight: "bold", opacity: 0.5 },
        required: false,
      }}
      label={label}
      type={type}
      name={name}
    />
  );
};

export default Input;
