import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import { useTranslation } from "react-i18next";
import makeStyles from "@mui/styles/makeStyles";
import { styled } from "@mui/material/styles";
import { useDispatch } from "react-redux";

import {
  Grid,
  Typography,
  Checkbox,
  FormControlLabel,
  IconButton,
  Box,
  Card,
  CardContent,
  Container,
  Button,
  Paper,
} from "@mui/material";
import { Link, withRouter, NavLink } from "react-router-dom";

import Bidding from "./bidding";
import Request from "./request";
import Category from "./category";
import Company from "./company";
import Freelance from "./freelances";
import Dropdown from "./dropdown";
import CarouselAds from "./carousel";

import request from "../assets/data/request";
import jobGroup from "../assets/data/jobGroup";
import company from "../assets/data/company";
import locations from "../assets/data/location";

import ButtonBlue from "../shared/general/ButtonBlue";
import ButtonOcean from "../shared/general/ButtonOcean";

import Cover from "./assets/cover.png";
import Locations from "./location";

// import Carousel, { CarouselItem } from "../shared/general/Carousel";
// import DropdownMenu from "../shared/general/DropdownMenu";

const StyledRoot = styled("div")({
  minWidth: 350,
  width: "100%",
  backgroundColor: "#f1f4f9",
  paddingTop: 80,
  paddingBottom: 36,
});

const StyledCover = styled("div")({
  height: "350px",
  backgroundImage: `url(${Cover})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  ["@media only screen and (max-width: 600px)"]: {
    height: "156px",
  },
});

const StyledPaper = styled(Paper)({
  padding: "40px 0px",
  width: "100%",
  borderRadius: 20,
  border: "none",
  "& .wrap": {
    padding: "0 16px",
    textAlign: "center",
    "& .MuiButton-root": {
      marginTop: 16,
    },
  },
});

function Home(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    async function getdata() {}
    getdata();
  }, []);

  return (
    <StyledRoot className={`page`}>
      <Dropdown />
      <Container maxWidth="lg">
        <Grid
          container
          spacing={1}
          alignItems="center"
          style={{ marginBottom: 20, marginTop: 20 }}
        >
          <Grid item xs={3}>
            <div>
              <StyledPaper variant="outlined">
                <div className="wrap">
                  <Typography variant="h6" align="center" gutterBottom>
                    Hi Username,
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    align="center"
                    gutterBottom
                  >
                    Get offers from sellers for your project
                  </Typography>
                  <ButtonBlue variant="outlined">Post a Request</ButtonBlue>
                  <ButtonOcean
                    variant="contained"
                    component={NavLink}
                    to="/workers"
                  >
                    จ้างงานแบบเหมา
                  </ButtonOcean>
                </div>
              </StyledPaper>
            </div>
          </Grid>
          <Grid item xs={9} style={{ marginTop: 10 }}>
            <CarouselAds />
          </Grid>
        </Grid>

        {/* <Grid container spacing={1} alignItems="center" style={{ marginBottom: 48 }}> */}
        {/* <Grid item xs={12} sm={3}>
            <StyledPaper variant="outlined">
              <div className="wrap">
                <Typography variant="h6" align="center" gutterBottom>
                  You are company
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  align="center"
                  gutterBottom
                >
                  Find your Amazing Manpower
                </Typography>
                <ButtonBlue variant="outlined">Post Request</ButtonBlue>
              </div>
            </StyledPaper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <StyledCover></StyledCover>
          </Grid>
          <Grid item xs={12} sm={3}>
            <StyledPaper variant="outlined">
              <div className="wrap">
                <Typography variant="h6" align="center" gutterBottom>
                  You are vendor
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  align="center"
                  gutterBottom
                >
                  Take your opportunities
                </Typography>
                <ButtonBlue variant="outlined">Register vendor</ButtonBlue>
              </div>
            </StyledPaper>
          </Grid> */}
        {/* </Grid> */}
        <Grid
          container
          spacing={1}
          alignItems="center"
          style={{ marginBottom: 20 }}
        ></Grid>
        <Freelance />
        {/* <Bidding request={request} />
        <Request request={request} />
        <Locations locations={locations} /> */}
        {/* <Locations locations={locations} /> */}
        {/* <Category jobGroup={jobGroup} /> */}
        {/* <Company company={company} /> */}
      </Container>
    </StyledRoot>
  );
}

export default Home;
