import React, { useEffect, useState, Fragment } from "react";
import { styled } from "@mui/material/styles";
import { Container, Stack, Typography, Box } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CheckBoxRoundedIcon from "@mui/icons-material/CheckBoxRounded";
import CheckBoxOutlineBlankRoundedIcon from "@mui/icons-material/CheckBoxOutlineBlankRounded";

import ButtonGrey from "../../shared/general/ButtonGrey";
import ButtonBlue from "../../shared/general/ButtonBlue";
import ButtonOcean from "../../shared/general/ButtonOcean";

function createData(name, basic, standard, premium) {
  return { name, basic, standard, premium };
}

const rows = [
  createData(
    "Some Functional",
    <CheckBoxOutlineBlankRoundedIcon />,
    <CheckBoxOutlineBlankRoundedIcon />,
    <CheckBoxRoundedIcon />
  ),
  createData(
    "Some Functional",
    <CheckBoxRoundedIcon />,
    <CheckBoxRoundedIcon />,
    <CheckBoxRoundedIcon />
  ),
  createData(
    "Some Functional",
    <CheckBoxRoundedIcon />,
    <CheckBoxRoundedIcon />,
    <CheckBoxRoundedIcon />
  ),
  createData(
    "Some Functional",
    <CheckBoxOutlineBlankRoundedIcon />,
    <CheckBoxRoundedIcon />,
    <CheckBoxRoundedIcon />
  ),
  createData("Delivery Time", "1 day", "7 days", "1 month"),
  createData(
    "Total",
    <Typography style={{ fontSize: "18px" }}>150 ฿</Typography>,
    <Typography style={{ fontSize: "18px" }}>300 ฿</Typography>,
    <Typography style={{ fontSize: "18px" }}>1,000 ฿</Typography>
  ),
  createData(
    "",
    <ButtonOcean style={{ width: 100, height: 40 }} variant="contained">
      Select
    </ButtonOcean>,
    <ButtonOcean style={{ width: 100, height: 40 }} variant="contained">
      Select
    </ButtonOcean>,
    <ButtonOcean style={{ width: 100, height: 40 }} variant="contained">
      Select
    </ButtonOcean>
  ),
];

const StyledBox = styled(Box)({
  border: "1px solid",
  borderColor: "#CFD3D7",
  borderRadius: "12px",
  padding: 35,
  backgroundColor: "#f1f4f9"
});

const ComparePackages = () => {
  return (
    <StyledBox>
      {" "}
      <Typography variant="h6" gutterBottom>
        Compare packages
      </Typography>
      <TableContainer>
        <Table style={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Package</TableCell>
              <TableCell style={{ fontSize: "20px" }} align="center">
                1 Day
              </TableCell>
              <TableCell style={{ fontSize: "20px" }} align="center">
                7 Days
              </TableCell>
              <TableCell style={{ fontSize: "20px" }} align="center">
                1 Month
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.basic}</TableCell>
                <TableCell align="center">{row.standard}</TableCell>
                <TableCell align="center">{row.premium}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </StyledBox>
  );
};

export default ComparePackages;
