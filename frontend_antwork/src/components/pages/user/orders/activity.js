import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";

import {
  Grid,
  Typography,
  IconButton,
  Box,
  Card,
  CardContent,
  Container,
  Button,
  Paper,
  Stack,
  Divider,
  Avatar,
  Link,
} from "@mui/material";

import AssignmentIcon from "@mui/icons-material/Assignment";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import RocketIcon from "@mui/icons-material/Rocket";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import PlaylistAddCheckCircleIcon from "@mui/icons-material/PlaylistAddCheckCircle";
import InputIcon from "@mui/icons-material/Input";

const StyledDateTag = styled(Box)({
  backgroundColor: "#efeff0",
  width: "80px",
  paddingLeft: "40px",
  paddingRight: 0,
  // margin: "5px 0",
  borderRadius: " 0 100px 100px 0",
  border: "5px solid #fff",
  borderLeftWidth: 0,
  // boxSizing: "border-box",
  fontWeight: 600,
  fontSize: "13px",
  lineHeight: "24px",
  color: "#74767e",
  position: "relative",
});

function Activity(props) {
  return (
    <Stack spacing={1.5} style={{ marginTop: 18 }}>
      <StyledDateTag>Apr 20</StyledDateTag>
      <Stack direction="row" spacing={1.5} style={{ alignItems: "center" }}>
        <Avatar style={{ backgroundColor: "#2C59FF" }}>
          <AssignmentIcon />
        </Avatar>
        <Typography>You placed the order</Typography>
        <Typography color="text.secondary">
          <i>Apr 20, 9:11 AM</i>
        </Typography>
      </Stack>
      <Divider />
      <Stack direction="row" spacing={1.5} style={{ alignItems: "center" }}>
        <Avatar style={{ backgroundColor: "#2C59FF" }}>
          <DriveFileRenameOutlineIcon />
        </Avatar>
        <Typography>You submitted the requirements</Typography>
        <Typography color="text.secondary">
          <i>Apr 20, 9:13 AM</i>
        </Typography>
      </Stack>
      <Divider />
      <Stack direction="row" spacing={1.5} style={{ alignItems: "center" }}>
        <Avatar style={{ backgroundColor: "#2C59FF" }}>
          <RocketIcon />
        </Avatar>
        <Typography>Your order started</Typography>
        <Typography color="text.secondary">
          <i>Apr 20, 9:13 AM</i>
        </Typography>
      </Stack>
      <Divider />
      <Stack direction="row" spacing={1.5} style={{ alignItems: "center" }}>
        <Avatar style={{ backgroundColor: "#2C59FF" }}>
          <AccessTimeFilledIcon />
        </Avatar>
        <Typography>Your delivery date was updated to April 24</Typography>
        <Typography color="text.secondary">
          <i>Apr 20, 9:13 AM</i>
        </Typography>
      </Stack>
      <Divider />
      <StyledDateTag>Apr 25</StyledDateTag>
      <Stack direction="row" spacing={1} style={{ alignItems: "center" }}>
        <Avatar style={{ backgroundColor: "#2C59FF" }}>
          <PlaylistAddCheckCircleIcon />
        </Avatar>
        <Typography>
          You accepted{" "}
          <Link href="#" underline="hover" variant="body1">
            iconsmania
          </Link>{" "}
          request to extend the delivery date
        </Typography>
        <Typography color="text.secondary">
          <i>Apr 25, 12:19 PM</i>
        </Typography>
      </Stack>
      <Divider />
      <Stack direction="row" spacing={1.5} style={{ alignItems: "center" }}>
        <Avatar style={{ backgroundColor: "#2C59FF" }}>
          <AccessTimeFilledIcon />
        </Avatar>
        <Typography>Your delivery date was updated to April 26</Typography>
        <Typography color="text.secondary">
          <i>Apr 25, 12:19 PM</i>
        </Typography>
      </Stack>
      <Divider />
      <StyledDateTag>Apr 26</StyledDateTag>
      <Stack direction="row" spacing={1.5} style={{ alignItems: "center" }}>
        <Avatar style={{ backgroundColor: "#2C59FF" }}>
          <InputIcon />
        </Avatar>
        <Typography>
          <Link href="#" underline="hover" variant="body1">
            iconsmania
          </Link>{" "}
          delivered your order
        </Typography>
        <Typography color="text.secondary">
          <i>Apr 26, 5:06 AM</i>
        </Typography>
      </Stack>
      <Divider />
      <StyledDateTag>Apr 29</StyledDateTag>
      <Stack direction="row" spacing={1.5} style={{ alignItems: "center" }}>
        <Avatar style={{ backgroundColor: "#2C59FF" }}>
          <AssignmentIcon />
        </Avatar>
        <Typography>Your order was completed</Typography>
        <Typography color="text.secondary">
          <i>Apr 29, 6:04 AM</i>
        </Typography>
      </Stack>
      <Divider />
    </Stack>
  );
}

export default Activity;
