import React, { useEffect, useState, Fragment } from "react";
import { styled } from "@mui/material/styles";
import { Container, Stack, Typography, Box, Link} from "@mui/material";

import TabGroup from "./TabComponent";
import ButtonGrey from "../../shared/general/ButtonGrey";
import ButtonOcean from "../../shared/general/ButtonOcean";

import ForumIcon from "@mui/icons-material/Forum";

import StickyBox from "react-sticky-box";

const StyledStickyBox = styled(StickyBox)({
  border: "1px solid",
  borderColor: "#CFD3D7",
  padding: 35,
  maxWidth: 450,
  // height: 450,
  overflow: "hidden",
  height: "1%",
  // overflow: "auto",
  backgroundColor: "#f1f4f9",
  borderRadius: "12px",
});

const PackagesSideBox = () => {
  return (
    <StyledStickyBox offsetTop={90}>
      <Stack
        spacing={2}
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <TabGroup />
        <ButtonOcean variant="outlined">
          <Stack direction="row" spacing={0.5}>
            <ForumIcon />
            <Typography>CONTACT SELLER</Typography>
          </Stack>
        </ButtonOcean>
      </Stack>
    </StyledStickyBox>
  );
};

export default PackagesSideBox;
