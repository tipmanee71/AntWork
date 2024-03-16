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
  Stack,
} from "@mui/material";
import { Link, withRouter, NavLink } from "react-router-dom";

import Dropdown from "../../../shared/general/dropdown";

import ButtonBlue from "../../../shared/general/ButtonBlue";
import ButtonGrey from "../../../shared/general/ButtonGrey";

import ProfileCard from "./profileCard";
import ReviewsAsBuyer from "./reviewsAsBuyer";
import DetailsProfile from "./detailsProfile";

const StyledRoot = styled("div")({
  minWidth: 350,
  width: "100%",
  backgroundColor: "#f1f4f9",
  paddingTop: 50,
  paddingBottom: 36,
});

function ProfileCloudWorkerPage(props) {
  return (
    <div className="forDropdown" style={{ marginTop: 0 }}>
      <StyledRoot className={`page`}>
        <Container maxWidth="lg">
          <Stack direction="row" spacing={6} style={{marginTop: 45}}>
            <Stack spacing={2} style={{ maxWidth: "35%", width: 450 }}>
              <ProfileCard />
              <DetailsProfile />
            </Stack>
            <ReviewsAsBuyer />
          </Stack>
        </Container>
      </StyledRoot>
    </div>
  );
}

export default ProfileCloudWorkerPage;
