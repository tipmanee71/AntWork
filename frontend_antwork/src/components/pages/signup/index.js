import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import {
  Typography,
  Container,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import Seller from "./join-seller";
import Buyer from "./join-buyer";


const StyledRoot = styled("div")({
  backgroundColor: "#FFFFFF !important",
});

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  marginTop: 24,
  "& .MuiToggleButtonGroup-grouped": {
    margin: theme.spacing(0.5),
    color: "#007afe",
    border: "1px solid #007afe",
    backgroundColor: "#FFFFFF",
    "&:hover": {
      borderColor: "#0046b7",
      backgroundColor: "#0046b7",
      color: "#FFFFFF",
    },
    "&.Mui-selected": {
      color: "#FFFFFF",
      backgroundColor: "#007aff",
      "&:hover": {
        borderColor: "#0046b7",
        backgroundColor: "#0046b7",
        color: "#FFFFFF",
      },
    },
    "&.Mui-disabled": {
      border: 0,
    },
    "&:not(:first-of-type)": {
      borderRadius: 8,
      borderLeft: "1px solid #007aff",
    },
    "&:first-of-type": {
      borderRadius: 8,
    },
  },
}));

const Home = (props) => {
  const today = dayjs().toDate();
  const dispatch = useDispatch();

  return (
    <StyledRoot className={`page`}>
      <Container maxWidth="lg">
        <Fragment>
          {(String(props.match.params.type).toLocaleLowerCase() === "seller") && (
            <Seller />
          )}
          {(String(props.match.params.type).toLocaleLowerCase() === "buyer") && (
            <Buyer />
          )}
        </Fragment>
      </Container>
    </StyledRoot>
  );
};

export default Home;
