import React, { useEffect, useState, Fragment } from "react";
import { styled } from "@mui/material/styles";
import { Container, Stack, Typography, Box, Divider } from "@mui/material";

import Dropdown from "../../shared/general/dropdown";

import TextFieldTheme from "../../shared/general/TextFieldTheme";
import ButtonOcean from "../../shared/general/ButtonOcean";
import FileUploader from "../../seller/fileUploader/uploader";

import StartDate from "../../shared/general/DateTimePicker/startDate";
import StartTime from "../../shared/general/DateTimePicker/startTime";
import EndDate from "../../shared/general/DateTimePicker/endDate";
import EndTime from "../../shared/general/DateTimePicker/endTime";

import ProvinceBox from "../../seller/autoComplete/place/province";
import DistrictBox from "../../seller/autoComplete/place/district";

const StyledBox = styled(Box)({
  border: "1px solid",
  borderColor: "#CFD3D7",
  borderRadius: "12px",
  padding: 35,
  backgroundColor: "#f1f4f9",
});

const StyledRoot = styled("div")({
  minWidth: 350,
  width: "100%",
  backgroundColor: "#f1f4f9",
  paddingTop: 45,
  paddingBottom: 36,
});

const StyledBoxForFileUploader = styled(Box)({
  border: "1px dashed",
  borderColor: "#CFD3D7",
  borderRadius: "12px",
  padding: 35,
  backgroundColor: "#f1f4f9",
});

const ProposeHypothetically = () => {
  return (
    <div className="forDropdown" style={{ marginTop: 80 }}>
      <Dropdown />
      {/* <NavBar/> */}
      <StyledRoot className={`page-details-workers`}>
        <Container maxWidth="lg">
          <StyledBox>
            <Stack spacing={1}>
              <Typography variant="h4">Propose Hypothetically</Typography>
              <Box>
                <Typography variant="body1" color="text.secondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
              </Box>

              <Divider
                color="white"
                style={{ marginTop: 20, marginBottom: 20 }}
              />

              <Stack
                spacing={3}
                style={{ marginTop: 10, alignItems: "center" }}
              >
                <Stack
                  direction="row"
                  spacing={3}
                  style={{ justifyContent: "center" }}
                >
                  <StartDate /> <StartTime /> <EndTime />
                </Stack>

                <Stack
                  direction="row"
                  spacing={3}
                  style={{ justifyContent: "center" }}
                >
                  <EndDate /> <StartTime /> <EndTime />
                </Stack>

                <TextFieldTheme
                  label="Place"
                  variant="filled"
                  style={{ width: "90%" }}
                />
                <Stack direction="row" spacing={2}>
                  <DistrictBox />
                  <ProvinceBox />
                </Stack>
                <TextFieldTheme
                  label="Link GPS"
                  variant="filled"
                  style={{ width: "90%" }}
                />
                <TextFieldTheme
                  label="Note"
                  variant="filled"
                  style={{ width: "90%" }}
                />
              </Stack>
              <Stack style={{ marginTop: 30 }}>
                <StyledBoxForFileUploader>
                  <FileUploader />
                </StyledBoxForFileUploader>
              </Stack>
              <Stack style={{ alignItems: "flex-end" }}>
                <ButtonOcean
                  style={{ marginTop: 30, width: "200px" }}
                  variant="contained"
                >
                  Confirm
                </ButtonOcean>
              </Stack>
            </Stack>
          </StyledBox>
        </Container>
      </StyledRoot>
    </div>
  );
};

export default ProposeHypothetically;
