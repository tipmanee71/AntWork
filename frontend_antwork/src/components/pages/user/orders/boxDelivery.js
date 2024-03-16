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
  Avatar,
  CardHeader,
} from "@mui/material";

import DownloadIcon from "@mui/icons-material/Download";

const StyledBoxHeader = styled(Box)({
  border: "1px solid",
  borderColor: "#CFD3D7",
  borderBottom: 0,
  padding: 10,
  backgroundColor: "#F4F4F4",
});

const StyledBoxContent = styled(Box)({
  border: "1px solid",
  borderColor: "#CFD3D7",
  padding: 15,
});

function BoxDelivery(props) {
  return (
    <Stack spacing={0} style={{ marginTop: 18 }}>
      <StyledBoxHeader>
        <Typography style={{ marginLeft: 8 }} color="#686868" fontWeight="bold">
          DELIVERY #1
        </Typography>
      </StyledBoxHeader>
      <StyledBoxContent>
        <Stack>
          <Stack>
            <Stack
              direction="row"
              style={{ alignItems: "center" }}
              spacing={0.3}
            >
              <CardHeader
                avatar={
                  <Avatar
                    src={`${process.env.REACT_APP_API_URL}image/profile/4.jpg`}
                  />
                }
                title="iconsomnia"
                subheader="18 มิถุนายน 2565"
              />
            </Stack>
            <Typography
              paragraph
              variant="body2"
              color="#909090"
              style={{ marginLeft: 8 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
            <Stack direction="row" spacing={1.5}>
              {" "}
              <Typography style={{ marginLeft: 8 }} fontWeight="medium">
                SOURCE FILES:
              </Typography>
              <Typography color="#9E9E9E">
                <DownloadIcon />
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </StyledBoxContent>
    </Stack>
  );
}

export default BoxDelivery;
