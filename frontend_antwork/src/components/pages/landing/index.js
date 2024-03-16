import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";

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
  Stack,
  ImageList,
  ImageListItem,
} from "@mui/material";
import { Link, withRouter, NavLink } from "react-router-dom";

import ImageBackground from "../shared/assets/landing_homepage.png";
import ImageLanding from "../shared/assets/phonework2_homepage.png";
import ButtonBlue from "../shared/general/ButtonBlue";
import ButtonOcean from "../shared/general/ButtonOcean";

const StyledRoot = styled("div")({
  minWidth: 350,
  width: "100%",
  backgroundColor: "#f1f4f9",
  // paddingTop: 74,
  paddingBottom: 36,
});

const StyledPaper = styled(Paper)({
  backgroundColor: "#f1f4f9",
  // zIndex:
});

const HeaderLabel = styled(Box)({
  padding: "50px 0 50px 50px",
  width: "50%",
  ["@media (max-width: 900px)"]: {
    width: "100%",
    padding: "50px"
  },
  "& .MuiTypography-root": {
    width: "85%",
    ["@media (max-width: 900px)"]: {
      width: "100%",
    },
  },
})

const Imgcontainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "end",
  width: "50%",
  ["@media (max-width: 900px)"]: {
    display: "none",
  },
})

const InfoContainer = styled("div")({
  display: "flex",
  height: "100%",
  justifyContent: "space-between",
  alignContent: "center",
})

function Landing(props) {
  return (
    <StyledRoot className={`page`}>
      {/* <Dropdown /> */}
      <div style={{ position: "relative" }}>
        <img src={ImageBackground} height={"700px"} width={"100%"}/>
        <div
          class="box-row hero-text fade-in"
          style={{
            position: "absolute",
            zIndex: 1,
            top: "25%",
            left: 0,
            width: "100%",
            textAlign: "center",
            transform: "translateY(-50%)",
            textShadow: "0 -1px 2px rgb(0 0 0 / 30%)",
          }}
        >
          <Grid container>
            <Grid item xs={12} md={6}>
              <Typography variant="h2" color="white">
                แพลตฟอร์มหางาน
              </Typography>
              <Typography variant="h2" color="white">
                พาร์ทไทม์ / งานประจำ
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} style={{ margin: "auto" }}>
              <Stack
                spacing={2}
                style={{ justifyContent: "center", alignItems: "center" }}
              >
                <ButtonBlue
                  to="/freelance_onboarding"
                  style={{ width: 300, height: 40 }}
                  component={Link}
                  variant="contained"
                >
                  Become a Freelance
                </ButtonBlue>
                <ButtonOcean
                  to="/workers_onboarding"
                  style={{ width: 300, height: 40 }}
                  component={Link}
                  variant="contained"
                >
                  Become a Buyer
                </ButtonOcean>
              </Stack>
            </Grid>
          </Grid>
          {/* <Stack
            spacing={2}
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <Typography variant="h2" color="white">
              แพลตฟอร์มหางาน
            </Typography>
            <Typography variant="h2" color="white">
              พาร์ทไทม์ / งานประจำ
            </Typography>
            <Typography variant="h5" color="white">
              {" "}
              You bring the skill. We'll make earning easy.
            </Typography>
            <ButtonBlue
              to="/freelance_onboarding"
              style={{ width: 300, height: 40 }}
              component={Link}
              variant="contained"
            >
              Become a Freelance
            </ButtonBlue>
            <ButtonOcean
              to="/workers_onboarding"
              style={{ width: 300, height: 40 }}
              component={Link}
              variant="contained"
            >
              Become a Cloud Worker
            </ButtonOcean>
          </Stack> */}
        </div>
        <InfoContainer>
          <Imgcontainer>
            <img
              src={ImageLanding}
              alt="ImageLanding"
              style={{
                width: "100%",
                height: "auto"
              }}
            />
          </Imgcontainer>
          <HeaderLabel style={{ margin: "auto" }}>
            <Typography variant="h4"
              // variant="h4"
              style={{ fontWeight: "800" }}
            >
              แพลตฟอร์มที่ช่วยหางานพาร์ทไทม์ และบริการจัดหาคนทำงานพาร์ทไทม์ ให้แก่บริษัท
            </Typography>
            <Typography variant="h5"
              // variant="h5"
              // style={{ fontFamily: "inherit" }}
            >
              UniHR
            </Typography>
            <Typography
              variant="subtitle1"
              style={{ margin: "20px 0px" }}
            >
              เป็นบริการจัดหาคนทำงานพนักงานพาร์ทไทม์ให้กับบริษัท ห้างร้าน รวมถึงออแกไนซ์ต่างๆที่ต้อง การกำลังคนเข้าไปช่วยงาน โดยเน้นไปที่รูปแบบการทำ งานพาร์ทไทม์สำหรับผู้ที่ต้องการฝากหา พนักงานกับ Uni HR เราให้บริการจัดหาคนแบบ One Stop Service ตั้งแต่จัดหาคนคัดกรองเบื้องต้นเทรนงานตรวจสอบการทำงานไปจนถึงขั้นตอนการชำระเงินให้กับพนักงานแทนคุณลูกค้า
            </Typography>
          </HeaderLabel>
          
        </InfoContainer>

        <div
          class="hero-stats"
          style={{
            backgroundColor: "rgba(255,255,255,.3)",
            width: "100%",
            padding: "25px 0",
            position: "absolute",
            zIndex: 2,
            bottom: 0,
            display: "block",
            justifyContent: "center",
            // top: "170%",
          }}
        >
          {/* <Stack
            direction="row"
            spacing={15}
            style={{ justifyContent: "center", display: "flex" }}
          >
            <Stack style={{ alignItems: "center" }}>
              <Typography variant="h5" color="white">
                A Gig is Bought Every
              </Typography>
              <Typography variant="h4" color="white">
                4 SEC
              </Typography>
            </Stack>
            <Stack style={{ alignItems: "center" }}>
              <Typography variant="h5" color="white">
                Transactions
              </Typography>
              <Typography variant="h4" color="white">
                50M+
              </Typography>
            </Stack>
            <Stack style={{ alignItems: "center" }}>
              <Typography variant="h5" color="white">
                Price Range
              </Typography>
              <Typography variant="h4" color="white">
                100฿ - 10,000฿
              </Typography>
            </Stack>
          </Stack> */}
        </div>
      </div>
    </StyledRoot>
  );
}

export default Landing;
