import React, { useEffect, useState, Fragment } from "react";
import { styled } from "@mui/material/styles";
import { Container, Stack, Typography, Box, Divider } from "@mui/material";

import ReviewsDetails from "./reviewsDetails";

import RatingIcon from "../../shared/general/RatingIcon";
import ButtonBlue from "../../shared/general/ButtonBlue";

const StyledBox = styled(Box)({
  border: "1px solid",
  borderColor: "#CFD3D7",
  borderRadius: "12px",
  padding: 35,
});

const Reviews = () => {
  return (
    <StyledBox>
      {" "}
      <Stack
        direction="row"
        style={{
          marginBottom: 10,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Stack
          direction="row"
          spacing={1}
          style={{
            alignItems: "center",
          }}
        >
          <Typography variant="h6" gutterBottom>
            557 Reviews
          </Typography>
          <RatingIcon />
        </Stack>

        <Stack>
          <ButtonBlue>
            See All{" "}
            <i
              style={{ lineHeight: 0, paddingLeft: 6 }}
              class="fi fi-br-angle-small-right"
            ></i>
          </ButtonBlue>
        </Stack>
      </Stack>
      <Divider />
      <ReviewsDetails />
    </StyledBox>
  );
};

export default Reviews;
