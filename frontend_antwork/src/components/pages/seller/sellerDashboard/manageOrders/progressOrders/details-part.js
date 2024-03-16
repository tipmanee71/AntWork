import * as React from "react";
import { styled } from "@mui/material/styles";
import {
  Stack,
  Typography,
  Box,
  CardHeader,
  Avatar,
  Divider,
} from "@mui/material";

const StyledBox = styled(Box)({
  border: "1px solid",
  borderColor: "#CFD3D7",
  borderRadius: "12px",
  padding: 35,
  marginTop: 30,
});

export default function DetailsPart() {
  return (
    <>
      <StyledBox>
        <Typography>Place:</Typography>
      </StyledBox>
      <StyledBox>
        <Typography>Link GPS:</Typography>
      </StyledBox>
      <StyledBox>
        <Typography>Note:</Typography>
      </StyledBox>
      <StyledBox>
        <Typography>Attached File:</Typography>
      </StyledBox>
    </>
  );
}
