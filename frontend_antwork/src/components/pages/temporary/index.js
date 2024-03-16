import React, { useState, useEffect, Fragment ,useRef} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import dayjs from "dayjs";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { ArrowBack, ArrowForward } from '@material-ui/icons';

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
import { ThemeProvider, styled ,createTheme} from "@mui/material/styles";
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import BottomNavigation from '@mui/material/BottomNavigation';

import ImageBackground from "../shared/assets/landing_homepage.png";
import Logotemporary from "../shared/assets/Logotemporary.png";
import TextFieldTheme from "../shared/general/TextFieldTheme";
import ButtonUni from "../shared/general/ButtonUni";


import { getAllTemporary } from "../../../actions/temporary";

import jobGroup from "../assets/data/jobGroup";
import CardjobGroup from "../shared/general/Card/CardJobGroup";
import CardTemporary from "../shared/general/Card/CardTemporary"

const StyledRoot = styled("div")({
  minWidth: 350,
  width: "100%",
  backgroundColor: "#f1f4f9",
  paddingBottom: 36,
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
  marginTop: "20px",
  width: "100%",
  textAlign: "center",
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

//linear-gradient(180deg, rgba(104, 213, 232, 0.30) 0%, rgba(224, 142, 159, 0.28) 100%)', borderRadius: 48}}

const StyleTypography = styled(Typography)({
  borderLeft: "4px solid transparent",
  borderImage: "linear-gradient(0deg, rgba(136,213,254,1) 0%, rgba(254,184,207,1) 99%, rgba(254,184,207,1) 100%) 5",
  padding: 5
})

const StylemenuCard = styled(Card)({
    background: "#FFFFFF",
    borderRadius: '48px',
    height: "60px",
    position: "relative",
    boxShadow: "4px 4px 4px 4px rgba(0, 0, 0, 0.13)",
    border: "2px solid",
    borderColor: "transparent", // Set the default border color to transparent
    backgroundImage: "linear-gradient(to right, rgba(254,184,207,1), rgba(136,213,254,1), rgba(254,184,207,1), rgba(136,213,254,1))", // Linear gradient for the border
});

const Stylecheckbox = styled(Box)({
    background: 'linear-gradient(180deg, rgba(104, 213, 232, 0.3) 0%, rgba(224, 142, 159, 0.28) 100%)',
    borderRadius: '48px',
    width: '360px',
    height: '92px',
    position: 'absolute',
    left: '203px',
    top: '896px',
});

const Stylegroubjop =styled(Box)({
  marginTop: 20,
  
});
const containerStyle = {

  display: 'flex',
  margin: '10px',
  overflowX: 'auto',
  whiteSpace: 'nowrap',
  scrollbarWidth: 'none',
  '-ms-overflow-style': 'none',
};

const cardContainerStyle = {
  flex: '0 0 auto',
  width: '25%',
  paddingRight: '10px', // Add spacing between cards if needed
};

const arrowContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end', // Align icons to the right
};

const StyledIconButton = styled(IconButton)({
  background: 'linear-gradient(to right, #f2d0e2, #e6d9ef, #d7ecf1)',
  borderRadius: '50%', // Add a circle to the background
  margin: '0 5px', // Adjust margin as needed
});


const Hometemporary = ({ jobGroups }) => {
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();
  const history = useHistory();
  const [selectedJobGroup, setSelectedJobGroup] = useState(null);

  const handleJobGroupClick = (group) => {
    setSelectedJobGroup(group);
    history.push(`/job-groups/${group.idJobGroup}`);
  };

  const buttonClick = (value) =>{
    history.push({
      pathname: "/workDetail",
      state: { data: value },
    })
  }
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const scrollWidth = scrollContainerRef.current.offsetWidth;
      const cardWidth = scrollWidth / 4; // Assuming 4 cards per row

      // Calculate the previous row position
      const prevRowPos = Math.floor(scrollContainerRef.current.scrollLeft / cardWidth - 1) * cardWidth;

      // Scroll to the previous row
      scrollContainerRef.current.scrollTo({
        left: prevRowPos >= 0 ? prevRowPos : 0, // Ensure not to scroll before the beginning
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const scrollWidth = scrollContainerRef.current.offsetWidth;
      const scrollLeftPos = scrollContainerRef.current.scrollLeft;
      const cardSetWidth = scrollContainerRef.current.scrollWidth;
      const cardWidth = scrollWidth / 4; // Assuming 4 cards per row

      // Calculate the next row position
      const nextRowPos = Math.ceil((scrollLeftPos + scrollWidth) / cardWidth) * cardWidth;

      // Scroll to the next row
      scrollContainerRef.current.scrollTo({
        left: nextRowPos,
        behavior: 'smooth',
      });
    }
  };
  
  return (
    <StyledRoot className={`page`}>
      <div style={{ backgroundImage: `url(${ImageBackground})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPositionY: "80%" }}>
        <HomepageDiv>
          <Grid container>
            <Grid item xs={12} md={6}>
              <Imgcontainer>
                <img src={Logotemporary} width={"100%"} style={{ textShadow: "0 -1px 2px rgb(0 0 0 / 30%)", }}/>
              </Imgcontainer>
            </Grid>
            <Grid item xs={12} md={6} style={{ margin: "auto" }}>
              <Stack
                spacing={2}
                style={{ textAlign: "left", padding: "20px" }}
              >
                <Typography variant="h5" style={{ fontWeight: 600 }}>ค้นหางานพาร์ทไทม์ งานประจำค้นหาแรงงาน Freelance แรงงานชั่วคราว และแรงงานทั้งหมด และงานทั้งหมด</Typography>
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
                    <Typography variant="body1" style={{ fontWeight: 500 }} color={"#757575"}>ค่าเเรงขั้นต่ำ</Typography>
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
      </div>

      <Container maxWidth="md">
 
        <StylemenuCard >
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction label="แรงงาน Freelance"  />
            <BottomNavigationAction label="แรงงานชั่วคราว"  />
          </BottomNavigation>

        </StylemenuCard>
        
        <Stylegroubjop>
          <div style={containerStyle} ref={scrollContainerRef}>
            {jobGroup.map((group, index) => (
              <div key={group.idJobGroup} style={cardContainerStyle}>
                <CardjobGroup jobGroup={group} navigateTo={`/job-groups/${group.idJobGroup}`} />
              </div>
            ))}   
          </div>
          <div style={arrowContainerStyle}>
            <StyledIconButton onClick={scrollLeft}>
              <ArrowBack />
            </StyledIconButton>
            <StyledIconButton onClick={scrollRight}>
              <ArrowForward />
            </StyledIconButton>
        </div>
        </Stylegroubjop>
        

        <StyleTypography>
          namejopgroub
        </StyleTypography>
      

          <CardTemporary>

          </CardTemporary>
         

      </Container>
    </StyledRoot>
  );
}


export default Hometemporary;
