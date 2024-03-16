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

import Workers from "./workers";
import "./style.css";

const StyledRoot = styled("div")({
  minWidth: 350,
  width: "100%",
  backgroundColor: "#f1f4f9",
  paddingTop: 80,
  paddingBottom: 36,
});

function WorkersHomePage(props) {
  return (
    <StyledRoot className={`page-workers`}>
      <Container maxWidth="lg">
        <Workers />
      </Container>
    </StyledRoot>
  );
}

export default WorkersHomePage;
