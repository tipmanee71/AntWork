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

import TabDetails from "./tab-details";

const StyledRoot = styled("div")({
  minWidth: 350,
  width: "100%",
  backgroundColor: "#f1f4f9",
  paddingTop: 60,
  paddingBottom: 36,
});

function ProgressOrders(props) {
  return (
    <StyledRoot className={`page`}>
      <Container maxWidth="lg">
        <TabDetails />
      </Container>
    </StyledRoot>
  );
}

export default ProgressOrders;
