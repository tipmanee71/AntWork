import React, { useState, useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import dayjs from "dayjs";

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
  Pagination,
} from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { styled } from "@mui/material/styles";

import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import PermIdentityRoundedIcon from '@mui/icons-material/PermIdentityRounded';
import ApartmentRoundedIcon from '@mui/icons-material/ApartmentRounded';

// import ImageBackground from "../shared/assets/landing_homepage.png";
import ImageBackground from "../shared/assets/workDetail_header.png";
import PhoneworkImg from "../shared/assets/phonework_homepage.png";
import Imgbottom from "../shared/assets/img_background.png";
import TextFieldTheme from "../shared/general/TextFieldTheme";
import ButtonUni from "../shared/general/ButtonUni";
import imgbgworkdetail from "../shared/assets/imgbgworkdetail.png";


import WcIcon from '@mui/icons-material/Wc';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SchoolIcon from '@mui/icons-material/School';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import TranslateIcon from '@mui/icons-material/Translate';

import { getAllWork } from "../../../actions/work";
import CardWork from "../shared/general/Card/CardWork";
import { Icon } from "@material-ui/core";


const StyledRoot = styled("div")({
  minWidth: 350,
  width: "100%",
  backgroundColor: "#f1f4f9",
  paddingBottom: 36,
});


// const StyledPaper = styled(Paper)({
//   padding: "40px 0px",
//   width: "100%",
//   borderRadius: 20,
//   border: "none",
//   "& .wrap": {
//     padding: "0 16px",
//     textAlign: "center",
//     "& .MuiButton-root": {
//       marginTop: 16,
//     },
//   },
// });

const StylePaper = styled(Paper)({
  backgroundImage: "linear-gradient(to right, #f2d0e2, #e6d9ef , #d7ecf1)",
  borderRadius: "20px",
  padding: 20,
   position: "relative", 
   marginTop: "5%",
   marginBottom:"15%",
  // marginleft: "50%",
   left:"60%", 
   width: "500px",  // Adjust the width as needed
   ZIndex: 500, 
})

const Imgcontainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "end",
  width: "100%",
  ["@media (max-width: 899px)"]: {
    display: "none",
  },
})

const HomepageDiv = styled(Box)({
  padding: "20px",
  //marginTop: "50px",
  // textAlign: "center",
  ["@media (max-width: 1500px)"]: {
    marginTop: "80px",
  },
})

const StyleTextField = styled(TextFieldTheme)({
  backgroundColor: "#fff",
  borderRadius: "8px",
  width: "100%",
  "& .MuiInputLabel-root": {
    color: "#637381",
  },
  "& .MuiOutlinedInput-root": {
    border: "0",
    "& .MuiOutlinedInput-notchedOutline": {
      border: "0",
    },
    "& .MuiOutlinedInput-input": {
      padding: "9px 14px",
    },
    "& .MuiInputBase-inputMultiline": {
      padding: 0,
    },
  },
})

const StyleTypography = styled(Typography)({
  borderLeft: "4px solid transparent",
  borderImage: "linear-gradient(0deg, rgba(136,213,254,1) 0%, rgba(254,184,207,1) 99%, rgba(254,184,207,1) 100%) 5",
  padding: 5
})

const StyleWorkCard = styled(Box)({
  boxShadow: "0px 0px 10px 5px rgba(0, 0, 0, .1)",
})

function WorkDetail({location}) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { state } = location

  const { result: workList } = useSelector((state) => state.work);

  const [ data, setData ] = useState(null)
  const [ page, setPage ] = useState(1)

  useEffect(()=>{
    if(!state){
      history.goBack()
    }else{
      setData(state.data ? state.data : null)
      console.log(state);
    }
  },[])
  
  return (
    <StyledRoot className={`page`}>
      {data && 
        <div >
          {/* <img src={Imgbottom} style={{ position: "absolute", bottom: "20px", width: "100%" }} /> */}
          <HomepageDiv style={{backgroundImage: `url(${imgbgworkdetail})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPositionY: "100%" }} >
            <StylePaper >
              <Stack>
                <Typography variant="h5" color={"white"}>{data.positionName}</Typography>
                <Box style={{ marginTop: "10px" }}>
                  <Box display={"flex"} style={{ alignItems: "center" }}>
                    <WorkOutlineOutlinedIcon style={{ marginRight: "10px" }} />
                    <Typography variant="subtitle1">รูปแบบงาน</Typography>
                  </Box>
                  <Typography variant="subtitle1" color={"white"}>{data.workType === "pastTime" ? "งานพาร์ทไทม์" : "ประจำ"}</Typography>
                </Box>

                <Box style={{ marginTop: "10px" }}>
                  <Box display={"flex"} style={{ alignItems: "center" }}>
                    <PaidOutlinedIcon style={{ marginRight: "10px" }} />
                    <Typography variant="subtitle1">จำนวนเงิน</Typography>
                  </Box>
                  <Typography variant="subtitle1" color={"white"}>{`${data.price} บาท/${data.hiringType==="Daily"? 'วัน' : 'เดือน'}`}</Typography>
                </Box>

                <Box style={{ marginTop: "10px" }}>
                  <Box display={"flex"} style={{ alignItems: "center" }}>
                    <PermIdentityRoundedIcon style={{ marginRight: "10px" }} />
                    <Typography variant="subtitle1">จำนวนที่รับ</Typography>
                  </Box>
                  <Typography variant="subtitle1" color={"white"}>{data.people}</Typography>
                </Box>

                <Box style={{ marginTop: "10px" }}>
                  <Box display={"flex"} style={{ alignItems: "center" }}>
                    <PlaceOutlinedIcon style={{ marginRight: "10px" }} />
                    <Typography variant="subtitle1">สถานที่ทำงาน</Typography>
                  </Box>
                  <Typography variant="subtitle1" color={"white"}>{data.place === "At_Home"? "ทำงานที่บ้าน" : data.location }</Typography>
                </Box>

                <Box style={{ marginTop: "10px" }}>
                  <Box display={"flex"} style={{ alignItems: "center" }}>
                    <ApartmentRoundedIcon style={{ marginRight: "10px" }} />
                    <Typography variant="subtitle1">บริษัท</Typography>
                  </Box>
                  <Typography variant="subtitle1" color={"white"}>{data.companyName}</Typography>
                </Box>

                <ButtonUni
                  variant={"contained"}
                  radius="style2"
                  fullWidth
                >
                  สมัครงาน
                </ButtonUni>
              </Stack>
            </StylePaper>
          </HomepageDiv>
          
        </div>
    
      }
      {/* <div style={{ backgroundImage: `url(${ImageBackground})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPositionY: "80%" }}>
        <HomepageDiv>
          <Grid container>
            <Grid item xs={12} md={6}>
              <Imgcontainer>
                <img src={PhoneworkImg} width={"100%"} style={{ textShadow: "0 -1px 2px rgb(0 0 0 / 30%)", }}/>
              </Imgcontainer>
            </Grid>
            <Grid item xs={12} md={6} style={{ margin: "auto" }}>
              <Stack
                spacing={2}
                style={{ textAlign: "left", padding: "20px" }}
              >
                <Typography variant="h5" style={{ fontWeight: 600 }}>ค้นหางานพาร์ทไทม์ งานประจำ และงานทั้งหมด</Typography>
                <Grid container>
                  <Grid item xs={12} md={10}>
                    <Typography variant="body1" style={{ fontWeight: 500 }} color={"#757575"}>ประเภทงาน</Typography>
                    <StyleTextField
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={12} md={10}>
                    <Typography variant="body1" style={{ fontWeight: 500 }} color={"#757575"}>ตำแหน่งหรือบริษัท</Typography>
                    <StyleTextField
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={12} md={10} textAlign={"end"}>
                    <ButtonUni
                      variant="contained"
                      style={{ width: "20%" }}
                    >
                      ค้นหา
                    </ButtonUni>
                  </Grid>
                </Grid>
              </Stack>
            </Grid>
          </Grid>
        </HomepageDiv>
      </div> */}
      
      <Container maxWidth="md">
        <div>
        
        <StyleTypography variant="h4" style={{ fontWeight: 600 ,marginTop: "10px" }}>รายละเอียดงาน</StyleTypography>
        {workList && workList.length > 0 ? (
          <Fragment>
            <Grid container spacing={2}>
              {workList.slice((page-1) * 4, page * 4).map((item, index) => (
              <Grid item xs={6} md={12} key={index}>
                <CardWork data={item} />
              </Grid>
              ))}
            </Grid>
            <Box style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
              <Pagination
                page={page}
                count={Math.ceil(workList.length/4)}
                onChange={(_, nextPage)=> setPage(nextPage)}
              />
            </Box>
          </Fragment>
        ) : (
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              height: "50px",
              marginTop: "20px",
            }}
          >
            <Typography
              variant="body1"
              style={{ "font-family": "Kanit, sans-serif" }}
            >
              ไม่พบการจจ้างงาน
            </Typography>
          </Box>
        )}
          
        </div>
      </Container>

     <Container maxWidth="md">
      <Grid container xs={12} spacing={2}>
        <Grid item xs={12}>
          <StyleTypography variant="h4" style={{ fontWeight: 600 }}>
            คุณสมบัติ
          </StyleTypography>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={4} container direction="column" alignItems="center">
            <WcIcon />
            <Typography variant="subtitle1">Icon 1</Typography>
          </Grid>
          <Grid item xs={4} container direction="column" alignItems="center">
            <PeopleAltIcon />
            <Typography variant="subtitle1">Icon 2</Typography>
          </Grid>
          <Grid item xs={4} container direction="column" alignItems="center">
            <SchoolIcon />
            <Typography variant="subtitle1">Icon 3</Typography>
          </Grid>

          <Grid item xs={4} container direction="column" alignItems="center">
            <WorkHistoryIcon />
            <Typography variant="subtitle1">Icon 4</Typography>
          </Grid>
          <Grid item xs={4} container direction="column" alignItems="center">
            <TranslateIcon />
            <Typography variant="subtitle1">Icon 5</Typography>
          </Grid>
          <Grid item xs={4} container direction="column" alignItems="center">
            <SchoolIcon />
            <Typography variant="subtitle1">Icon 6</Typography>
          </Grid>
      </Grid>

      </Grid>
    </Container>

    </StyledRoot>
  );
}

export default WorkDetail;
