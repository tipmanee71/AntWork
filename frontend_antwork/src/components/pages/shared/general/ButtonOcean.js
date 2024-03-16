import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const StyleButtonOcean = styled(Button)(({ variant, color }) => ({
  ...(variant === "contained" && {
    borderColor: "#14B5D5",
    color: "#ffffff",
    backgroundColor: "#14B5D5",
    borderRadius: 8,
    "&:hover": {
      borderColor: "#28889B",
      backgroundColor: "#28889B",
    },
  }),
  ...(variant === "outlined" && {
    borderColor: "#14B5D5",
    backgroundColor: "transparent",
    color: "#14B5D5",
    borderRadius: 8,
    "&:hover": {
      borderColor: "#28889B",
    },
  }),
  ...(variant === "text" && {
    backgroundColor: "transparent",
    color: "#14B5D5",
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

const ButtonOcean = (props) => {
  return (
    <StyleButtonOcean
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
    </StyleButtonOcean>
  );
};

export default ButtonOcean;