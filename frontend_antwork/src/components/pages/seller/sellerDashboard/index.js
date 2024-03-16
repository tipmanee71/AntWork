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

import SellerDashboardHeader from "./seller-header";
import HiredTable from "./hired-table";

const StyledRoot = styled("div")({
  minWidth: 350,
  width: "100%",
  backgroundColor: "#f1f4f9",
  paddingTop: 80,
  paddingBottom: 36,
});

function SellerDashboard(props) {
  return (
    <StyledRoot className={`page`}>
      <Container maxWidth="lg">
        <SellerDashboardHeader />
        <Box style={{ marginTop: 30 }}>
          <HiredTable />
        </Box>
      </Container>
    </StyledRoot>
  );
}

export default SellerDashboard;
