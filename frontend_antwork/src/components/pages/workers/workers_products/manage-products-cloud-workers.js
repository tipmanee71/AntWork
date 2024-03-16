import React, { useState, useEffect } from "react";
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

// import the progress bar
import StepProgressBar from "react-step-progress";
// import the stylesheet
import "react-step-progress/dist/index.css";

// import LanguagesLevels from "./languages";

import { NavLink } from "react-router-dom";

import "./style/seller.css";
import "./style/text-editor.css";

// import { TextEditor } from "./textEditor/components";
import TextEditor from "../../seller/text-editor";
import AddBox from "../../seller/dynamicallyAddBox/addBox";
import FileUploader from "../../seller/fileUploader/uploader";
import CategoryBox from "../../seller/autoComplete/categories";

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
const step1Content = (
  <StyledBox>
    <StyledStackForContent spacing={1}>
      <Stack spacing={8}>
        <Stack direction="row" spacing={4}>
          <StyledBoxForTextField style={{ width: "15%" }}>
            <Typography variant="body1" color="white">
              Product Title
            </Typography>
          </StyledBoxForTextField>
          <StyledTextFieldTheme
            label="Product Title"
            variant="filled"
            fullWidth
          />
        </Stack>

        <Stack direction="row" spacing={4}>
          <StyledBoxForTextField style={{ width: "13%" }}>
            <Typography variant="body1" color="white">
              Category
            </Typography>
          </StyledBoxForTextField>
          <CategoryBox />
        </Stack>

        <Stack direction="row" spacing={4}>
          <StyledBoxForTextField style={{ width: "15%" }}>
            <Typography variant="body1" color="white">
              Search tags
            </Typography>
          </StyledBoxForTextField>
          <StyledTextFieldTheme
            label="Enter search terms you feel your buyers will use when looking for your service."
            variant="filled"
            fullWidth
          />
        </Stack>

        <Stack direction="row" spacing={4}>
          <StyledTextFieldTheme
            label="Contact Person"
            variant="filled"
            fullWidth
          />
          <StyledTextFieldTheme label="Tel" variant="filled" fullWidth />
          <StyledTextFieldTheme label="Email" variant="filled" fullWidth />
        </Stack>
      </Stack>
    </StyledStackForContent>
  </StyledBox>
);

const step2Content = (
  <StyledBox>
    <StyledStackForContent spacing={1}>
      <StyledHeader variant="h4" color="white">
        Scope & Pricing
      </StyledHeader>
      <Divider color="white" style={{ marginTop: 20, marginBottom: 20 }} />
    </StyledStackForContent>
  </StyledBox>
);

const step3Content = (
  <StyledBox>
    <StyledHeader variant="h4" color="white">
      Description
    </StyledHeader>
    <Divider color="white" style={{ marginTop: 20, marginBottom: 20 }} />
    <StyledStackForContent
      spacing={1}
      style={{ alignItems: "center", marginTop: 0 }}
    >
      <div className="Box">
        <TextEditor />
      </div>
    </StyledStackForContent>
  </StyledBox>
);

const step4Content = (
  <StyledBox>
    <StyledStackForContent spacing={1}>
      <Stack spacing={1}>
        <Typography variant="h6" color="white">
          Get all the information you need from buyers to get started
        </Typography>
        <Typography variant="body2" color="white">
          Add questions to help buyers provide you with exactly what you need to
          start working on their order.
        </Typography>
        <Divider color="white">
          <Typography variant="caption" color="white">
            YOUR QUESTIONS
          </Typography>
        </Divider>
      </Stack>
      <Stack style={{ justifyContent: "center", alignItems: "center" }}>
        <AddBox />
      </Stack>
    </StyledStackForContent>
  </StyledBox>
);

const step5Content = (
  <StyledBox>
    <StyledStackForContent spacing={1}>
      <Stack spacing={1}>
        <Typography variant="h5" color="white">
          Showcase Your Services In A Gig Gallery
        </Typography>
        <Typography variant="body2" color="white">
          Encourage buyers to choose your Gig by featuring a variety of your
          work.
        </Typography>
        <Divider color="white" style={{ marginTop: 20, marginBottom: 20 }} />
        <FileUploader />
      </Stack>
    </StyledStackForContent>
  </StyledBox>
);

// const step6Content = (
//   <StyledBox>
//     <StyledStackForContent spacing={1}></StyledStackForContent>
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

function step5Validator() {
  // return a boolean
}

// function step6Validator() {
//   // return a boolean
// }

function onFormSubmit() {
  // handle the submit logic here
  // This function will be executed at the last step
  // when the submit button (next button in the previous steps) is pressed
}

// import Carousel, { CarouselItem } from "../shared/general/Carousel";
// import DropdownMenu from "../shared/general/DropdownMenu";

// import Dropdown from "../dropdown";

function ManageProductCloudWorker(props) {
  return (
    <StyledRoot className={`page-workers`}>
      <Container maxWidth="lg">
        <StepProgressBar
          startingStep={0}
          onSubmit={onFormSubmit}
          previousBtnName="Back"
          nextBtnName="Save & Continue"
          submitBtnName="Publish"
          steps={[
            {
              label: "Overview",
              //   subtitle: "25%",
              name: "step 1",
              content: step1Content,
              // validator: step1Validator,
            },
            {
              label: "Pricing",
              //   subtitle: "50%",
              name: "step 2",
              content: step2Content,
              // validator: step2Validator,
            },
            {
              label: "Description",
              //   subtitle: "75%",
              name: "step 3",
              content: step3Content,
              // validator: step3Validator,
            },
            {
              label: "Requirements",
              //   subtitle: "100%",
              name: "step 4",
              content: step4Content,

              // validator: step4Validator,
            },
            {
              label: "Gallery",
              //   subtitle: "100%",
              name: "step 5",
              content: step5Content,
              // validator: step5Validator,
            },
            // {
            //   label: "Publish",
            //   //   subtitle: "100%",
            //   name: "step 6",
            //   content: step6Content,
            //   // validator: step6Validator,
            // },
          ]}
        />
      </Container>
    </StyledRoot>
  );
}

export default ManageProductCloudWorker;
