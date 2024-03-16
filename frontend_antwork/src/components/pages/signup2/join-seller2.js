import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { Redirect } from "react-router-dom";
import { styled } from "@mui/material/styles";

import {
  Grid,
  Typography,
  Checkbox,
  FormControlLabel,
  IconButton,
  Box,
  Card,
  CardContent,
  Container,
  Button,
  Paper,
  Divider,
  Stack,
  TextField,
  MenuItem,
} from "@mui/material";

import { LocalizationProvider, DatePicker, CalendarPicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import TextFieldTheme from "../shared/general/TextFieldTheme";
import ButtonBlue from "../shared/general/ButtonBlue";
import ButtonGrey from "../shared/general/ButtonGrey";
import UploadPic from "../shared/general/UploadPic";

import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

import Dropzone from "./components/dropzone";
import NumberFormatTheme from "../shared/general/NumberFormatTheme";
import DatePickerComponent from "../shared/general/DatePicker";


// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import the progress bar
import StepProgressBar from "react-step-progress";
// import the stylesheet
import "react-step-progress/dist/index.css";

// import LanguagesLevels from "./languages";

import { NavLink } from "react-router-dom";
import dayjs from "dayjs";

// import LanguagesBox from "./autoComplete/languagues/languages";
// import LanguagesLevelsBox from "./autoComplete/languagues/langLv";
// import OccupationBox from "./autoComplete/occupation";
// import SkillsBox from "./autoComplete/skills/skills";
// import ExpLevelsBox from "./autoComplete/skills/expLevels";
// import FromYearBox from "./autoComplete/years/fromYears";
// import ToYearBox from "./autoComplete/years/toYears";
// import Education from "./autoComplete/education/educationTable";

const StyledRoot = styled("div")({
  minWidth: 350,
  width: "100%",
  backgroundColor: "#f1f4f9",
  paddingTop: 74,
  paddingBottom: 36,
});

const StyledHeader = styled(Typography)({
  // marginTop: 20,
});

const StyledStackForContent = styled(Stack)({
  // marginTop: 50,
});

const StyledStackForm = styled(Stack)({
  // justifyContent: "space-between",
  // justifyContent: "space-around",
  justifyContent: "center",
  // textAlign: "center",
  alignContent: "center",
  alignItems: "center",
  // display: "flex",
});

const StyledDivForContent = styled("div")({
  flexDirection: "row",
  // padding: "35px 0 96px",
  display: "flex",
  alignItems: "center",
});

const StyledBox = styled(Box)({
  marginTop: 50,
  border: "1px solid",
  borderColor: "#CFD3D7",
  borderRadius: "12px",
  padding: 35,
});

const StyledBoxForCaption = styled(Box)({
  width: 600,
});

const StyledTextFieldTheme = styled(TextFieldTheme)(({}) => ({
  marginBottom: 16,
}));

const StyledBoxForTextField = styled(Box)({
  display: "flex",
  alignItems: "center",
});

// setup the step content
// const step1Content = (
//   <StyledBox>
//     <StyledStackForContent spacing={1}>
//       <StyledHeader variant="h4">Personal Info</StyledHeader>
//       <StyledBoxForCaption>
//         <Typography variant="body1" color="text.secondary">
//           Tell us a bit about yourself. This information will appear on your
//           public profile, so that potential buyers can get to know you better.
//         </Typography>
//       </StyledBoxForCaption>

//       <Divider style={{ marginTop: 20, marginBottom: 20 }} />

//       <Stack spacing={8}>
//         <Stack direction="row" spacing={4}>
//           <StyledBoxForTextField style={{ width: "75%" }}>
//             <Typography variant="body1">Full Name</Typography>
//             <Typography variant="body1" color="red">
//               *
//             </Typography>
//           </StyledBoxForTextField>
//           <StyledTextFieldTheme label="First Name" variant="filled" fullWidth />
//           <StyledTextFieldTheme label="Last Name" variant="filled" fullWidth />
//         </Stack>

//         <Stack direction="row" spacing={4}>
//           <StyledBoxForTextField style={{ width: "26%" }}>
//             <Typography variant="body1">Profile Picture</Typography>
//             <Typography variant="body1" color="red">
//               *
//             </Typography>
//           </StyledBoxForTextField>
//           <UploadPic />
//         </Stack>

//         <Stack direction="row" spacing={4}>
//           <StyledBoxForTextField style={{ width: "36%" }}>
//             <Typography variant="body1">Description</Typography>
//             <Typography variant="body1" color="red">
//               *
//             </Typography>
//           </StyledBoxForTextField>
//           <StyledTextFieldTheme
//             label="Share a bit about your work"
//             variant="filled"
//             fullWidth
//           />
//         </Stack>

//         <Stack direction="row" spacing={4}>
//           <StyledBoxForTextField style={{ width: "26%" }}>
//             <Stack direction="row" spacing={2}>
//               <Typography variant="body1">Languages</Typography>
//               <Typography variant="body1" color="red">
//                 *
//               </Typography>
//             </Stack>
//           </StyledBoxForTextField>
//           {/* <LanguagesLevels /> */}
//           <Stack direction="row" spacing={10}>
//             <LanguagesBox /> <LanguagesLevelsBox />
//           </Stack>
//         </Stack>
//       </Stack>
//     </StyledStackForContent>
//   </StyledBox>
// );

// const step2Content = (
//   <StyledBox>
//     <StyledStackForContent spacing={1}>
//       <StyledHeader variant="h4">Professional Info</StyledHeader>
//       <StyledBoxForCaption>
//         <Typography variant="body1" color="text.secondary">
//           This is your time to shine. Let potential buyers know what you do best
//           and how you gained your skills, certifications and experience.
//         </Typography>
//       </StyledBoxForCaption>

//       <Divider style={{ marginTop: 20, marginBottom: 20 }} />

//       <Stack spacing={8}>
//         <Stack direction="row" spacing={4}>
//           <StyledBoxForTextField style={{ width: "25%" }}>
//             <Typography variant="body1">Your Occupation</Typography>
//             <Typography variant="body1" color="red">
//               *
//             </Typography>
//           </StyledBoxForTextField>

//           <Stack direction="row" spacing={10} style={{ alignItems: "center" }}>
//             <OccupationBox />
//             <FromYearBox />
//             <ToYearBox />
//           </Stack>
//         </Stack>

//         <Stack direction="row" spacing={4}>
//           <StyledBoxForTextField style={{ width: "25%" }}>
//             <Typography variant="body1">Skills</Typography>
//             <Typography variant="body1" color="red">
//               *
//             </Typography>
//           </StyledBoxForTextField>
//           <Stack direction="row" spacing={10}>
//             <SkillsBox />
//             <ExpLevelsBox />
//           </Stack>
//         </Stack>

//         <Stack direction="row" spacing={4}>
//           <StyledBoxForTextField style={{ width: "25%" }}>
//             <Typography variant="body1">Education</Typography>
//           </StyledBoxForTextField>
//           <Education />
//         </Stack>

//         <Stack direction="row" spacing={4}>
//           <StyledBoxForTextField style={{ width: "36%" }}>
//             <Typography variant="body1">Certification</Typography>
//           </StyledBoxForTextField>
//         </Stack>

//         <Stack direction="row" spacing={4}>
//           <StyledBoxForTextField style={{ width: "36%" }}>
//             <Stack spacing={0.1}>
//               <Typography variant="body1">Personal Website</Typography>
//               <Typography variant="caption" color="text.secondary">
//                 <i>Private</i>
//               </Typography>
//             </Stack>
//           </StyledBoxForTextField>
//           <StyledTextFieldTheme
//             label="Provide a link to your own professional website"
//             variant="filled"
//             fullWidth
//           />
//         </Stack>
//       </Stack>
//     </StyledStackForContent>
//   </StyledBox>
// );

// const step3Content = (
//   <StyledBox>
//     <StyledStackForContent spacing={1}>
//       <StyledHeader variant="h4">Linked Accounts</StyledHeader>
//       <StyledBoxForCaption>
//         <Typography variant="body1" color="text.secondary">
//           Taking the time to verify and link your accounts can upgrade your
//           credibility and help us provide you with more business. Don’t worry,
//           your information is and always will remain private.
//         </Typography>
//       </StyledBoxForCaption>

//       <Divider style={{ marginTop: 20, marginBottom: 20 }} />

//       <Stack spacing={4}>
//         <Stack spacing={0.1}>
//           <Typography variant="h6">Your Social Presence</Typography>
//           <Typography variant="caption" color="text.secondary">
//             <i>Private</i>
//           </Typography>
//         </Stack>

//         <Stack spacing={3}>
//           <Stack
//             direction="row"
//             spacing={4}
//             style={{ justifyContent: "space-between" }}
//           >
//             <Stack direction="row" spacing={1} style={{ alignItems: "center" }}>
//               <GoogleIcon />
//               <StyledBoxForTextField>
//                 <Typography variant="body1">Google</Typography>
//               </StyledBoxForTextField>
//             </Stack>
//             <ButtonGrey
//               variant={"outlined"}
//               component={NavLink}
//               to=""
//               style={{ width: "168px" }}
//             >
//               Connect
//             </ButtonGrey>
//           </Stack>

//           <Stack
//             direction="row"
//             spacing={4}
//             style={{ justifyContent: "space-between" }}
//           >
//             <Stack direction="row" spacing={1} style={{ alignItems: "center" }}>
//               <FacebookIcon />
//               <StyledBoxForTextField>
//                 <Typography variant="body1">Facebook</Typography>
//               </StyledBoxForTextField>
//             </Stack>
//             <ButtonGrey
//               variant={"outlined"}
//               component={NavLink}
//               to=""
//               style={{ width: "168px" }}
//             >
//               Connect
//             </ButtonGrey>
//           </Stack>

//           <Stack
//             direction="row"
//             spacing={4}
//             style={{ justifyContent: "space-between" }}
//           >
//             <Stack direction="row" spacing={1} style={{ alignItems: "center" }}>
//               <TwitterIcon />
//               <StyledBoxForTextField>
//                 <Typography variant="body1">Twitter</Typography>
//               </StyledBoxForTextField>
//             </Stack>
//             <ButtonGrey
//               variant={"outlined"}
//               component={NavLink}
//               to=""
//               style={{ width: "168px" }}
//             >
//               Connect
//             </ButtonGrey>
//           </Stack>
//         </Stack>

//         <Divider style={{ marginTop: 40, marginBottom: 10 }} />

//         <Stack spacing={0.1}>
//           <Typography variant="h6">Your Professional Presence</Typography>
//           <Typography variant="caption" color="text.secondary">
//             <i>Private</i>
//           </Typography>
//         </Stack>

//         <Stack spacing={3}>
//           <Stack
//             direction="row"
//             spacing={4}
//             style={{ justifyContent: "space-between" }}
//           >
//             <Stack direction="row" spacing={1} style={{ alignItems: "center" }}>
//               {/* <FontAwesomeIcon icon="fab fa-stack-overflow" /> */}
//               <StyledBoxForTextField>
//                 <Typography variant="body1">Stack Overflow</Typography>
//               </StyledBoxForTextField>
//             </Stack>
//             <ButtonGrey
//               variant={"outlined"}
//               component={NavLink}
//               to=""
//               style={{ width: "168px" }}
//             >
//               Connect
//             </ButtonGrey>
//           </Stack>

//           <Stack
//             direction="row"
//             spacing={4}
//             style={{ justifyContent: "space-between" }}
//           >
//             <Stack direction="row" spacing={1} style={{ alignItems: "center" }}>
//               <GitHubIcon />
//               <StyledBoxForTextField>
//                 <Typography variant="body1">Github</Typography>
//               </StyledBoxForTextField>
//             </Stack>
//             <ButtonGrey
//               variant={"outlined"}
//               component={NavLink}
//               to=""
//               style={{ width: "168px" }}
//             >
//               Connect
//             </ButtonGrey>
//           </Stack>
//         </Stack>
//       </Stack>
//     </StyledStackForContent>
//   </StyledBox>
// );

const step4Content = (
  <StyledBox>
    <StyledStackForContent spacing={1}>
      <StyledHeader variant="h4">Account Security</StyledHeader>
      <StyledBoxForCaption>
        <Typography variant="body1" color="text.secondary">
          Trust and safety is a big deal in our community. Please verify your
          email and phone number so that we can keep your account secured.
        </Typography>
      </StyledBoxForCaption>

      <Divider style={{ marginTop: 20, marginBottom: 20 }} />

      <Stack spacing={4}>
        <Stack direction="row" style={{ justifyContent: "space-between" }}>
          <Stack direction="row" spacing={1.5} style={{ alignItems: "center" }}>
            <EmailIcon />
            <Typography variant="body1">Email</Typography>
            <Typography variant="caption" color="text.secondary">
              <i>Private</i>
            </Typography>
          </Stack>

          <ButtonGrey
            variant={"outlined"}
            component={NavLink}
            to=""
            style={{ width: "168px" }}
          >
            Verify
          </ButtonGrey>
        </Stack>

        <Stack direction="row" style={{ justifyContent: "space-between" }}>
          <Stack spacing={0.1}>
            <Stack
              direction="row"
              spacing={1.5}
              style={{ alignItems: "center" }}
            >
              <LocalPhoneIcon />
              <Typography variant="body1">Phone Number</Typography>
              <Typography variant="caption" color="text.secondary">
                <i>Private</i>
              </Typography>
            </Stack>
            <Typography variant="caption" color="text.secondary">
              We'll never share your phone number.
            </Typography>
          </Stack>

          <ButtonGrey
            variant={"outlined"}
            component={NavLink}
            to=""
            style={{ width: "168px" }}
          >
            Verify
          </ButtonGrey>
        </Stack>
      </Stack>
    </StyledStackForContent>
  </StyledBox>
);

// setup step validators, will be called before proceeding to the next step
function step1Validator() {
  // return a boolean
}

function step2Validator() {
  // return a boolean
}

function step3Validator() {
  // return a boolean
}

function step4Validator() {
  // return a boolean
}

function onFormSubmit() {
  // handle the submit logic here
  // This function will be executed at the last step
  // when the submit button (next button in the previous steps) is pressed
  window.location.href = "/manage_product";
}

// import Carousel, { CarouselItem } from "../shared/general/Carousel";
// import DropdownMenu from "../shared/general/DropdownMenu";

// import Dropdown from "../dropdown";

function JoinSeller(props) {
  const today = dayjs().toDate();

  const { control, handleSubmit, formState:{ errors }} = useForm({
    defaultValues: {
        firstName: "",
        lastName: "",
        nickName: "",
        profileImg: null,
        description: "",
        birthDay: new Date(),

    }
  })

  return (
    <StyledRoot className={`page`}>
      <Container maxWidth="lg">
        <div style={{ marginBottom: 8 }}>
          <StyledBox>
            <Stack>
              <StyledHeader variant="h4">Sign Up</StyledHeader>
              <Typography variant="body1" color="text.secondary">
                Freelance
              </Typography>
              <Divider style={{ marginTop: 20, marginBottom: 20 }} />
              <Stack spacing={2}>
                <div></div>
                <Grid container columnSpacing={2}>
                  <Grid item xs={12} md={2} lg={2}>
                    <Box style={{ display: "flex" }} >
                      <Typography variant="body1">
                        Full Name
                      </Typography>
                      <Typography variant="body1" color="red">
                        *
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={4} lg={4}>
                    <Controller 
                      control={control}
                      name="firstName"
                      rules={{
                          required : { value : true, message : "กรุณาระบุชื่อจริง"}
                      }}
                      render={({field})=>(
                      <TextFieldTheme
                          {...field}
                          placeholder="First Name"
                          helperText={ errors && errors.firstName && errors.firstName.message }
                          error={ errors && errors.firstName ? true : false }
                      />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12} md={4} lg={4}>
                    <Controller 
                      control={control}
                      name="lastName"
                      rules={{
                          required : { value : true, message : "กรุณาระบุนามสกุล"}
                      }}
                      render={({field})=>(
                        <TextFieldTheme
                          {...field}
                          placeholder="Last Name"
                          helperText={ errors && errors.lastName && errors.lastName.message }
                          error={ errors && errors.lastName ? true : false }
                        />
                      )}
                    />
                  </Grid>
                </Grid>
                <Grid container columnSpacing={2}>
                  <Grid item xs={12} md={2} lg={2}>
                    <Box style={{ display: "flex" }} >
                      <Typography variant="body1">
                        Nick Name
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={4} lg={4}>
                    <Controller 
                      control={control}
                      name="nickName"
                      render={({field})=>(
                        <TextFieldTheme
                          {...field}
                        />
                      )}
                    />
                  </Grid>
                </Grid>
                <Grid container columnSpacing={2} alignItems={"center"}>
                  <Grid item xs={12} md={2} lg={2}>
                    <Box style={{ display: "flex" }} >
                      <Typography variant="body1">
                        Profile Picture
                      </Typography>
                      <Typography variant="body1" color="red">
                        *
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={4} lg={4}>
                    <Controller
                      control={control}
                      name = "profileImg"
                      rules={{ 
                        required : { value : true, message : "กรุณาแนบรูปของคุณ"}
                      }}
                      render={({field})=>(
                        <Dropzone
                          width="150px"
                          height="150px"
                          helperText={errors && errors.profileImg && errors.profileImg.message}
                          error={errors && errors.profileImg ? true : false}
                          childToParent={field.onChange}
                        />
                      )}
                    />
                  </Grid>
                </Grid>
                <Grid container columnSpacing={2} alignItems={"center"}>
                  <Grid item xs={12} md={2} lg={2}>
                    <Box style={{ display: "flex" }} >
                      <Typography variant="body1">
                        Description
                      </Typography>
                      <Typography variant="body1" color="red">
                        *
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={8} lg={8}>
                    <Controller
                      control={control}
                      name = "description"
                      rules={{ 
                        required : { value : true, message : "กรุณาแนบรูปสถาบันที่ออกใบอนุญาต"}
                      }}
                      render={({field})=>(
                        <TextFieldTheme
                          {...field}
                          placeholder="Description"
                          helperText={ errors && errors.description && errors.description.message }
                          error={ errors && errors.description ? true : false }
                        />
                      )}
                    />
                  </Grid>
                </Grid>
                <Grid container columnSpacing={2} alignItems={"center"}>
                  <Grid item xs={12} md={2} lg={2}>
                    <Box style={{ display: "flex" }} >
                      <Typography variant="body1">
                        BirthDay
                      </Typography>
                      <Typography variant="body1" color="red">
                        *
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={4} lg={4}>
                    <Controller
                      control={control}
                      name = "birthDay"
                      rules={{ 
                        required : { value : true, message : "กรุณาแนบรูปสถาบันที่ออกใบอนุญาต"}
                      }}
                      render={({field})=>(
                        <DatePickerComponent
                          {...field}
                          maxDate={dayjs(today).format("YYYY-MM-DD")}
                          date={field.value}
                          onSubmit={field.onChange}
                          helperText={ errors && errors.birthDay && errors.birthDay.message }
                          error={ errors && errors.birthDay ? true : false }
                        />
                      )}
                    />
                  </Grid>
                </Grid>
              </Stack>
            </Stack>
            
          </StyledBox>
        </div>
        {/* <StepProgressBar
          startingStep={0}
          onSubmit={onFormSubmit}
          submitBtnName="Finish"
          steps={[
            {
              label: "Personal Info",
              subtitle: "25%",
              name: "step 1",
              content: step1Content,
              // validator: step1Validator,
            },
            {
              label: "Professional Info",
              subtitle: "50%",
              name: "step 2",
              content: step2Content,
              // validator: step2Validator,
            },
            {
              label: "Linked Accounts",
              subtitle: "75%",
              name: "step 3",
              content: step3Content,
              // validator: step3Validator,
            },
            {
              label: "Account Security",
              subtitle: "100%",
              name: "step 4",
              content: step4Content,
              // validator: step4Validator,
            },
          ]}
        /> */}
      </Container>
    </StyledRoot>
  );
}

export default JoinSeller;
