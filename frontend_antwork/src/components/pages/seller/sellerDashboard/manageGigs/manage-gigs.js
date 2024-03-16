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

import SellerDashboardHeader from "../seller-header";
import TabForManageGigs from "./tab-manage-gigs";

const StyledRoot = styled("div")({
  minWidth: 350,
  width: "100%",
  backgroundColor: "#f1f4f9",
  paddingTop: 80,
  paddingBottom: 36,
});

const StyledBox = styled(Box)({
  border: "1px solid",
  borderColor: "#CFD3D7",
  borderRadius: "12px",
  padding: 35,
  margin: 50,
  marginTop: 0,
});

function ManageGigs(props) {
  return (
    <StyledRoot className={`page`}>
      <Container maxWidth="lg">
        {" "}
        <SellerDashboardHeader />
        <StyledBox>
          <Typography variant="h4" style={{ marginBottom: 20 }}>
            Manage Gigs
          </Typography>
          <TabForManageGigs />
        </StyledBox>
      </Container>
    </StyledRoot>
  );
}

export default ManageGigs;
