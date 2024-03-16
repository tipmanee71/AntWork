import React, { useState, useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import dayjs from "dayjs";

import {
  Container,
  Grid,
  Paper,
  Typography,
  Divider,
  Box,
  IconButton,
  Card,
  CardMedia,
  CardContent,
  Menu,
  Button,
} from "@mui/material"
import makeStyles from "@mui/styles/makeStyles";
import { styled } from "@mui/material/styles";


import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import ButtonUni from "../ButtonUni";

const StyleCardRoot = styled(Card)({
  display: "flex",
  width: "100%",
  boxShadow: "rgb(90 114 123 / 11%) 0px 7px 30px 0px",
  transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
  borderRadius: 20,
  ["@media only screen and (max-width: 899px)"]: {
    display: "block",
    maxWidth: "300px",
  },
  ["@media only screen and (min-width: 899px)"]: {
    position: "relative",
    height: "auto",
  },
})
const StyleCardMedia = styled(CardMedia)({
  padding: "10px",
  ["@media only screen and (max-width: 899px)"]: {
    padding: "0",
  },
  ["@media only screen and (min-width: 900px)"]: {
    borderRadius: '100%',
    width: "20%",
    marginLeft: "20px",
  },
})
const StyleCardContent = styled(CardContent)({
  // width: "100%",
  ["@media only screen and (min-width: 900px)"]: {
    marginLeft: "20px",
    width: "70%",
    // minHeight: "300px",
  },
})
const StyleLabelWraper = styled(Box)({
  overflowWrap: "anywhere",
  "& .title,.titleDesc": {
    fontWeight: "700"
  },
  "& .title": {
    fontSize: "1.15rem",
    // marginTop: "20px",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  },
  "& .titleDesc": {
    fontSize: "0.95rem",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    color: "#00000080",
  },
})

const CardWork = (props) => {
  const {
    data,
    labelButton,
    historyClick,
  } = props
  const history = useHistory();
  console.log(props);

  return (
    <Fragment>
      {data &&
      <StyleCardRoot>
        <StyleCardMedia
          component="img"
          image={data.imgurl}
          title="SkillDeatil Image"
        />
        <StyleCardContent>
          <Grid container style={{ height: "100%" }}>
            <Grid item xs={12} md={labelButton ? 9 : 12}>
              <Box style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <Box>
                  <StyleLabelWraper>
                    <Typography
                      variant="subtitle1"
                      className="title"
                    >
                      {data.positionName ? data.positionName : 'null'}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      className="titleDesc"
                    >
                      {data.companyName ? data.companyName : 'null'}
                    </Typography>
                  </StyleLabelWraper>
                </Box>
                <Box>
                  {data.workType &&
                  <StyleLabelWraper style={{ display: "flex", alignItems: "center" }}>
                    <WorkOutlineOutlinedIcon />
                    <Typography variant="caption" style={{ marginLeft: "16px" }}>{data.workType === "pastTime" ? 'งานพาร์ทไทม์' : 'งานประจำ' }</Typography>
                  </StyleLabelWraper>
                  }
                  {data.location &&
                  <StyleLabelWraper style={{ display: "flex", alignItems: "center" }}>
                    <PlaceOutlinedIcon />
                    <Typography variant="caption" style={{ marginLeft: "16px" }}>{data.location}</Typography>
                  </StyleLabelWraper>
                  }
                  {data.price && data.hiringType === 'Daily' &&
                  <StyleLabelWraper style={{ display: "flex", alignItems: "center" }}>
                    <PaidOutlinedIcon />
                    <Typography variant="caption" style={{ marginLeft: "16px" }}>{`${data.price} บาท/วัน`}</Typography>
                  </StyleLabelWraper>
                  }
                  {data.price && data.hiringType === 'Monthly' &&
                  <StyleLabelWraper style={{ display: "flex", alignItems: "center" }}>
                    <PaidOutlinedIcon />
                    <Typography variant="caption" style={{ marginLeft: "16px" }}>{`${data.price} บาท/เดือน`}</Typography>
                  </StyleLabelWraper>
                  }
                </Box>
              </Box>
            </Grid>
            {labelButton ? (
            <Grid item xs={12} md={3} display={"flex"} alignItems={"end"}>
              <ButtonUni
                variant="contained"
                color="secondary"
                fullWidth
                onClick={()=>history.push(historyClick)}
              >
                ดูข้อมูลรายละเอียด
              </ButtonUni>
            </Grid>
            ) : (
              null
            )}
          </Grid>
        </StyleCardContent>
      </StyleCardRoot>
      }
    </Fragment>
  );
};

export default CardWork;
