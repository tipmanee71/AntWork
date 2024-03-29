import React, { useState, useEffect } from "react";
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

import TextFieldTheme from "../../shared/general/TextFieldTheme";
import ButtonBlue from "../../shared/general/ButtonBlue";
import ButtonGrey from "../../shared/general/ButtonGrey";
import ButtonOcean from "../../shared/general/ButtonOcean";
import UploadPic from "../../shared/general/UploadPic";

import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import the progress bar
import StepProgressBar from "react-step-progress";
// import the stylesheet
import "react-step-progress/dist/index.css";

// import LanguagesLevels from "./languages";

import { NavLink } from "react-router-dom";

import LanguagesBox from "../../seller/autoComplete/languagues/languages";
import LanguagesLevelsBox from "../../seller/autoComplete/languagues/langLv";
import OccupationBox from "../../seller/autoComplete/occupation";
import SkillsBox from "../../seller/autoComplete/skills/skills";
import ExpLevelsBox from "../../seller/autoComplete/skills/expLevels";
import FromYearBox from "../../seller/autoComplete/years/fromYears";
import ToYearBox from "../../seller/autoComplete/years/toYears";
import Education from "../../seller/autoComplete/education/educationTable";

import StartDate from "../../shared/general/DateTimePicker/startDate";
import StartTime from "../../shared/general/DateTimePicker/startTime";
import EndDate from "../../shared/general/DateTimePicker/endDate";
import EndTime from "../../shared/general/DateTimePicker/endTime";

// import "./style/seller.css";

const StyledRoot = styled("div")({
  minWidth: 350,
  width: "100%",
  backgroundColor: "#f1f4f9",
  paddingTop: 80,
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
  marginTop: 70,
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
const step1Content = (
  <StyledBox>
    <StyledStackForContent spacing={1}>
      <StyledHeader variant="h4" color="white">
        Personal Info
      </StyledHeader>
      <StyledBoxForCaption>
        <Typography variant="body1" color="text.secondary">
          Tell us a bit about yourself. This information will appear on your
          public profile, so that potential buyers can get to know you better.
        </Typography>
      </StyledBoxForCaption>

      <Divider color="white" style={{ marginTop: 20, marginBottom: 20 }} />

      <Stack spacing={8}>
        <Stack direction="row" spacing={4}>
          <StyledBoxForTextField style={{ width: "75%" }}>
            <Typography variant="body1" color="white">
              Full Name
            </Typography>
            <Typography variant="body1" color="red">
              *
            </Typography>
          </StyledBoxForTextField>
          <StyledTextFieldTheme label="First Name" variant="filled" fullWidth />
          <StyledTextFieldTheme label="Last Name" variant="filled" fullWidth />
        </Stack>

        <Stack direction="row" spacing={4}>
          <StyledBoxForTextField style={{ width: "26%" }}>
            <Typography variant="body1" color="white">
              Profile Picture
            </Typography>
            <Typography variant="body1" color="red">
              *
            </Typography>
          </StyledBoxForTextField>
          <UploadPic />
        </Stack>

        <Stack direction="row" spacing={4}>
          <StyledBoxForTextField style={{ width: "36%" }}>
            <Typography variant="body1" color="white">
              Description
            </Typography>
            <Typography variant="body1" color="red">
              *
            </Typography>
          </StyledBoxForTextField>
          <StyledTextFieldTheme
            label="Share a bit about your work"
            variant="filled"
            fullWidth
          />
        </Stack>

        <Stack direction="row" spacing={4}>
          <StyledBoxForTextField style={{ width: "26%" }}>
            <Stack direction="row" spacing={0}>
              <Typography variant="body1" color="white">
                Languages
              </Typography>
              <Typography variant="body1" color="red">
                *
              </Typography>
            </Stack>
          </StyledBoxForTextField>
          {/* <LanguagesLevels /> */}
          <Stack direction="row" spacing={10}>
            <LanguagesBox /> <LanguagesLevelsBox />
          </Stack>
        </Stack>
      </Stack>
    </StyledStackForContent>
  </StyledBox>
);

const step2Content = (
  <StyledBox>
    <StyledStackForContent spacing={1}>
      <StyledHeader color="white" variant="h4">
        Professional Info
      </StyledHeader>
      <StyledBoxForCaption>
        <Typography variant="body1" color="text.secondary">
          This is your time to shine. Let potential buyers know what you do best
          and how you gained your skills, certifications and experience.
        </Typography>
      </StyledBoxForCaption>

      <Divider color="white" style={{ marginTop: 20, marginBottom: 20 }} />

      <Stack spacing={8}>
        <Stack direction="row" spacing={4}>
          <StyledBoxForTextField style={{ width: "25%" }}>
            <Typography variant="body1" color="white">
              Your Occupation
            </Typography>
            <Typography variant="body1" color="red">
              *
            </Typography>
          </StyledBoxForTextField>

          <Stack direction="row" spacing={10} style={{ alignItems: "center" }}>
            <OccupationBox />
            <FromYearBox />
            <ToYearBox />
          </Stack>
        </Stack>

        <Stack direction="row" spacing={4}>
          <StyledBoxForTextField style={{ width: "25%" }}>
            <Typography variant="body1" color="white">
              Skills
            </Typography>
            <Typography variant="body1" color="red">
              *
            </Typography>
          </StyledBoxForTextField>
          <Stack direction="row" spacing={10}>
            <SkillsBox />
            <ExpLevelsBox />
          </Stack>
        </Stack>

        <Stack direction="row" spacing={4}>
          <StyledBoxForTextField style={{ width: "25%" }}>
            <Typography variant="body1" color="white">
              Education
            </Typography>
          </StyledBoxForTextField>
          <Education />
        </Stack>

        <Stack direction="row" spacing={4}>
          <StyledBoxForTextField style={{ width: "36%" }}>
            <Typography variant="body1" color="white">
              Certification
            </Typography>
          </StyledBoxForTextField>
        </Stack>

        <Stack direction="row" spacing={4}>
          <StyledBoxForTextField style={{ width: "36%" }}>
            <Stack spacing={0.1}>
              <Typography variant="body1" color="white">
                Personal Website
              </Typography>
              <Typography variant="caption" color="text.secondary">
                <i>Private</i>
              </Typography>
            </Stack>
          </StyledBoxForTextField>
          <StyledTextFieldTheme
            label="Provide a link to your own professional website"
            variant="filled"
            fullWidth
          />
        </Stack>
      </Stack>
    </StyledStackForContent>
  </StyledBox>
);

const step3Content = (
  <StyledBox>
    <StyledStackForContent spacing={1}>
      <StyledHeader color="white" variant="h4">
        Linked Accounts
      </StyledHeader>
      <StyledBoxForCaption>
        <Typography variant="body1" color="text.secondary">
          Taking the time to verify and link your accounts can upgrade your
          credibility and help us provide you with more business. Don’t worry,
          your information is and always will remain private.
        </Typography>
      </StyledBoxForCaption>

      <Divider color="white" style={{ marginTop: 20, marginBottom: 20 }} />

      <Stack spacing={4}>
        <Stack spacing={0.1}>
          <Typography variant="h6" color="white">
            Your Social Presence
          </Typography>
          <Typography variant="caption" color="text.secondary">
            <i>Private</i>
          </Typography>
        </Stack>

        <Stack spacing={3}>
          <Stack
            direction="row"
            spacing={4}
            style={{ justifyContent: "space-between" }}
          >
            <Stack direction="row" spacing={1} style={{ alignItems: "center" }}>
              <GoogleIcon style={{ color: "white" }} />
              <StyledBoxForTextField>
                <Typography variant="body1" color="white">
                  Google
                </Typography>
              </StyledBoxForTextField>
            </Stack>
            <ButtonOcean
              variant={"outlined"}
              component={NavLink}
              to=""
              style={{ width: "168px" }}
            >
              Connect
            </ButtonOcean>
          </Stack>

          <Stack
            direction="row"
            spacing={4}
            style={{ justifyContent: "space-between" }}
          >
            <Stack direction="row" spacing={1} style={{ alignItems: "center" }}>
              <FacebookIcon style={{ color: "white" }} />
              <StyledBoxForTextField>
                <Typography variant="body1" color="white">
                  Facebook
                </Typography>
              </StyledBoxForTextField>
            </Stack>
            <ButtonOcean
              variant={"outlined"}
              component={NavLink}
              to=""
              style={{ width: "168px" }}
            >
              Connect
            </ButtonOcean>
          </Stack>

          <Stack
            direction="row"
            spacing={4}
            style={{ justifyContent: "space-between" }}
          >
            <Stack direction="row" spacing={1} style={{ alignItems: "center" }}>
              <TwitterIcon style={{ color: "white" }} />
              <StyledBoxForTextField>
                <Typography variant="body1" color="white">
                  Twitter
                </Typography>
              </StyledBoxForTextField>
            </Stack>
            <ButtonOcean
              variant={"outlined"}
              component={NavLink}
              to=""
              style={{ width: "168px" }}
            >
              Connect
            </ButtonOcean>
          </Stack>
        </Stack>

        <Divider color="white" style={{ marginTop: 40, marginBottom: 10 }} />

        <Stack spacing={0.1}>
          <Typography variant="h6" color="white">
            Your Professional Presence
          </Typography>
          <Typography variant="caption" color="text.secondary">
            <i>Private</i>
          </Typography>
        </Stack>

        <Stack spacing={3}>
          <Stack
            direction="row"
            spacing={4}
            style={{ justifyContent: "space-between" }}
          >
            <Stack direction="row" spacing={1} style={{ alignItems: "center" }}>
              {/* <FontAwesomeIcon icon="fab fa-stack-overflow" /> */}
              <StyledBoxForTextField>
                <Typography variant="body1" color="white">
                  Stack Overflow
                </Typography>
              </StyledBoxForTextField>
            </Stack>
            <ButtonOcean
              variant={"outlined"}
              component={NavLink}
              to=""
              style={{ width: "168px" }}
            >
              Connect
            </ButtonOcean>
          </Stack>

          <Stack
            direction="row"
            spacing={4}
            style={{ justifyContent: "space-between" }}
          >
            <Stack direction="row" spacing={1} style={{ alignItems: "center" }}>
              <GitHubIcon style={{ color: "white" }} />
              <StyledBoxForTextField>
                <Typography variant="body1" color="white">
                  Github
                </Typography>
              </StyledBoxForTextField>
            </Stack>
            <ButtonOcean
              variant={"outlined"}
              component={NavLink}
              to=""
              style={{ width: "168px" }}
            >
              Connect
            </ButtonOcean>
          </Stack>
        </Stack>
      </Stack>
    </StyledStackForContent>
  </StyledBox>
);

const step4Content = (
  <StyledBox>
    <StyledStackForContent spacing={1}>
      <StyledHeader color="white" variant="h4">
        Account Security
      </StyledHeader>
      <StyledBoxForCaption>
        <Typography variant="body1" color="text.secondary">
          Trust and safety is a big deal in our community. Please verify your
          email and phone number so that we can keep your account secured.
        </Typography>
      </StyledBoxForCaption>

      <Divider color="white" style={{ marginTop: 20, marginBottom: 20 }} />

      <Stack spacing={4}>
        <Stack direction="row" style={{ justifyContent: "space-between" }}>
          <Stack direction="row" spacing={1.5} style={{ alignItems: "center" }}>
            <EmailIcon style={{ color: "white" }} />
            <Typography variant="body1" color="white">
              Email
            </Typography>
            <Typography variant="caption" color="text.secondary">
              <i>Private</i>
            </Typography>
          </Stack>

          <ButtonOcean
            variant={"outlined"}
            component={NavLink}
            to=""
            style={{ width: "168px" }}
          >
            Verify
          </ButtonOcean>
        </Stack>

        <Stack direction="row" style={{ justifyContent: "space-between" }}>
          <Stack spacing={0.1}>
            <Stack
              direction="row"
              spacing={1.5}
              style={{ alignItems: "center" }}
            >
              <LocalPhoneIcon style={{ color: "white" }} />
              <Typography variant="body1" color="white">
                Phone Number
              </Typography>
              <Typography variant="caption" color="text.secondary">
                <i>Private</i>
              </Typography>
            </Stack>
            <Typography variant="caption" color="text.secondary">
              We'll never share your phone number.
            </Typography>
          </Stack>

          <ButtonOcean
            variant={"outlined"}
            component={NavLink}
            to=""
            style={{ width: "168px" }}
          >
            Verify
          </ButtonOcean>
        </Stack>
      </Stack>
    </StyledStackForContent>
  </StyledBox>
);

// const step5Content = (
//   <StyledBox>
//     <StyledStackForContent spacing={1}>
//       <StyledHeader color="white" variant="h4">
//         Propose Hypothetically
//       </StyledHeader>
//       <StyledBoxForCaption>
//         <Typography variant="body1" color="text.secondary">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua.
//         </Typography>
//       </StyledBoxForCaption>

//       <Divider color="white" style={{ marginTop: 20, marginBottom: 20 }} />

//       <Stack spacing={3} style={{ marginTop: 10, alignItems: "center" }}>
//         <Stack direction="row" spacing={3} style={{ justifyContent: "center" }}>
//           <StartDate /> <StartTime /> <EndTime />
//         </Stack>

//         <Stack direction="row" spacing={3} style={{ justifyContent: "center" }}>
//           <EndDate /> <StartTime /> <EndTime />
//         </Stack>

//         <StyledTextFieldTheme
//           label="Place"
//           variant="filled"
//           style={{ width: "90%" }}
//         />
//         <StyledTextFieldTheme
//           label="Link GPS"
//           variant="filled"
//           style={{ width: "90%" }}
//         />
//         <StyledTextFieldTheme
//           label="Note"
//           variant="filled"
//           style={{ width: "90%" }}
//         />
//       </Stack>
//     </StyledStackForContent>
//   </StyledBox>
// );

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

// function step5Validator() {
//   // return a boolean
// }

function onFormSubmit() {
  // handle the submit logic here
  // This function will be executed at the last step
  // when the submit button (next button in the previous steps) is pressed
  window.location.href = "/manage_product_cloud_workers";
}

// import Carousel, { CarouselItem } from "../shared/general/Carousel";
// import DropdownMenu from "../shared/general/DropdownMenu";

// import Dropdown from "../dropdown";

function JoinWorkers(props) {
  return (
    <StyledRoot className={`page-workers`}>
      <Container maxWidth="lg">
        <StepProgressBar
          startingStep={0}
          onSubmit={onFormSubmit}
          submitBtnName="Finish"
          steps={[
            {
              label: "Personal Info",
              subtitle: "20%",
              name: "step 1",
              content: step1Content,
              // validator: step1Validator,
            },
            {
              label: "Professional Info",
              subtitle: "40%",
              name: "step 2",
              content: step2Content,
              // validator: step2Validator,
            },
            {
              label: "Linked Accounts",
              subtitle: "60%",
              name: "step 3",
              content: step3Content,
              // validator: step3Validator,
            },
            {
              label: "Account Security",
              subtitle: "80%",
              name: "step 4",
              content: step4Content,
              // validator: step4Validator,
            },
          ]}
        />
      </Container>
    </StyledRoot>
  );
}

export default JoinWorkers;
