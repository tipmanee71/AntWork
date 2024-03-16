import React from "react";
import { Typography, Stack, Grid, Link } from "@mui/material";
import "./style/DropdownMenu.css";

const DropdownMenu = () => {
  return (
    <div className="dropdown">
      <button className="dropbtn">Some Categories</button>
      <div className="dropdown-content">
        <Stack
          direction="row"
          spacing={3}
          style={{ justifyContent: "space-between", padding: 15 }}
        >
          <Stack>
            {Array.from(Array(6)).map((_, index) => (
              // <Grid item xs={2} sm={4} md={4} key={index}>
              // <Grid item xs={2} sm={4} md={4} key={index}>

              <Link href="#" underline="none">
                Some topic
              </Link>

              // </Grid>
            ))}
          </Stack>
          <Stack>
            {Array.from(Array(6)).map((_, index) => (
              <Link href="#" underline="none">
                Some topic
              </Link>
            ))}
          </Stack>
          <Stack>
            {Array.from(Array(6)).map((_, index) => (
              <Link href="#" underline="none">
                Some topic
              </Link>
            ))}
          </Stack>
          <Stack>
            {Array.from(Array(6)).map((_, index) => (
              <Link href="#" underline="none">
                Some topic
              </Link>
            ))}
          </Stack>
        </Stack>
        {/* <a href="#">Some Topics</a>
        <a href="#">Some Topics</a>
        <a href="#">Some Topics</a> */}
      </div>
    </div>
  );
};

export default DropdownMenu;
