import React from "react";
import { styled, Typography } from "@mui/material";

const StyledRoot = styled("div")({
  position: "relative",
  "& .progress-bar": {
    height: 10,
    borderRadius: 5,
    boxShadow: "rgb(90 114 123 / 11%) 0px 7px 30px 0px",
    overflow: "hidden",
    "& .progress-fill": {
      height: "inherit",
      borderRadius: "inherit",
      backgroundColor: "#007afd",
    }
  },
  "& span": {
    position: "absolute",
    top: -25,
    transform: "translateX(-100%)",
  }
})

const ProgressBarProfile = (props) => {
  const { progressValue } = props;

  return(
    <StyledRoot>
      <span style={{left: `${progressValue}%`}}>{`${progressValue}%`}</span>
      <div className="progress-bar">
        <div className="progress-fill" style={{width: `${progressValue}%`}}></div>
      </div>
    </StyledRoot>
  )
}

export default ProgressBarProfile;