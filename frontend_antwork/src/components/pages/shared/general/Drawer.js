import React from "react";

import { Drawer, Typography, Divider } from "@mui/material";
import ButtonUni from "./ButtonUni";
import { styled } from "@mui/material/styles";



const DrawerCustom = (props) => {
  return (
    <Drawer anchor={props.anchor} open={props.open} onClose={props.onClose} PaperProps={props.PaperProps}>
      <div style={{ padding: 16 }}>
        <Typography>{props.title}</Typography>
      </div>
      <Divider />
      {props.children}
    </Drawer>
  );
};

export default DrawerCustom;
