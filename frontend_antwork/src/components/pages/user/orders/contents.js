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

import Dropdown from "../../shared/general/dropdown";

import ButtonBlue from "../../shared/general/ButtonBlue";
import ButtonGrey from "../../shared/general/ButtonGrey";

import TabForContents from "./tabForContents";

const StyledBox = styled(Box)({
  border: "1px solid",
  borderColor: "#CFD3D7",
  borderRadius: "12px",
  padding: 35,
});

function Contents(props) {
  return (
    <StyledBox>
      <TabForContents />
    </StyledBox>
  );
}

export default Contents;
