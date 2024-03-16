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

import Dropdown from "../../shared/general/dropdown";

import TabProfiles from "./tabProfiles";

const StyledRoot = styled("div")({
  minWidth: 350,
  width: "100%",
  backgroundColor: "#f1f4f9",
  paddingTop: 50,
  paddingBottom: 36,
});

function ProfilePage(props) {
  return (
    <div className="forDropdown" style={{ marginTop: 80 }}>
      <Dropdown />
      <StyledRoot className={`page`}>
        <Container maxWidth="lg">
          <TabProfiles />
        </Container>
      </StyledRoot>
    </div>
  );
}

export default ProfilePage;
