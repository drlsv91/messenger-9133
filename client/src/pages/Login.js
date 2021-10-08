import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { Grid, Typography, Button } from "@material-ui/core";
import { login } from "../store/utils/thunkCreators";
import Input from "../components/common/Input";
import Form from "../components/common/Form";
import { authStyles } from "../themes/styles";
import bubble from "../assets/images/bubble.svg";
import FormControl from "../components/common/Form/FormControl";

const Login = (props) => {
  const history = useHistory();
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
        <Grid item className={classes.left} md={5} xl={4} xs={5}>
          <img style={{ width: "3.85rem", marginBottom: "2rem" }} src={bubble} alt="chat" />
          <Typography variant="h6">Converse With anyone</Typography>
          <Typography variant="h6">with any language</Typography>
        </Grid>
        {/* right */}
        <Grid item className={classes.right} md={7} xl={8} xs={11}>
          <Grid container item justifyContent="center" alignItems="center" className={classes.top}>
            <Typography color="inherit" variant="caption" style={{ opacity: 0.5 }}>
              Don't have an account?
            </Typography>
            <Button color="primary" className={classes.buttonOutline} onClick={() => history.push("/register")}>
              Create account
            </Button>
          </Grid>

          <Grid container justifyContent="center" alignItems="center" className={classes.formContainer}>
            <Typography className={classes.formTitle}>Welcome back!</Typography>
            <Form onSubmit={handleLogin}>
              <Grid>
                <FormControl>
                  <Input label="E-mail address" aria-label="e-mail address" type="email" name="email" required />
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
    login: (credentials) => {
      dispatch(login(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
