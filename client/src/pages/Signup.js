import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Grid, Button, FormHelperText } from "@material-ui/core";
import { register } from "../store/utils/thunkCreators";
import { authStyles } from "../themes/styles";
import Input from "../components/common/Input";
import Form from "../components/common/Form";
import FormControl from "../components/common/Form/FormControl";
import LeftSide from "./widget/FormLeftSide";
import FormContainer from "./widget/FormContainer";
import FormRightSideTop from "./widget/FormRightSideTop";

const Signup = ({ user, register }) => {
  const classes = authStyles();
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
        <LeftSide />
        {/* right */}
        <Grid item className={classes.right} md={7} xl={8} xs={11}>
          <FormRightSideTop title="Already have an account?" gotoUrl="/login" buttonLabel="Login" />

          <FormContainer title="Create an account.">
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
          </FormContainer>
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
