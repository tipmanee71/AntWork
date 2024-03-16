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

import ReviewsDetails from "./reviewsDetails";

const StyledBox = styled(Box)({
  border: "1px solid",
  borderColor: "#CFD3D7",
  borderRadius: "12px",
  padding: 35,
  width: "1200px",
  maxWidth: "65%",
  overflow: "hidden",
  height: "1%"
});

const ReviewsAsBuyer = () => {
  return (
    <StyledBox>
      <Typography variant="h5">Reviews as Buyer</Typography>
      <ReviewsDetails />
    </StyledBox>
  );
};

export default ReviewsAsBuyer;
