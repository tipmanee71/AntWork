import React, { Fragment } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { Link, withRouter, NavLink } from "react-router-dom";
import { styled } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import NotificationsIcon from "@mui/icons-material/Notifications";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch, useSelector } from "react-redux";
import EmailIcon from "@mui/icons-material/Email";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import { Stack } from "@mui/material";

import TranslateIcon from "@mui/icons-material/Translate";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LogoutIcon from "@mui/icons-material/Logout";

import ButtonBlue from "../../shared/general/ButtonBlue";
import Logo from "../../assets/freelance_logo.png";

import { Box } from "@mui/system";

const StyledAppBar = styled(AppBar)(({}) => ({
  backgroundColor: "transparent",
  boxShadow: "none",
  "& .MuiToolbar-regular": {
    color: "#212b36",
    backgroundColor: "#ffffffcc",
    transition:
      "height 250ms cubic-bezier(0.4, 0, 0.6, 1) 0ms, background-color 250ms cubic-bezier(0.4, 0, 0.6, 1) 0ms",
    backdropFilter: "blur(6px)",
    ["@media (min-width: 900px)"]: {
      height: 76,
    },

    "& .MuiContainer-root": {
      display: "flex",
      alignItems: "center",
      "& .headerAction": {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        "& .partner": {
          ["@media only screen and (max-width: 600px)"]: {
            display: "none",
          },
        },
        "& .contact-us": {
          ["@media only screen and (max-width: 600px)"]: {
            display: "none",
          },
        },
        "& .divider": {
          margin: "0 16px",
          height: 24,
          ["@media only screen and (max-width: 600px)"]: {
            display: "none",
          },
        },
      },
    },
  },
}));

const StyledIconButtonTranslate = styled(IconButton)(({}) => ({
  border: "1px solid #00000030",
  borderRadius: 8,
  marginLeft: 8,
  "&:hover": {
    transform: "scale(1.09) translateZ(0px)",
  },
  ["@media only screen and (max-width: 600px)"]: {
    display: "none",
  },
}));

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const SellerDashboardHeader = (props) => {
  return (
    <div>
      <ElevationScroll {...props}>
        <StyledAppBar>
          <Toolbar>
            <Container maxWidth="lg">
              <a href="/">
                {" "}
                <img src={Logo} alt="logo" width={190} />
              </a>

              <div style={{ flexGrow: 1 }}></div>
              <div className={`headerAction`}>
                <Stack
                  direction="row"
                  spacing={0.3}
                  style={{ alignItems: "center" }}
                >
                  {/* <div>
                    <ButtonBlue
                      variant={"text"}
                      component={NavLink}
                      to="/profile"
                      className="partner"
                      style={{ padding: 0, minWidth: 30, marginRight: 15 }}
                    >
                      <PermIdentityOutlinedIcon />
                    </ButtonBlue>
                  </div>
                  <div>
                    <ButtonBlue
                      variant={"text"}
                      component={NavLink}
                      to="/inbox"
                      className="partner"
                      style={{ padding: 0, minWidth: 30, marginRight: 8 }}
                    >
                      <MailOutlineOutlinedIcon />
                    </ButtonBlue>
                  </div> */}
                  <div>
                    <ButtonBlue
                      variant={"contained"}
                      component={NavLink}
                      to="/manage_gigs"
                      className="manage-gigs"
                    >
                      Manage Gigs
                    </ButtonBlue>
                  </div>
                  {/* <div>
                    <ButtonBlue
                      variant={"text"}
                      component={NavLink}
                      to="/register"
                      className="partner"
                    >
                      Explore
                    </ButtonBlue>
                  </div> */}
                </Stack>

                <Divider className="divider" orientation="vertical" />

                <div style={{ display: "flex", alignItems: "center" }}>
                  {
                    <Fragment>
                      <ButtonBlue
                        style={{ marginRight: 8 }}
                        to="/manage_orders"
                        variant={"outlined"}
                        className="seller-dashboard"
                        component={NavLink}
                      >
                        Manage Orders
                      </ButtonBlue>
                      <ButtonBlue
                        style={{ marginRight: 8 }}
                        to="/"
                        variant={"outlined"}
                        className="seller-dashboard"
                        component={NavLink}
                      >
                        Switch to Buying
                      </ButtonBlue>
                      {/* <ButtonBlue
                        style={{ marginRight: 8 }}
                        to="/seller_dashboard"
                        variant={"outlined"}
                        className="seller-dashboard"
                        component={NavLink}
                      >
                        Growth & Marketing
                      </ButtonBlue>
                      <ButtonBlue
                        to="/seller_dashboard"
                        variant={"outlined"}
                        className="analytics"
                        component={NavLink}
                      >
                        Analytics
                      </ButtonBlue> */}
                    </Fragment>
                  }

                  {/* <div>
                    <StyledIconButtonTranslate aria-label="translate">
                      <TranslateIcon fontSize="small" />
                    </StyledIconButtonTranslate>
                  </div> */}
                </div>
              </div>
            </Container>
          </Toolbar>
        </StyledAppBar>
      </ElevationScroll>
      {/* {renderMenu} */}
    </div>
  );
};

export default SellerDashboardHeader;
