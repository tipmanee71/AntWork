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

import OrdersSideBox from "./ordersSidebox";
import Contents from "./contents";

const StyledRoot = styled("div")({
  minWidth: 350,
  width: "100%",
  backgroundColor: "#f1f4f9",
  paddingTop: 50,
  paddingBottom: 36,
});

function OrdersPage(props) {
  return (
    <div className="forDropdown" style={{ marginTop: 80 }}>
      <Dropdown />
      <StyledRoot className={`page`}>
        <Container maxWidth="lg">
          <Stack
            direction="row"
            spacing={3}
            style={{ position: "relative", marginTop: 45 }}
          >
            <Stack spacing={3} style={{ maxWidth: "65%", width: 1000 }}>
              <Contents />
            </Stack>

            <OrdersSideBox />
          </Stack>
        </Container>
      </StyledRoot>
    </div>
  );
}

export default OrdersPage;
