import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";

import {
  Avatar,
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
  Divider,
} from "@mui/material";
import { Link, withRouter, NavLink } from "react-router-dom";

import ButtonBlue from "../../../shared/general/ButtonBlue";
import ButtonGrey from "../../../shared/general/ButtonGrey";

import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PersonIcon from "@mui/icons-material/Person";

const StyledBox = styled(Box)({
  border: "1px solid",
  borderColor: "#CFD3D7",
  borderRadius: "12px",
  padding: 35,
});

const StyledStack = styled(Stack)({
  justifyContent: "center",
});

const ProfileCard = () => {
  return (
    <StyledBox>
      <StyledStack spacing={1}>
        <Stack spacing={1} style={{ alignItems: "center" }}>
          <Avatar
            src={`${process.env.REACT_APP_API_URL}image/profile/3.jpg`}
            style={{ width: 150, height: 150 }}
          />
          <Typography variant="h6">Ronald Caldwell</Typography>
          <Typography variant="caption" color="text.secondary">
            <EditOutlinedIcon />
          </Typography>
          <ButtonGrey variant="outlined" style={{ width: 350, height: 40 }}>
            Preview Profile
          </ButtonGrey>
        </Stack>

        <Stack spacing={1}>
          <Divider style={{ marginTop: 15, marginBottom: 10 }} />
          <Stack direction="row" style={{ justifyContent: "space-between" }}>
            <Stack direction="row">
              <Typography style={{ marginRight: 8 }}>
                <LocationOnIcon />
              </Typography>
              <Typography variant="body1">From</Typography>
            </Stack>
            <Typography variant="body1">Thailand</Typography>
          </Stack>
          <Stack direction="row" style={{ justifyContent: "space-between" }}>
            <Stack direction="row">
              <Typography style={{ marginRight: 8 }}>
                <PersonIcon />
              </Typography>
              <Typography variant="body1">Member since</Typography>
            </Stack>
            <Typography variant="body1">Sep 2021</Typography>
          </Stack>
        </Stack>
      </StyledStack>
    </StyledBox>
  );
};

export default ProfileCard;
