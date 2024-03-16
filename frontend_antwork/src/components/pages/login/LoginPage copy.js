import React, { useState, useEffect, useRef, Fragment } from "react";
import { Link, useLocation, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import {
  Container,
  Box,
  Divider,
  Checkbox,
  Typography,
  IconButton,
  AppBar,
  Toolbar,
  Grid,
  InputAdornment,
  useScrollTrigger,
  FormControlLabel,
} from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { styled } from "@mui/material/styles";
import clsx from "clsx";
import PropTypes from "prop-types";

import TranslateIcon from "@mui/icons-material/Translate";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import ClearIcon from "@mui/icons-material/Clear";
import CircularProgress from "@mui/material/CircularProgress";

import ButtonBlue from "../shared/general/ButtonBlue";
import TextFieldTheme from "../shared/general/TextFieldTheme";

import { login } from "../../../actions/auth";

const StyledRoot = styled("div")(({}) => ({
  width: "100%",
  backgroundColor: "#ffffff",
  paddingBottom: 50,
  marginTop: 100,
  // ["@media (min-width: 900px)"]: {
  //   marginTop: 76,
  // },
  // ["@media (max-width: 600px)"]: {
    
  // },
}));

const StyledWrapSection = styled("div")(({}) => ({
  width: 350,
  margin: "auto",
}));

const StyledTextFieldTheme = styled(TextFieldTheme)(({}) => ({
  marginTop: 16,
}));

const StyledForgetPassword = styled(Link)(({}) => ({
  fontSize: 14,
}));

const StyledAgree = styled(FormControlLabel)(({}) => ({
  marginTop: 16,
  alignItems: "center",
  "& .MuiCheckbox-root": {
    paddingTop: 0,
    paddingBottom: 0,
  },
  "& .MuiTypography-body1": {
    fontSize: 12,
  },
}));

const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = "Required";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 8) {
    errors.password = "Contain at least 8 characters";
  }

  return errors;
};

const PasswordField = ({ isSubmitting, values, handleChange, error }) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Fragment>
      <TextFieldTheme
        style={{ width: "100%", marginTop: 8 }}
        disabled={isSubmitting}
        label="รหัสผ่าน"
        name="password"
        id="password"
        type={showPassword ? "text" : "password"}
        value={values.password}
        onChange={handleChange}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={(e)=>{
                e.preventDefault();
                handleClickShowPassword();
              }}
              edge="end"
              size="large"
            >
              {values.showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
      ></TextFieldTheme>
      
    </Fragment>
  );
};

const LoginPage = (props) => {
  const dispatch = useDispatch();
  const [valueLogin, setValueLogin] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const location = useLocation();
  const linkState = location.state;

  const showForm = ({
    values,
    errors,
    handleChange,
    handleSubmit,
    isSubmitting,
  }) => {
    return (
      <form onSubmit={handleSubmit}>
        <StyledTextFieldTheme
          variant="outlined"
          margin="normal"
          fullWidth
          id="username"
          name="username"
          label="Username"
          onChange={handleChange}
          values={values.username}
          autoFocus
          error={errors.username}
          disabled={isSubmitting}
        />
        {errors.username && (
          <Typography style={{ color: "#f44336" }}>
            {errors.username}
          </Typography>
        )}

        <PasswordField
          isSubmitting={isSubmitting}
          values={values}
          handleChange={handleChange}
          name="password"
          label="รหัสผ่าน"
          error={errors.password}
        />
        {errors.password && (
          <Typography style={{ color: "#f44336" }}>
            {errors.password}
          </Typography>
        )}

        {error ? (
          <Box style={{ marginTop: 2, marginBottom: 2 }}>
            <Grid container alignItems="center" spacing={2}>
              <Grid item xs={2} lg={2} md={2}>
                <IconButton
                  style={{ color: "#f44336", backgroundColor: "#ffebee" }}
                  size="small"
                >
                  <ClearIcon />
                </IconButton>
              </Grid>
              <Grid item xs={10} lg={10} md={10}>
                <Typography variant="body2" sx={{ color: "#f44336" }}>
                  ไม่สามารถเข้าสู่ระบบได้ กรุณาลองอีกครั้ง
                </Typography>
              </Grid>
            </Grid>
          </Box>
        ) : null}

        <ButtonBlue
          type="submit"
          fullWidth
          variant="contained"
          style={{ marginTop: 16 }}
          disabled={isSubmitting}
          size="large"
        >
          {isSubmitting ? (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <CircularProgress
                color="inherit"
                size={20}
                sx={{ marginRight: 2 }}
              />
              โปรดรอสักครู่...
            </Box>
          ) : (
            "เข้าสู่ระบบ"
          )}
        </ButtonBlue>
      </form>
    )
  }


  const handleChangeText = (event) => {
    setValueLogin({ ...valueLogin, [event.target.name]: event.target.value });
  };

  const handleLogin = () => {
    dispatch(login(valueLogin.email, valueLogin.password))
      .then(() => {
        props.history.push("/");
        window.location.reload();
      })
      .catch((e) => {
        alert("Error");
      });
  };

  return (
    <Fragment>
      <StyledRoot>
        <StyledWrapSection>
          <Typography variant="h3" gutterBottom>
            Sign in
          </Typography>
          <Divider style={{ margin: "28px 0" }} />
          <Formik
            onSubmit={(values, {setSubmitting}) => {
              dispatch(login(values.username, values.password))
                .then((res) => {
                  if(linkState && linkState.redirect) {
                    props.history.push(linkState.redirect);
                    window.location.reload();
                  }else{
                    props.history.push("/home");
                    window.location.reload();
                  }
                })
                .catch((err) => {
                  setSubmitting(false)
                  setError(true)
                })
            }}
            initialValues={{
              username: "",
              password: "",
              showPassword: false,
            }}
            validate={validate}
          >
            {(props) => showForm(props)}
          </Formik>


            
            {/* <StyledTextFieldTheme
              label="Password"
              name="password"
              variant="filled"
              type="password"
              fullWidth
              onChange={handleChangeText}
            />
            <div style={{ marginTop: 16 }}>
              <StyledForgetPassword color="text.secondary" underline="always">
                Forgot your password?
              </StyledForgetPassword>
            </div>
            <div>
              <StyledAgree
                value="end"
                control={<Checkbox />}
                label={
                  <Typography color="text.secondary">Remember me</Typography>
                }
                labelPlacement="end"
              />
            </div>

            <ButtonBlue
              variant={"contained"}
              style={{ marginTop: 16, width: "100%" }}
              component={NavLink}
              to="/login"
              size="large"
              onClick={handleLogin}
            >
              Sign in
            </ButtonBlue> */}
        </StyledWrapSection>
      </StyledRoot>
    </Fragment>
  );
};

export default LoginPage;
