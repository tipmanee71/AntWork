import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const StyleButtonUni = styled(Button)(({ variant, color, colorHover, radius }) => ({
  borderRadius: (radius === "style1") ? 0 : (radius === "style2") ? 10 : 20 ,
  ...(variant === "contained" && {
    borderColor: "#db4178",
    color: "#ffffff",
    backgroundColor: "#db4178",
    "&:hover": {
      color: "#ffffff",
      borderColor: "#AD335E",
      backgroundColor: "#AD335E",
    },
  }),
  ...(variant === "contained" && color === "secondary" && {
    borderColor: "#46cbe2",
    color: "#ffffff",
    backgroundColor: "#46cbe2",
    "&:hover": {
      color: "#ffffff",
      borderColor: "#247785",
      backgroundColor: "#247785",
    },
  }),
  ...(variant === "contained" && color === "error" && {
    borderColor: "#F33030",
    color: "#ffffff",
    backgroundColor: "#F33030",
    "&:hover": {
      color: "#ffffff",
      borderColor: "#C91F1F",
      backgroundColor: "#C91F1F",
    },
  }),
  ...(variant === "outlined" && color === "error" && {
  borderColor: "#F33030", // Border color for error state
  color: "#F33030", // Text color for error state
  backgroundColor: "transparent", // Transparent background for outlined variant
  "&:hover": {
    borderColor: "#C91F1F", // Border color on hover for error state
    color: "#C91F1F", // Text color on hover for error state
    backgroundColor: "#F33030", // Background color on hover for error state (optional)
  },
}),

  // ...(variant === "contained" && color && colorHover && {
  //   borderColor: color,
  //   color: "#ffffff",
  //   backgroundColor: color,
  //   "&:hover": {
  //     color: "#ffffff",
  //     borderColor: colorHover,
  //     backgroundColor: colorHover,
  //   },
  // }),
  ...(variant === "outlined" && {
    borderColor: "#db4178",
    backgroundColor: "transparent",
    color: "#db4178",
    "&:hover": {
      borderColor: "#AD335E",
      color: "#AD335E",
    },
  }),
  ...(variant === "outlined" && color === "secondary" && {
    borderColor: "#46cbe2",
    backgroundColor: "transparent",
    color: "#46cbe2",
    "&:hover": {
      borderColor: "#247785",
      color: "#247785",
    },
  }),
  // ...(variant === "outlined" && color && colorHover && {
  //   borderColor: color,
  //   backgroundColor: "transparent",
  //   color: color,
  //   "&:hover": {
  //     color: colorHover,
  //     borderColor: colorHover,
  //   },
  // }),
  ...(variant === "text" && {
    backgroundColor: "transparent",
    color: "#db4178",
    "&:hover": {
      color: "#db4178",
      backgroundColor: "#FAE9EE",
    },
  }),
  ...(variant === "text" && color === "secondary" && {
      backgroundColor: "transparent",
      color: "#919eab",
      "&:hover": {
        backgroundColor: "#1976d20a",
      },
    }),
}));


const ButtonUni = (props) => {
  return <StyleButtonUni {...props}>{props.children}</StyleButtonUni>;
};

export default ButtonUni;
