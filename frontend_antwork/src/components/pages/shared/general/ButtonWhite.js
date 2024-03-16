import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const StyleButtonWhite = styled(Button)(({ variant, color }) => ({
  ...(variant === "contained" && {
    borderColor: "#ffffff",
    color: "#ffffff",
    backgroundColor: "#ffffff",
    borderRadius: 8,
    "&:hover": {
      borderColor: "#ffffff",
      backgroundColor: "#ffffff",
    },
  }),
  ...(variant === "outlined" && {
    borderColor: "#ffffff",
    backgroundColor: "transparent",
    color: "#ffffff",
    borderRadius: 8,
    "&:hover": {
      borderColor: "#ffffff",
    },
  }),
  ...(variant === "text" && {
    backgroundColor: "transparent",
    color: "#ffffff",
    borderRadius: 8,
    "&:hover": {
      backgroundColor: "#1976d20a",
    },
  }),
  ...(variant === "text" && color === "secondary" && {
    backgroundColor: "transparent",
    color: "#212b36",
    borderRadius: 8,
    "&:hover": {
      backgroundColor: "#1976d20a",
    },
  }),
}));

const ButtonWhite = (props) => {
  return (
    <StyleButtonWhite
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
    </StyleButtonWhite>
  );
};

export default ButtonWhite;