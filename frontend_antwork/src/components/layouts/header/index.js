import React, { Fragment, useEffect } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { Link, withRouter, NavLink, useLocation } from "react-router-dom";
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

import Logo from "../../../components/pages/assets/logo_company/ant_logo.png";
import ButtonBlue from "../../pages/shared/general/ButtonBlue";

import { logout } from "../../../actions/auth";
import { getUserProfile } from "../../../actions/user";
import { Box } from "@mui/system";

const drawerWidth = 280;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    backgroundColor: "#FFFFFF",
    // backgroundImage: "linear-gradient(109.6deg, rgb(255, 207, 84) 11.2%, rgb(255, 158, 27) 91.1%)",
    zIndex: 1100,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  grow: {
    flexGrow: 1,
  },
}));

const StyledAppBar = styled(AppBar)(({}) => ({
  backgroundColor: "transparent",
  boxShadow: "none",
  width: "100%",
  ["@media (min-width: 1200px)"]: {
    width: "calc(100% - 281px)",
    "&.menuClose": {
      width: "100% !important",
    },
  },

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
      ["@media (max-width: 768px)"]: {
        padding: 0,
      },
      display: "flex",
      alignItems: "center",
      ["@media (min-width: 1200px)"]: {
        padding: 0,
        "&.menuClose": {
          paddingLeft: 24,
          paddingRight: 24,
        },
      },
      "& .headerAction": {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        "& .translate, .MuiDivider-root": {
          ["@media (max-width: 768px)"]: {
            display: "none",
          },
        },
      },
    },
  },
}));

const StyledIconButtonMenu = styled(IconButton)(({}) => ({
  //marginRight: 24,
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

const Header = (props) => {
  const { open, matchesBig, isLoggedIn } = props;
  const classes = useStyles();
  const location = useLocation();
  const { user: currentUser } = useSelector((state) => state.auth);
  const { result: userProfile } = useSelector((state) => state.userProfile);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();
  const isMenuOpen = Boolean(anchorEl);
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const logOut = () => {
    dispatch(logout());
    window.location.assign("/");
    handleMenuClose();
  };

  useEffect(() => {
    if (currentUser) {
      //Check JWT Token expiration
      const JWT = currentUser.accessToken;
      const jwtPayload = JSON.parse(window.atob(JWT.split(".")[1]));
      const jwtUnix = jwtPayload.exp * 1000;

      let todayUnix = Date.now();

      if (todayUnix > jwtUnix) {
        //if token expire force to logout
        logOut();
      }

      dispatch(getUserProfile());
    }
  }, []);

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      id={menuId}
      open={isMenuOpen}
      onClose={handleMenuClose}
      PaperProps={{
        elevation: 0,
        sx: {
          top: "56px !important",
          right: "190px !important",
          overflow: "visible",
          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
          mt: 1.5,
          borderRadius: "20px",
          width: "250px",
          "& .MuiAvatar-root": {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
        },
      }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      <Box style={{ width: 178, padding: "0 20px", margin: "12px 0" }}>
        <Typography
          variant="h6"
          style={{
            fontSize: 16,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          Georgiana Tillman
        </Typography>
        <Typography color="text.secondary">georti@scg.com</Typography>
      </Box>
      <Divider />
      <MenuItem>
        <ListItemIcon>
          <HomeOutlinedIcon fontSize="small" />
        </ListItemIcon>
        Home
      </MenuItem>
      <MenuItem component={Link} to="/me">
        <ListItemIcon>
          <PersonOutlineOutlinedIcon fontSize="small" />
        </ListItemIcon>
        Profile
      </MenuItem>
      <MenuItem component={Link} to="/login" onClick={logOut}>
        <ListItemIcon>
          <LogoutIcon fontSize="small" />
        </ListItemIcon>
        Logout
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.root}>
      <ElevationScroll {...props}>
        <StyledAppBar
          className={clsx({ menuClose: open === false && matchesBig })}
        >
          <Toolbar>
            <Container
              className={clsx({ menuClose: open === false && matchesBig })}
            >
              {isLoggedIn && userProfile &&
              <StyledIconButtonMenu
                aria-label="open drawer"
                onClick={props.handleDrawerOpen}
                edge="start"
                size="large"
              >
                <MenuIcon />
              </StyledIconButtonMenu>}
              <div style={{ cursor: "pointer" }}>
                <img
                  src={Logo}
                  alt="logo"
                  width={80}
                  onClick={() => props.history.push("/")}
                />
              </div>
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
                  </div>
                  <div>
                    <ButtonBlue
                      variant={"text"}
                      component={NavLink}
                      to="/orders"
                      className="partner"
                    >
                      Orders
                    </ButtonBlue>
                  </div> */}
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
                  {isLoggedIn && userProfile ? (
                    <div>
                      <IconButton
                        edge="end"
                        aria-label="account of current user"
                        aria-controls={menuId}
                        aria-haspopup="true"
                        color="inherit"
                        onClick={(event) => setAnchorEl(event.currentTarget)}
                        size="large"
                        style={{ marginRight: 8 }}
                      >
                        <Avatar
                          // alt={currentUser.username}
                          // src={`${process.env.REACT_APP_API_URL}image/profile/${currentUser.image}`}
                        />
                      </IconButton>
                    </div>
                  ) : (
                    <Fragment>
                      {/* <ButtonBlue
                        style={{ marginRight: 8 }}
                        to="/seller_dashboard"
                        variant={"outlined"}
                        className="seller-dashboard"
                        component={NavLink}
                      >
                        Switch to Selling
                      </ButtonBlue>
                      <ButtonBlue
                        to="/seller_homepage"
                        variant={"outlined"}
                        className="join-as-a-seller"
                        component={NavLink}
                      >
                        Join as a seller
                      </ButtonBlue> */}
                      <ButtonBlue
                        to="/company/singup"
                        // variant={"outlined"}
                        // className="join-as-a-seller"
                        component={NavLink}
                      >
                        เข้าร่วมเป็นบริษัท
                      </ButtonBlue>
                      <ButtonBlue
                        to="/login"
                        variant={"outlined"}
                        className="join-as-a-seller"
                        component={NavLink}
                      >
                        Sign in
                      </ButtonBlue>
                      <ButtonBlue
                        onClick={logOut}
                      >
                        LOGOUT
                      </ButtonBlue>
                      {/* <ButtonBlue
                        variant={"contained"}
                        style={{ marginLeft: 8 }}
                        component={NavLink}
                        to="/login"
                      >
                        Sign up
                      </ButtonBlue> */}
                    </Fragment>
                  )}

                  <div>
                    <StyledIconButtonTranslate aria-label="translate">
                      <TranslateIcon fontSize="small" />
                    </StyledIconButtonTranslate>
                  </div>
                </div>
              </div>
            </Container>
          </Toolbar>
        </StyledAppBar>
      </ElevationScroll>
      {renderMenu}
    </div>
  );
};

export default withRouter(Header);
