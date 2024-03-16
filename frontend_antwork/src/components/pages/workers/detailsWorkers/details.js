import React, { useEffect, useState, Fragment } from "react";
import { styled } from "@mui/material/styles";
import { Container, Stack, Typography, Box } from "@mui/material";

// import NavBar from "./navBarDetails";
import ProductDetails from "./productDetails";
import AboutSeller from "./aboutSeller";
import ComparePackages from "./comparePackages";
import Reviews from "./reviews";
import PackagesSideBox from "./packagesSideBox";

// import Header from "../../layouts/header/index.js";
import Dropdown from "../../shared/general/dropdown";

import "./style/details.css";

const StyledRoot = styled("div")({
  minWidth: 350,
  width: "100%",
  backgroundColor: "#f1f4f9",
  paddingTop: 45,
  paddingBottom: 36,
});

const DetailsWorkers = () => {
  return (
    <div className="forDropdown" style={{ marginTop: 80 }}>
      <Dropdown />
      {/* <NavBar/> */}
      <StyledRoot className={`page-details-workers`}>
        <Container maxWidth="lg">
          <Stack direction="row" spacing={3} style={{ position: "relative" }}>
            <Stack spacing={3} style={{ maxWidth: "75%", width: 1200 }}>
              <ProductDetails />
              <AboutSeller />
              <ComparePackages />
              <Reviews />
            </Stack>

            <PackagesSideBox />
          </Stack>
        </Container>
      </StyledRoot>
    </div>
  );
};

export default DetailsWorkers;
