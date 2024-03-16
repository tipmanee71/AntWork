import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const StyleButtonGrey = styled(Button)(({ variant, color }) => ({
  ...(variant === "contained" && {
    borderColor: "#62646A",
    color: "#ffffff",
    backgroundColor: "#CFD3D7",
    borderRadius: 8,
    "&:hover": {
      borderColor: "#62646A",
      backgroundColor: "#CFD3D7",
    },
  }),
  ...(variant === "outlined" && {
    borderColor: "#62646A",
    backgroundColor: "transparent",
    color: "#62646A",
    borderRadius: 8,
    "&:hover": {
      borderColor: "#CFD3D7",
      backgroundColor: "#7A7A7A",
      color: "#FFFFFF",
    },
  }),
  ...(variant === "text" && {
    backgroundColor: "transparent",
    color: "#62646A",
    borderRadius: 8,
    "&:hover": {
      backgroundColor: "#E4E6E8",
    },
  }),
  ...(variant === "text" && color === "secondary" && {
    backgroundColor: "transparent",
    color: "#212b36",
    borderRadius: 8,
    "&:hover": {
      backgroundColor: "#E4E6E8",
    },
  }),
}));

const ButtonGrey = (props) => {
  return (
    <StyleButtonGrey
      startIcon={props.startIcon}
      endIcon={props.endIcon}
      style={props.style}
      size={props.size}
      variant={props.variant}
      onClick={props.onClick}
      component={props.component}
      to={props.to}
      className={props.className}
      color={props.color}
    >
      {props.children}
    </StyleButtonGrey>
  );
};

export default ButtonGrey;