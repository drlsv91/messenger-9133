import { FormControl } from "@material-ui/core";
import React from "react";

const Field = ({ children, ...rest }) => {
  return (
    <FormControl style={{ width: "100%" }} {...rest}>
      {children}
    </FormControl>
  );
};

export default Field;
