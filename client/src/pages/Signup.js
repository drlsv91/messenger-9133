import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { Grid, Typography, Button, FormHelperText } from "@material-ui/core";
import { register } from "../store/utils/thunkCreators";
import { authStyles } from "../themes/styles";
import Input from "../components/common/Input";
import Form from "../components/common/Form";
import FormControl from "../components/common/Form/FormControl";
import bubble from "../assets/images/bubble.svg";

const Signup = ({ user, register }) => {
  const classes = authStyles();
  const history = useHistory();
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
      <Grid container wrap="nowrap" justifyContent="space-between" alignItems="center" className={classes.wrapper}>
        {/* left */}
        <Grid item className={classes.left} md={5} xl={4} xs={5}>
          <img style={{ width: "3.85rem", marginBottom: "2rem" }} src={bubble} alt="chat" />
          <Typography variant="h6">Converse With anyone</Typography>
          <Typography variant="h6">with any language</Typography>
        </Grid>
        {/* right */}
        <Grid item className={classes.right} md={7} xl={8} xs={12}>
          <Grid container item justifyContent="center" alignItems="center" className={classes.top}>
            <Typography color="inherit" variant="caption" style={{ opacity: 0.5 }}>
              Already have an account?
            </Typography>
            <Button color="primary" className={classes.buttonOutline} onClick={() => history.push("/login")}>
              Login
            </Button>
          </Grid>

          <Grid container justifyContent="center" alignItems="center" className={classes.formContainer}>
            <Typography className={classes.formTitle}>Create an account.</Typography>
            <Form onSubmit={handleRegister}>
              <Grid>
                <FormControl>
                  <Input aria-label="username" label="Username" name="username" required />
                </FormControl>

                <FormControl>
                  <Input label="E-mail address" aria-label="e-mail address" type="email" name="email" required />
                </FormControl>

                <FormControl error={!!formErrorMessage.confirmPassword}>
                  <Input
                    aria-label="password"
                    label="Password"
                    type="password"
                    inputProps={{ minLength: 6 }}
                    name="password"
                    required
                  />
                  <FormHelperText>{formErrorMessage.confirmPassword}</FormHelperText>
                </FormControl>

                <FormControl error={!!formErrorMessage.confirmPassword}>
                  <Input
                    label="Confirm Password"
                    aria-label="confirm password"
                    type="password"
                    inputProps={{ minLength: 6 }}
                    name="confirmPassword"
                    required
                  />
                  <FormHelperText>{formErrorMessage.confirmPassword}</FormHelperText>
                </FormControl>
                <Grid container justifyContent="center" alignItems="center" style={{ marginTop: 10 }}>
                  <Button type="submit" variant="contained" disableElevation color="primary">
                    Create
                  </Button>
                </Grid>
              </Grid>
            </Form>
          </Grid>
        </Grid>
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
