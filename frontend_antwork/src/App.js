import React, { Fragment, useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";
import { useSelector } from "react-redux";
import clsx from "clsx";

import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style/uicons-bold-rounded.css";
import "./style/uicons-regular-rounded.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import {
  BrowserRouter as Router,
  useParams,
  useLocation,
} from "react-router-dom";
import { Header, AdminMenu, UserMenu, FreelanceMenu } from "./components/layouts";
import Routers from "./Routers";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import useMediaQuery from "@mui/material/useMediaQuery";
import Chip from "@mui/material/Chip";
import { Avatar, Typography } from "@mui/material";

const StyledToolbar = styled("div")(({}) => ({
  paddingTop: 36,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  "& .textName": {
    fontSize: 16,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
}));
const StyledAvatarMenuBar = styled(Avatar)(({}) => ({
  width: 48,
  height: 48,
  marginRight: 8,
}));
const StyledBoxProfileMenuBar = styled(Box)(({}) => ({
  backgroundColor: "#f2f3f5",
  borderRadius: 20,
  padding: "16px 12px",
  display: "flex",
  alignItems: "center",
  width: 230,
}));

const useStyles = makeStyles((theme) => ({
  "@global": {
    "*::-webkit-scrollbar": {
      weight: "4px",
    },
    "*::-webkit-scrollbar-track": {
      "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
    },
    "*::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(0,0,0,.1)",
    },
  },
}));
const drawerWidth = 280;

const drawerUseStyles = makeStyles((theme) => ({
  drawerOpen: {
    width: drawerWidth,
  },
  drawerClose: {
    overflowX: "hidden",
    width: 56,
  },
  bannerOpen: {
    backgroundImage:
      // "url(" +
      // process.env.PUBLIC_URL +
      // "/images/background_menu.jpg" +
      // ")"
      `url(${process.env.PUBLIC_URL}/images/background_menu.jpg)`,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  isActive: {
    backgroundColor: "#e0f5fd",
    color: "#0080ff",
  },
}));

// function CheckHeader(props) {
//   const { handleDrawerOpen, matchesBig, open, isLoggedIn } = props;
//   let { pathname } = useLocation();

//   // console.log(pathname);

//   // path that doesn't want to have header
//   let pathnames = ["/seller_dashboard", "/manage_orders", "/manage_gigs"];

//   return (
//     <div>
//       {!pathnames.includes(pathname) && (
//         <Header
//           handleDrawerOpen={handleDrawerOpen}
//           matchesBig={matchesBig}
//           open={open}
//           isLoggedIn={isLoggedIn}
//         />
//       )}
//     </div>
//   );
// }

const DrawerContainer = ({ open, matchesBig, handleDrawerOpen }) => {
  const { user: currentUser } = useSelector((state) => state.auth);
  const { result: userProfile } = useSelector((state) => state.userProfile);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isManager, setIsManager] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const [isFreelance, setIsFreelance] = useState(false);
  //const [isTemporary, setIsTemporary] = useState(false);
  useEffect(() => {

    if (userProfile && userProfile.roles) {
      setIsFreelance(userProfile.roles.includes("ROLE_FREELANCE"));
      //setIsTEMPORARY(userProfile.roles.includes("ROLE_TEMPORARY"));
      setIsAdmin(userProfile.roles.includes("ROLE_ADMIN"));
      setIsManager(
        userProfile.roles.includes("ROLE_MANAGER") ||
          userProfile.roles.includes("ROLE_USER_MANAGER")
      );
    }
  }, [userProfile, matchesBig]);

  const classes = drawerUseStyles();
  return (
    <Drawer
      variant={matchesBig ? "persistent" : "temporary"}
      anchor="left"
      open={open}
      onClose={handleDrawerOpen}
      className={clsx({
        [classes.drawerOpen]: open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.bannerOpen]: open,
        }),
      }}
    >
      <StyledToolbar>
        <StyledBoxProfileMenuBar>
          {userProfile && (
            <Fragment>
              <StyledAvatarMenuBar
                alt={userProfile.employeeID}
                src={`${userProfile.imageProfile}`}
              />
              <div style={{ width: 175 }}>
                <Typography className={`textName`} variant="h6">
                  {userProfile.firstname_EN} {userProfile.lastname_EN}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {isFreelance ? "Freelance" : "Buyer"}
                </Typography>
              </div>
            </Fragment>
          )}
        </StyledBoxProfileMenuBar>
      </StyledToolbar>
      {/* {isLoggedIn && ( */}
      {isFreelance && (
        <Fragment>
          <FreelanceMenu />
        </Fragment>
      )}
      {/* {(isManager) && (
        <Fragment>
          <ManagerMenu />
        </Fragment>
      )}
      {isAdmin && (
        <Fragment>
          <AdminMenu open={open} />
        </Fragment>
      )}
      {isAssessor && (
        <Fragment>
          <AssessorMenu open={open} />
        </Fragment>
      )} */}
    </Drawer>
  );
};

const HeaderAndDrawer = ({ isLoggedIn, matchesBig }) => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  return (
    <Fragment>
      <Header
        handleDrawerOpen={handleDrawerOpen}
        matchesBig={matchesBig}
        open={open}
        isLoggedIn={isLoggedIn}
      />
      <DrawerContainer
        handleDrawerOpen={handleDrawerOpen}
        matchesBig={matchesBig}
        open={open}
      />
    </Fragment>
  );
};

function App() {
  useStyles();
  const matchesBig = useMediaQuery("(min-width:1200px)");
  const { isLoggedIn } = useSelector((state) => state.auth);

  return (
    <Router>
      <div
        className={`section`}
        style={{ display: "flex", backgroundColor: !isLoggedIn && "#FFFFFF" }}
      >

        {/* {isLoggedIn && ( */}
          <HeaderAndDrawer isLoggedIn={isLoggedIn} matchesBig={matchesBig} />
        {/* )} */}

        {/* <CheckHeader
          handleDrawerOpen={handleDrawerOpen}
          matchesBig={matchesBig}
          open={open}
          isLoggedIn={isLoggedIn}
        /> */}
        <Routers />
      </div>
    </Router>
  );
}

export default App;
