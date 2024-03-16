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
} from "@mui/material";

import LooksOneIcon from "@mui/icons-material/LooksOne";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import Looks3Icon from "@mui/icons-material/Looks3";
import Looks4Icon from "@mui/icons-material/Looks4";
import Looks5Icon from "@mui/icons-material/Looks5";

function Requirements(props) {
  return (
    <Stack spacing={0.3} style={{ marginTop: 18 }}>
      <Stack direction="row" spacing={1}>
        <Typography color="#909090">
          <LooksOneIcon />
        </Typography>
        <Typography fontWeight="medium">Lorem ipsum dolor</Typography>
      </Stack>
      <Typography color="#909090" variant="body1" style={{ marginLeft: 33 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Typography>
      <Divider style={{ marginTop: 18, marginBottom: 18 }} />
      <Stack direction="row" spacing={1}>
        <Typography color="#909090">
          <LooksTwoIcon />
        </Typography>
        <Typography fontWeight="medium">Lorem ipsum dolor</Typography>
      </Stack>
      <Typography color="#909090" variant="body1" style={{ marginLeft: 33 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Typography>
      <Divider style={{ marginTop: 18, marginBottom: 18 }} />
      <Stack direction="row" spacing={1}>
        <Typography color="#909090">
          <Looks3Icon />
        </Typography>
        <Typography fontWeight="medium">Lorem ipsum dolor</Typography>
      </Stack>
      <Typography color="#909090" variant="body1" style={{ marginLeft: 33 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Typography>
      <Divider style={{ marginTop: 18, marginBottom: 18 }} />
      <Stack direction="row" spacing={1}>
        <Typography color="#909090">
          <Looks4Icon />
        </Typography>
        <Typography fontWeight="medium">Lorem ipsum dolor</Typography>
      </Stack>
      <Typography color="#909090" variant="body1" style={{ marginLeft: 33 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Typography>
      <Divider style={{ marginTop: 18, marginBottom: 18 }} />
      <Stack direction="row" spacing={1}>
        <Typography color="#909090">
          <Looks5Icon />
        </Typography>
        <Typography fontWeight="medium">Lorem ipsum dolor</Typography>
      </Stack>
      <Typography color="#909090" variant="body1" style={{ marginLeft: 33 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Typography>
      <Divider style={{ marginTop: 18, marginBottom: 18 }} />
    </Stack>
  );
}

export default Requirements;
