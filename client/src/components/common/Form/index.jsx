import React from "react";

const Form = ({ children, onSubmit, ...rest }) => {
  return (
    <form onSubmit={onSubmit} style={{ width: "100%" }} {...rest}>
      {children}
    </form>
  );
};

export default Form;
