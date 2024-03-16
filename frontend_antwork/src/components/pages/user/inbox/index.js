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

import ButtonBlue from "../../shared/general/ButtonBlue";
import ButtonGrey from "../../shared/general/ButtonGrey";

import Inbox from "./inbox";

const StyledRoot = styled("div")({
  minWidth: 350,
  width: "100%",
  backgroundColor: "#f1f4f9",
  paddingTop: 50,
  paddingBottom: 36,
});

const StyledBox = styled(Box)({
  border: "1px solid",
  borderColor: "#CFD3D7",
  // borderRadius: "12px",
  // padding: 35,
});

function InboxPage(props) {
  return (
    <body id="inboxPage">
      <div className="forDropdown" style={{ marginTop: 80 }}>
        <StyledRoot className={`page`}>
          <Container maxWidth="lg"></Container>
          <StyledBox>
            <Inbox />
          </StyledBox>
        </StyledRoot>
      </div>
    </body>
  );
}

export default InboxPage;
