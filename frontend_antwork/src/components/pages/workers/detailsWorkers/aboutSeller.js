import React, { useEffect, useState, Fragment } from "react";
import { styled } from "@mui/material/styles";
import { Stack, Typography, Box, Avatar, Link } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

import ButtonGrey from "../../shared/general/ButtonGrey";
import RatingIcon from "../../shared/general/RatingIcon";

const StyledBox = styled(Box)({
  border: "1px solid",
  borderColor: "#CFD3D7",
  borderRadius: "12px",
  padding: 35,
  backgroundColor: "#f1f4f9",
});

const AboutSeller = () => {
  return (
    <StyledBox>
      <Typography variant="h6" gutterBottom>
        About The Seller
      </Typography>
      <Stack
        direction="row"
        style={{ alignItems: "center", marginTop: 20 }}
        spacing={3}
      >
        <Avatar
          src={`${process.env.REACT_APP_API_URL}image/profile/1.jpg`}
          style={{ width: 90, height: 90 }}
        />
        <Stack spacing={0.4} style={{ justifyContent: "center" }}>
          <Link href="#" underline="hover" variant="h7">
            Dina Villalobos
          </Link>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </Typography>
          <RatingIcon />
        </Stack>
      </Stack>
      <Stack style={{ marginTop: 20 }}>
        <Typography paragraph variant="body1" gutterBottom>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
          accusantium nemo autem.
        </Typography>
      </Stack>
    </StyledBox>
  );
};

export default AboutSeller;
