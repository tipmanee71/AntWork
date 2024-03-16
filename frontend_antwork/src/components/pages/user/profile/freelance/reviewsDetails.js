import React, { useEffect, useState, Fragment } from "react";
import { styled } from "@mui/material/styles";
import {
  Container,
  Stack,
  Typography,
  Box,
  Divider,
  CardHeader,
  Avatar,
  Rating,
} from "@mui/material";

const StyledBox = styled(Box)({
  border: "1px solid",
  borderColor: "#CFD3D7",
  borderRadius: "12px",
  padding: 35,
});

const ReviewsDetails = () => {
  return (
    <Stack>
      {Array.from(Array(3)).map((_, index) => (
        <Stack>
          <Stack direction="row" style={{ alignItems: "center" }} spacing={0.3}>
            <CardHeader
              avatar={
                <Avatar
                  src={`${process.env.REACT_APP_API_URL}image/profile/1.jpg`}
                />
              }
              title="Dina Villalobos"
              subheader="8 กรกฎาคม 2565"
            />
            <Rating name="read-only" value={5} size="small" readOnly />
            <Typography variant="caption">(5)</Typography>
          </Stack>

          <Typography
            paragraph
            variant="body2"
            color="#909090"
            style={{ marginLeft: 8 }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae!
          </Typography>
          <Divider />
        </Stack>
      ))}
    </Stack>
  );
};

export default ReviewsDetails;
