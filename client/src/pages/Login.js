import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Grid, Button } from "@material-ui/core";
import { login } from "../store/utils/thunkCreators";
import Input from "../components/common/Input";
import Form from "../components/common/Form";
import { authStyles } from "../themes/styles";
import FormControl from "../components/common/Form/FormControl";
import LeftSide from "./widget/FormLeftSide";
import FormRightSideTop from "./widget/FormRightSideTop";
import FormContainer from "./widget/FormContainer";

const Login = (props) => {
  const { user, login } = props;

  const handleLogin = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    await login({ username, password });
  };

  if (user.id) {
    return <Redirect to="/home" />;
  }
  const classes = authStyles();
  return (
    <Grid container justifyContent="center" alignItems="center" direction="column" className={classes.container}>
      <Grid container wrap="nowrap" justifyContent="space-between" alignItems="center" className={classes.wrapper}>
        {/* left */}
        <LeftSide />
        {/* right */}
        <Grid item className={classes.right} md={7} xl={8} xs={11}>
          <FormRightSideTop title=" Don't have an account?" gotoUrl="/register" buttonLabel="Create account" />

          <FormContainer title="Create an account.">
            <Form onSubmit={handleLogin}>
              <Grid>
                <FormControl>
                  <Input label="User Name" aria-label="user name" name="username" required />
                </FormControl>

                <FormControl>
                  <Input
                    aria-label="password"
                    label="Password"
                    type="password"
                    inputProps={{ minLength: 6 }}
                    name="password"
                    required
                  />
                  <Button className={classes.forgetPasswordBtn} color="primary">
                    Forgot?
                  </Button>
                </FormControl>

                <Grid container justifyContent="center" alignItems="center" style={{ marginTop: 10 }}>
                  <Button type="submit" variant="contained" disableElevation color="primary">
                    Login
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
    login: (credentials) => {
      dispatch(login(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
