import React, { useEffect, useState, Fragment } from "react";
import { styled } from "@mui/material/styles";
import { Container, Stack, Typography, Box, Link, Badge } from "@mui/material";

import ButtonGrey from "../../shared/general/ButtonGrey";
import ButtonBlue from "../../shared/general/ButtonBlue";

import StickyBox from "react-sticky-box";

const StyledStickyBox = styled(StickyBox)({
  border: "1px solid",
  borderColor: "#CFD3D7",
  padding: 25,
  maxWidth: "35%",
  width: "300px",
  // height: 450,
  overflow: "hidden",
  height: "1%",
  // overflow: "auto",
  backgroundColor: "#FFFFFF",
  borderRadius: "12px",
});

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 155,
    top: 55,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const OrdersSideBox = () => {
  return (
    <StyledStickyBox offsetTop={90}>
      <Stack spacing={2}>
        <Typography variant="h6">Order Details</Typography>{" "}
        <Stack spacing={1}>
          <Stack direction="row" spacing={2}>
            <img
              src="https://fiverr-res.cloudinary.com/t_slim3,q_auto,f_auto/gigs/148336435/original/f13e814771032b33f4265a039e8a9e6146b55524.png"
              alt="Completed"
              style={{
                width: "100px",
                height: "60px",
                boxShadow: "0 0 1px 0 #000",
                borderRadius: "4px",
                marginBottom: 8,
              }}
            />
            <Stack spacing={1}>
              {" "}
              <StyledBadge badgeContent="COMPLETED" color="success">
                <Link href="#" underline="hover" fontSize={14} color="black">
                  Lorem ipsum dolor sit amet....
                </Link>
              </StyledBadge>
            </Stack>
          </Stack>

          <Stack direction="row" style={{ justifyContent: "space-between" }}>
            <Typography variant="body1" color="text.secondary">
              Ordered from
            </Typography>
            <Link href="#" underline="hover" variant="body1">
              iconsmania
            </Link>
          </Stack>

          <Stack direction="row" style={{ justifyContent: "space-between" }}>
            <Typography variant="body1" color="text.secondary">
              Delivery date
            </Typography>
            <Typography variant="body1">Sep 25, 11:27 PM</Typography>
          </Stack>

          <Stack direction="row" style={{ justifyContent: "space-between" }}>
            <Typography variant="body1" color="text.secondary">
              Total price
            </Typography>
            <Typography variant="body1">THB 7,281.70</Typography>
          </Stack>

          <Stack direction="row" style={{ justifyContent: "space-between" }}>
            <Typography variant="body1" color="text.secondary">
              Order number
            </Typography>
            <Typography variant="body1">#FO71594DEC703</Typography>
          </Stack>
        </Stack>
        <Stack
          spacing={2}
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <ButtonBlue variant="contained" style={{ width: 230, height: 45 }}>
            Order Again
          </ButtonBlue>
        </Stack>
      </Stack>
    </StyledStickyBox>
  );
};

export default OrdersSideBox;
