import React, { useEffect, useState, Fragment } from "react";
import { styled } from "@mui/material/styles";
import {
  Stack,
  Typography,
  Box,
  CardHeader,
  Avatar,
  Divider,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

import ImageGallaryComponent from "../../shared/general/ImageGallary";


const StyledBox = styled(Box)({
  border: "1px solid",
  borderColor: "#CFD3D7",
  borderRadius: "12px",
  padding: 35,
});

const ProductDetails = () => {
  return (
    <StyledBox>
      <Typography variant="h4" gutterBottom>
        Lorem ipsum dolor sit amet consectetur adipisicing elit
      </Typography>
      <Stack direction="row">
        <CardHeader
          avatar={
            <Avatar
              src={`${process.env.REACT_APP_API_URL}image/profile/1.jpg`}
            />
          }
          title="Dina Villalobos"
          subheader="Top Rated Seller"
        />
        <Divider orientation="vertical" variant="middle" flexItem />
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: 8,
          }}
        >
          <Typography align="left" variant="body2" color="#FFBE5B">
            <StarIcon></StarIcon>
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
      <ImageGallaryComponent />
      <Typography variant="h6" gutterBottom>
        เกี่ยวกับงานฟรีแลนซ์
      </Typography>
      <Typography paragraph variant="body1" gutterBottom>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        mollitia, molestiae quas vel sint commodi repudiandae consequuntur
        voluptatum laborum numquam blanditiis harum quisquam eius sed odit
        fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
        accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
        molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
        officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
        nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque
        error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis
        modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias
        error harum maxime adipisci amet laborum.
      </Typography>
      <Divider />
      <Typography
        style={{ marginTop: 20 }}
        variant="body1"
        color="text.secondary"
      >
        คำอธิบายเพิ่มเติม:
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        mollitia.
      </Typography>
    </StyledBox>
  );
};

export default ProductDetails;
