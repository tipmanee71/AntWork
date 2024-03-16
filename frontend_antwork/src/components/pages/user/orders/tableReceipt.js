import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import {
  Container,
  Stack,
  Typography,
  Box,
  Link,
  Divider,
  Paper,
} from "@mui/material";

import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";


function createData(name, first, second, third) {
  return { name, first, second, third };
}

const headers = [createData("ITEM", "QTY.", "DURATION", "PRICE")];

const rows = [
  createData("design custom icon set", "1", "5 days", "THB 6,902.09"),
];

const footers = [
  createData("SUBTOTAL", "", "", "THB 6,902.09"),
  createData("SERVICE FEE", "", "", "THB 379.61"),
  createData("TOTAL", "", "", "THB 7,281.70"),
];

export default function TableReceipt() {
  return (
    <TableContainer>
      <Table style={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{ backgroundColor: "#F4F4F4" }}>
              <Stack
                direction="row"
                spacing={1}
                style={{ alignItems: "center" }}
              >
                <Typography>
                  <InsertDriveFileIcon />
                </Typography>
                <Typography fontSize={14}>YOUR ORDER</Typography>
                <Typography fontSize={14} color="text.secondary">
                  <i>Sep 15, 10:18 PM</i>
                </Typography>
              </Stack>
            </TableCell>
            <TableCell
              style={{ backgroundColor: "#F4F4F4" }}
              align="center"
            ></TableCell>
            <TableCell
              style={{ backgroundColor: "#F4F4F4" }}
              align="center"
            ></TableCell>
            <TableCell style={{ backgroundColor: "#F4F4F4" }} align="right">
              <Link href="#" underline="always" fontSize={14}>
                Download Invoice
              </Link>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {headers.map((header) => (
            <TableRow
              key={header.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              style={{ backgroundColor: "#F4F4F4" }}
            >
              <TableCell
                component="th"
                scope="row"
                style={{ fontWeight: "bold" }}
              >
                {header.name}
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                {header.first}
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                {header.second}
              </TableCell>
              <TableCell align="right" style={{ fontWeight: "bold" }}>
                {header.third}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{
                "&:last-child td, &:last-child th": {
                  border: 0,
                  //   borderTop: 1,
                  //   borderBottom: 1,
                },
              }}
              style={{ backgroundColor: "#FFFFFF" }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.first}</TableCell>
              <TableCell align="center">{row.second}</TableCell>
              <TableCell align="right">{row.third}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableBody>
          {footers.map((footer) => (
            <TableRow
              key={footer.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              style={{ backgroundColor: "#F4F4F4" }}
            >
              <TableCell
                component="th"
                scope="row"
                style={{ fontWeight: "bold" }}
              >
                {footer.name}
              </TableCell>
              <TableCell align="center">{footer.first}</TableCell>
              <TableCell align="center">{footer.second}</TableCell>
              <TableCell align="right">{footer.third}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
