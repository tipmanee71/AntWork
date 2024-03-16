import React, { Fragment, useEffect, useState } from "react";
import makeStyles from "@mui/styles/makeStyles";
import { useSelector } from "react-redux";
import clsx from "clsx";
import { styled } from "@mui/material/styles";

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
import { Header, AdminMenu, UserMenu, Footer } from "./components/layouts";
import Routers from "./Routers";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import useMediaQuery from "@mui/material/useMediaQuery";
import Chip from "@mui/material/Chip";
import { Avatar, Typography } from "@mui/material";

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

function CheckFooter() {
  let { pathname } = useLocation();

  // console.log(pathname);

  // path that doesn't want to have footer
  let pathnames = [
    "/inbox",
    "/seller_dashboard",
    "/manage_orders",
    "/manage_gigs",
    "/workers"
  ];

  return <div>{!pathnames.includes(pathname) && <Footer />}</div>;
}

function CheckHeader(props) {
  const { handleDrawerOpen, matchesBig, open, isLoggedIn } = props;
  let { pathname } = useLocation();

  // console.log(pathname);

  // path that doesn't want to have header
  let pathnames = ["/seller_dashboard", "/manage_orders", "/manage_gigs"];

  return (
    <div>
      {!pathnames.includes(pathname) && (
        <Header
          handleDrawerOpen={handleDrawerOpen}
          matchesBig={matchesBig}
          open={open}
          isLoggedIn={isLoggedIn}
        />
      )}
    </div>
  );
}

function App() {
  useStyles();
  const matchesBig = useMediaQuery("(min-width:1200px)");
  const [open, setOpen] = useState(true);
  const { isLoggedIn } = useSelector((state) => state.auth);

  useEffect(() => {
    setOpen(matchesBig);
  }, [matchesBig]);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  return (
    <Router>
      <div
        className={`section`}
        style={{ backgroundColor: !isLoggedIn && "#FFFFFF" }}
      >
        <Fragment>
          {/* <Header
            handleDrawerOpen={handleDrawerOpen}
            matchesBig={matchesBig}
            open={open}
            isLoggedIn={isLoggedIn}
          /> */}
        </Fragment>

        <Routers />

        <CheckFooter />

        <CheckHeader
          handleDrawerOpen={handleDrawerOpen}
          matchesBig={matchesBig}
          open={open}
          isLoggedIn={isLoggedIn}
        />
      </div>
    </Router>
  );
}

export default App;
