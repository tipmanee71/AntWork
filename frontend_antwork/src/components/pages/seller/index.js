import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import { useHistory } from "react-router-dom";
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
  ButtonBase,
} from "@mui/material";
import { Link, withRouter, NavLink } from "react-router-dom";
import ButtonUni from "../shared/general/ButtonUni";
import Dropdown from "../shared/general/dropdown";
import ImageBackground from "../shared/assets/background.png";
import layout1 from "../shared/assets/layout1.png"
import CardjobGroup from "../shared/general/Card/CardJobGroup";
import ButtonBlue from "../shared/general/ButtonBlue";
import ButtonWhite from "../shared/general/ButtonWhite";
import ButtonOcean from "../shared/general/ButtonOcean";

const StyledRoot = styled("div")({
  minWidth:  0,
  width: "100%",
  height:0,
  //backgroundColor: "#f1f4f9",
  paddingTop: 80,
  //paddingBottom: 36,
});

const HomepageDiv = styled(Box)({
  //marginTop: "20px",
  width: "100%",
  textAlign: "center",
  position: "relative" ,
  ["@media (max-width: 1500px)"]: {
    marginTop: "80px",
  },
});

const StyledPaper = styled(Paper)({
  backgroundColor: "#f1f4f9",
  // zIndex:
});

function SellerHomePage(props) {
   const history = useHistory();

  const handleButtonClick = () => {
    
    history.push('/seller_creatework');
  };

  return (
    <StyledRoot className={`page`}>
      <div style={{ backgroundImage: `url(${ImageBackground})`, backgroundRepeat: "no-repeat", backgroundSize: "cover",  }}>
        <HomepageDiv>
        {/* <Dropdown /> */}
       
          <header
            class="mp-box mp-hero bg-black has-video has-subhead has-buttons js-component-lp-hero"
            style={{
              height: "580px",
              overflow: "hidden",
              justifyContent: "center",
            }}
          >
            <video
              src="https://sg.fiverrcdn.com/packages_lp/cover_video.mp4"
              poster="//assetsv2.fiverrcdn.com/assets/v2_photos/packages-lp/bg-first-hero-663d877e05b0814ef0b07c05910aa645.jpg"
              autoPlay
              loop
              muted
              preload="auto"
              style={{
                width: "100%",
                objectFit: "cover",
                opacity: 1,
                justifyContent: "center",
                alignItems: "center",
                // zIndex: 0,
                // overflow: "hidden"
              }}
            >
              <source
                src="https://sg.fiverrcdn.com/packages_lp/cover_video.mp4"
                type="video/mp4"
              />
              <source
                src="https://sg.fiverrcdn.com/packages_lp/cover_video.webm"
                type="video/webm"
              />
              <source
                src="https://sg.fiverrcdn.com/packages_lp/cover_video.ogv"
                type="video/ogv"
              />
            </video>
            <div
                      class="box-row hero-text fade-in"
                      style={{
                        position: "absolute",
                        zIndex: 1,
                        top: "40%",
                        left: 0,
                        width: "100%",
                        textAlign: "center",
                        transform: "translateY(-50%)",
                        textShadow: "0 -1px 2px rgb(0 0 0 / 30%)",
                      }}
                    >
                      <Stack spacing={2} style={{ justifyContent: "center", alignItems: "center" }}>
                        <Grid container spacing={2}>
                          <Grid item xs={12} md={12}>
                            <Typography variant="h2" color="white">
                              แพลตฟอร์มหางาน พาร์ทไทม์ / งานประจำ
                            </Typography>
                          </Grid>
                          <Grid item xs={12} md={12} style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                            <ButtonBlue variant="contained" 
                            style={{ width: "20%", padding: '10px', margin: '5px' }}
                            onClick={handleButtonClick}
                            >
                              ลงรับสมัครงาน
                            </ButtonBlue>

                            <ButtonOcean variant="contained" style={{ margin: '5px'}}>
                              ค้นหาแรงงาน
                            </ButtonOcean>
                          </Grid>

                        </Grid>
                      </Stack>

            </div>
          </header>
    
          <Container maxWidth="lg">
          
          {/* <div style={{
            backgroundImage: `url(${layout1})`,
            backgroundSize: "cover",  // Adjust as needed
            backgroundRepeat: "no-repeat",  // Adjust as needed
          }} /> */}
          
          <div style={{ marginTop:"10%",marginBottom:"10%",padding:"1%"}}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={8}>
                {/* <CardjobGroup/> */}
              </Grid>

              <Grid item xs={12} md={4} justifyContent="flex-end">
                <Typography variant="h3" color="white">
                สำหรับบริษัท
                </Typography>
                <Typography variant="body2" color="white">
                  {" "}
                  ค้นหาแรงงานชั่วคราวเพื่อช่วยให้ธุรกิจของคุณปรับตัวได้อย่างง่ายดายและ
                  รวดเร็วมากขึ้นเพื่อลดความผันผวน
                  ของภาระงาน
                </Typography>
              </Grid>
             
              
            
            </Grid>
            
            
          </div>

          <div style={{ marginTop:"10%",marginBottom:"10%",padding:"1%"}}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <Typography variant="h3" color="white">
                แรงงาน  Freelance
                </Typography>
                <Typography variant="body2" color="white">
                  {" "}
                  มองหา Freelance งานคุณภาพ มีมาตรฐานรับประกัน เพื่อบริหารธุรกิจให้ประสบความสำเร็จอย่างมืออาชีพ
                </Typography>
              </Grid>
             
              <Grid item xs={12} md={8}>
                {/* <CardjobGroup/> */}
              </Grid>
            
            </Grid>
            
            
          </div>
       
          </Container>

                
      </HomepageDiv>
    </div>
    </StyledRoot>
  );
}

export default SellerHomePage;


