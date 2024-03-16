import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";

function createData1(name, startTime, endTime) {
  return { name, startTime, endTime };
}

function createData2(name, startTime, endTime) {
  return { name, startTime, endTime };
}

const rows1 = [createData1("08/18/2014", "09:11 PM", "11:30 PM")];
const rows2 = [createData2("09/28/2014", "10:00 PM", "12:30 PM")];

export default function DetailsTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Start Date</TableCell>
            <TableCell align="right">Start Time</TableCell>
            <TableCell align="right">End Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows1.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.startTime}</TableCell>
              <TableCell align="right">{row.endTime}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableHead style={{ borderTop: "1px solid rgba(224, 224, 224, 1)" }}>
          <TableRow>
            <TableCell>End Date</TableCell>
            <TableCell align="right">Start Time</TableCell>
            <TableCell align="right">End Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows2.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.startTime}</TableCell>
              <TableCell align="right">{row.endTime}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
