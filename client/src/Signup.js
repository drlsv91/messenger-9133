import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { Grid, Box, Typography, Button, FormHelperText } from "@material-ui/core";
import { register } from "./store/utils/thunkCreators";
import { authStyles } from "./themes/styles";
import Input from "./components/common/Input";
import Form from "./components/common/Form";
import Field from "./components/common/Form/Field";

const Signup = (props) => {
  const classes = authStyles();
  const history = useHistory();
  const { user, register } = props;
  const [formErrorMessage, setFormErrorMessage] = useState({});

  const handleRegister = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    if (password !== confirmPassword) {
      setFormErrorMessage({ confirmPassword: "Passwords must match" });
      return;
    }

    await register({ username, email, password });
  };

  if (user.id) {
    return <Redirect to="/home" />;
  }

  return (
    <Grid container justifyContent="center" alignItems="center" direction="column" className={classes.container}>
      <Grid container justifyContent="space-between" alignItems="center" className={classes.wrapper}>
        {/* left */}
        <Box className={classes.left}>
          <Typography>Converse With anyone</Typography>
          <Typography>with any language</Typography>
        </Box>
        {/* right */}
        <Box className={classes.right}>
          <Grid container item justifyContent="center" alignItems="center" className={classes.top}>
            <Typography>Need to log in?</Typography>
            <Button onClick={() => history.push("/login")}>Login</Button>
          </Grid>

          <Grid container justifyContent="center" alignItems="center" className={classes.formContainer}>
            <Typography className={classes.formTitle}>Create an account</Typography>
            <Form onSubmit={handleRegister}>
              <Grid>
                <Grid className={classes.inputContainer}>
                  <Field>
                    <Input aria-label="username" label="Username" name="username" required />
                  </Field>
                </Grid>
                <Grid className={classes.inputContainer}>
                  <Field>
                    <Input label="E-mail address" aria-label="e-mail address" type="email" name="email" required />
                  </Field>
                </Grid>
                <Grid className={classes.inputContainer}>
                  <Field error={!!formErrorMessage.confirmPassword}>
                    <Input
                      aria-label="password"
                      label="Password"
                      type="password"
                      inputProps={{ minLength: 6 }}
                      name="password"
                      required
                    />
                    <FormHelperText>{formErrorMessage.confirmPassword}</FormHelperText>
                  </Field>
                </Grid>
                <Grid className={classes.inputContainer}>
                  <Field error={!!formErrorMessage.confirmPassword}>
                    <Input
                      label="Confirm Password"
                      aria-label="confirm password"
                      type="password"
                      inputProps={{ minLength: 6 }}
                      name="confirmPassword"
                      required
                    />
                    <FormHelperText>{formErrorMessage.confirmPassword}</FormHelperText>
                  </Field>
                </Grid>
                <Grid container justifyContent="center" alignItems="center" style={{ marginTop: 10 }}>
                  <Button type="submit" variant="contained" disableElevation color="primary">
                    Create
                  </Button>
                </Grid>
              </Grid>
            </Form>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    register: (credentials) => {
      dispatch(register(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
