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
  Link,
  Divider,
} from "@mui/material";

import ButtonBlue from "../../../shared/general/ButtonBlue";
import ButtonGrey from "../../../shared/general/ButtonGrey";

import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";

const StyledBox = styled(Box)({
  border: "1px solid",
  borderColor: "#CFD3D7",
  borderRadius: "12px",
  padding: 35,
});

const DetailsProfile = () => {
  return (
    <StyledBox>
      <Stack spacing={2}>
        {" "}
        <Stack direction="row" style={{ justifyContent: "space-between" }}>
          <Typography variant="body1">Description</Typography>
          <Link href="#" underline="hover" variant="body1">
            Edit Description
          </Link>
        </Stack>
        <Typography paragraph variant="body2" color="#909090">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
          accusantium nemo autem.
        </Typography>
        <Divider style={{ marginBottom: 20 }} />
      </Stack>
      <Stack spacing={2}>
        {" "}
        <Stack direction="row" style={{ justifyContent: "space-between" }}>
          <Typography variant="body1">Languages</Typography>
          <Link href="#" underline="hover" variant="body1">
            Add New
          </Link>
        </Stack>
        <Typography paragraph variant="body2" color="#909090">
          Add your Languages.
        </Typography>
        <Divider style={{ marginBottom: 20 }} />
      </Stack>
      <Stack spacing={2}>
        {" "}
        <Stack direction="row" style={{ justifyContent: "space-between" }}>
          <Typography variant="body1">Linked Accounts</Typography>
        </Stack>
        <Typography paragraph variant="body2" color="#909090">
          Add your Accounts.
        </Typography>
        {/* <Stack direction="row" spacing={1} style={{ alignItems: "center" }}>
          <Typography color="#267ED5">
            <AddBoxOutlinedIcon fontSize="small" />
          </Typography>
          <Link href="#" underline="none" variant="caption">
            Facebook
          </Link>
        </Stack> */}
        <Divider style={{ marginBottom: 20 }} />
      </Stack>
      <Stack spacing={2}>
        {" "}
        <Stack direction="row" style={{ justifyContent: "space-between" }}>
          <Typography variant="body1">Skills</Typography>
          <Link href="#" underline="hover" variant="body1">
            Add New
          </Link>
        </Stack>
        <Typography paragraph variant="body2" color="#909090">
          Add your Skills.
        </Typography>
        <Divider style={{ marginBottom: 20 }} />
      </Stack>
      <Stack spacing={2}>
        {" "}
        <Stack direction="row" style={{ justifyContent: "space-between" }}>
          <Typography variant="body1">Education</Typography>
          <Link href="#" underline="hover" variant="body1">
            Add New
          </Link>
        </Stack>
        <Typography paragraph variant="body2" color="#909090">
          Add your Education.
        </Typography>
        <Divider style={{ marginBottom: 20 }} />
      </Stack>
      <Stack spacing={2}>
        {" "}
        <Stack direction="row" style={{ justifyContent: "space-between" }}>
          <Typography variant="body1">Certification</Typography>
          <Link href="#" underline="hover" variant="body1">
            Add New
          </Link>
        </Stack>
        <Typography paragraph variant="body2" color="#909090">
          Add your Certification.
        </Typography>
        <Divider style={{ marginBottom: 20 }} />
      </Stack>
    </StyledBox>
  );
};

export default DetailsProfile;
