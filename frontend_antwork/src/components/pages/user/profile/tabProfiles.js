import React from "react";
import PropTypes from "prop-types";
import makeStyles from "@mui/styles/makeStyles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import ProfileFreelancePage from "./freelance";
import ProfileCloudWorkerPage from "./cloud_workers";

import "./style/tabProfiles.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  tab1: {
    textTransform: "none",
    color: "grey",
    backgroundColor: "white",
    width: "130px",
    // height: "32px",
    border: "1px solid grey",
    borderRadius: "25px 0px 0px 25px",
  },
  activetab1: {
    textTransform: "none",
    color: "#007afe",
    backgroundColor: "white",
    width: "130px",
    // height: "32px",
    border: "1px solid #007afe",
    borderRadius: "25px 0px 0px 25px",
  },
  tab2: {
    textTransform: "none",
    color: "grey",
    border: "1px solid grey",
    backgroundColor: "white",
    // height: "32px",
    width: "130px",
    borderRadius: "0px 25px 25px 0px",
  },
  activetab2: {
    textTransform: "none",
    color: "#007afe",
    border: "1px solid #007afe",
    backgroundColor: "white",
    // height: "32px",
    width: "130px",
    borderRadius: "0px 25px 25px 0px",
  },
}));

export default function TabProfiles() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    // console.log()
  };

  return (
    <div className={classes.root}>
      <Tabs
        TabIndicatorProps={{
          style: {
            display: "none",
          },
        }}
        value={value}
        onChange={handleChange}
        aria-label="simple tabs example"
      >
        <Tab
          selected
          className={value === 0 ? classes.activetab1 : classes.tab1}
          label="Freelance"
          {...a11yProps(0)}
        />
        <Tab
          selected
          className={value === 1 ? classes.activetab2 : classes.tab2}
          label="Cloud Worker"
          {...a11yProps(1)}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <ProfileFreelancePage />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ProfileCloudWorkerPage />
      </TabPanel>
    </div>
  );
}
