import React, { useState, useEffect, useRef, Fragment } from "react";
import { NavLink } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { 
  Container,
  Typography,
  Link,
  Grid,
  Box,
  Toolbar,
  AppBar,
  IconButton,
  Checkbox,
  Divider,
  FormControlLabel,
  useScrollTrigger,
} from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { styled } from "@mui/material/styles";

import TranslateIcon from "@mui/icons-material/Translate";

import ButtonBlue from "../shared/general/ButtonBlue";
import TextFieldTheme from "../shared/general/TextFieldTheme";
import ButtonUni from "../shared/general/ButtonUni";

const StyledRoot = styled("div")(({}) => ({
  width: "100%",
  backgroundColor: "#ffffff",
  ["@media (min-width: 900px)"]: {
    marginTop: 76,
  },
  ["@media (min-width: 600px)"]: {
    marginTop: 120,
  },
}));

const StyledWrapSection = styled("div")(({}) => ({
  width: 350,
  margin: "auto",
}));

const StyledTextFieldTheme = styled(TextFieldTheme)(({}) => ({
  marginBottom: 16,
}));

const StyledAgree = styled(FormControlLabel)(({}) => ({
  alignItems: "center",
  "& .MuiCheckbox-root": {
    paddingTop: 0,
    paddingBottom: 0,
  },
  "& .MuiTypography-body1": {
    fontSize: 12,
  },
}));

const useStyles = makeStyles(() => ({
  errorText: {
    color: "red"
  },
}));

const RegisterPage = (props) => {
  const classes = useStyles();
  const { control, handleSubmit, formState:{ errors }, getValues} = useForm({
    defaultValues: {
        firstName: "",
        lastName: "",
        passWord: "",
        confirmPassword: "",
        // nickName: "",
        // profileImg: null,
        // description: "",
        birthDay: new Date(),
        CheckBox: false
    }
  })
  const formsubmit = async (values) =>{
    console.log(values);
  }


  return (
      <StyledRoot>
        <StyledWrapSection>
          <Typography variant="h3" gutterBottom>
            Sign up
          </Typography>
          <Typography variant="h6">
            Become a Seller ( Freelance )
          </Typography>
          <Divider style={{ margin: "28px 0" }} />
          <form onSubmit={handleSubmit(formsubmit)} >
            <div style={{ textAlign: "center" }}>
              <Controller 
                control={control}
                name="firstName"
                rules={{
                  required : { value : true, message : "กรุณาระบุชื่อจริง"},
                }}
                render={({field})=>(
                  <StyledTextFieldTheme
                    {...field}
                    label="First Name"
                    variant="filled"
                    fullWidth
                    helperText={ errors && errors.firstName && errors.firstName.message }
                    error={ errors && errors.firstName ? true : false }
                  />
                )}
              />
              <Controller 
                control={control}
                name="lastName"
                rules={{
                  required : { value : true, message : "กรุณาระบุนามสกุล"},
                }}
                render={({field})=>(
                  <StyledTextFieldTheme
                    {...field}
                    label="Last Name"
                    variant="filled"
                    fullWidth
                    helperText={ errors && errors.lastName && errors.lastName.message }
                    error={ errors && errors.lastName ? true : false }
                  />
                )}
              />

              <Controller 
                control={control}
                name="Email"
                rules={{
                  required : { value : true, message : "กรุณาระบุอีเมลล์"},
                }}
                render={({field})=>(
                  <StyledTextFieldTheme
                    {...field}
                    label="Email"
                    variant="filled"
                    fullWidth
                    helperText={ errors && errors.Email && errors.Email.message }
                    error={ errors && errors.Email ? true : false }
                  />
                )}
              />
              <Controller 
                control={control}
                name="passWord"
                rules={{
                  required : { value : true, message : "กรุณาระบุรหัสผ่าน"},
                  validate : (v) => {return v === getValues('confirmPassword')},
                }}
                render={({field})=>(
                  <StyledTextFieldTheme
                    {...field}
                    label="Password"
                    variant="filled"
                    fullWidth
                    type="password"
                    helperText={ errors && errors.passWord && errors.passWord.message }
                    error={ errors && errors.passWord ? true : false }
                  />
                )}
              />
              <Controller 
                control={control}
                name="confirmPassword"
                rules={{
                  required : { value : true, message : "กรุณายืนยันรหัสผ่าน"},
                  validate : (v) => {return getValues('passWord') === v},
                }}
                render={({field})=>(
                  <StyledTextFieldTheme
                    {...field}
                    label="Confirm Password"
                    variant="filled"
                    fullWidth
                    type="password"
                    helperText={ errors && errors.confirmPassword && errors.confirmPassword.message }
                    error={ errors && errors.confirmPassword ? true : false }
                  />
                )}
              />
              <Controller 
                control={control}
                name="CheckBox"
                rules={{
                  required : { value : true, message : "กรุณาระบุชื่อจริง"},
                  validate : (v) => {return v === true},
                }}
                render={({field})=>(
                      <StyledAgree
                        {...field}
                        onChange={field.onChange}
                        value="end"
                        control={<Checkbox />}
                        label={
                          <Typography color="text.secondary" className={errors.CheckBox && classes.errorText}>
                            I agree to the <Link href="#">Ant Terms.</Link> Learn about
                            how we use and protect your data in our{" "}
                            <Link href="#">Privacy Policy.</Link>
                          </Typography>
                        }
                        labelPlacement="end"
                      />
                )}
              />
              <ButtonBlue
                type="submit"
                variant={"contained"}
                style={{ marginTop: 16 }}
                // component={NavLink}
                // to="/login"
              >
                Create Account partner
              </ButtonBlue>
              <ButtonBlue
                size="small"
                variant={"text"}
                style={{ marginTop: 8 }}
                component={NavLink}
                to="/login"
                color="secondary"
              >
                I am already partner
              </ButtonBlue>
            </div>
          </form>
        </StyledWrapSection>
      </StyledRoot>
  );
};

export default RegisterPage;
