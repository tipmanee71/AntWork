import React, { useEffect, useState, Fragment } from "react";
import { styled } from "@mui/material/styles";
import { Stack, Typography, Box } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const StyledBox = styled(Box)({
  border: "1px solid",
  borderColor: "#CFD3D7",
  borderRadius: "12px",
  padding: 35,
});

const RatingIcon = () => {
  return (
    <Stack direction="row">
      <Box
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography align="left" variant="body2" color="#FFBE5B">
          {Array.from(Array(5)).map((_, index) => (
            <StarIcon />
          ))}
        </Typography>
      </Box>
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          marginLeft: 8,
        }}
      >
        <Typography align="left" variant="body2" color="#FFBE5B">
          5.0
        </Typography>
      </Box>
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          marginLeft: 8,
        }}
      >
        <Typography align="left" variant="body2" color="text.secondary">
          (297)
        </Typography>
      </Box>
    </Stack>
  );
};

export default RatingIcon;
