import React, { useState } from "react";
import styled from "styled-components";

import ButtonBlue from "../../shared/general/ButtonBlue";

import {
  Container,
  Stack,
  Typography,
  Box,
  Link,
  Divider,
  Paper,
} from "@mui/material";

import TableReceipt from "./tableReceipt";
import BoxDelivery from "./boxDelivery";
import Requirements from "./requirements";
import Activity from "./activity";

const Tab = styled.button`
  font-size: 16px;
  padding: 10px 20px;
  justify-content: "center";
  cursor: pointer;
  opacity: 0.6;
  background: white;
  border: 0;
  outline: 0;
  ${({ active }) =>
    active &&
    `
    border-bottom: 2px solid black;
    opacity: 1;
  `}
`;
const ButtonGroup = styled.div`
  display: flex;
`;

const types = ["ACTIVITY", "DETAILS", "REQUIREMENTS", "DELIVERY"];

const data = [
  // ACTIVITY
  <Stack spacing={2}>
    <Activity />
  </Stack>,

  // DETAILS
  <Stack spacing={1} style={{ marginTop: 18 }}>
    <Stack direction="row" style={{ justifyContent: "space-between" }}>
      <Stack spacing={1}>
        <Link href="#" underline="hover" fontSize={20} color="black">
          Lorem ipsum dolor sit amet....
        </Link>
        <Stack direction="row" spacing={1} style={{ alignItems: "center" }}>
          <Typography variant="body1" color="text.secondary">
            Ordered from
          </Typography>
          <Link href="#" underline="hover" variant="body1">
            iconsmania
          </Link>
          <Divider orientation="vertical" flexItem />
          <Typography variant="body1" color="text.secondary">
            Delivery date
          </Typography>
          <Typography variant="body1">Sep 25, 11:27 PM</Typography>
        </Stack>
      </Stack>
      <Stack
        spacing={0}
        style={{ justifyContent: "center", alignItems: "flex-end" }}
      >
        <Typography fontSize={13}>TOTAL PRICE</Typography>
        <Typography variant="h5">THB 7,281.70</Typography>
      </Stack>
    </Stack>
    <Divider style={{ marginTop: 20, marginBottom: 8 }} />
    <Stack direction="row" spacing={1}>
      <Typography variant="body1" color="text.secondary">
        Order number
      </Typography>
      <Typography variant="body1">#FO71594DEC703</Typography>
    </Stack>
    <Divider style={{ marginTop: 20, marginBottom: 8 }} />
    <Typography variant="body1" style={{ marginBottom: 10 }}>
      20 icons
    </Typography>
    <TableReceipt />
  </Stack>,

  // REQUIREMENTS
  <Stack spacing={2}>
    <Requirements />
  </Stack>,

  // DELIVERY
  <Stack spacing={2}>
    {Array.from(Array(3)).map((_, index) => (
      <BoxDelivery />
    ))}
  </Stack>,
];

function TabForContents() {
  const [active, setActive] = useState(types[0]);
  let info;

  if (active === types[0]) {
    info = data[0];
  } else if (active === types[1]) {
    info = data[1];
  } else if (active === types[2]) {
    info = data[2];
  } else {
    info = data[3];
  }

  return (
    <>
      <ButtonGroup>
        {types.map((type) => (
          <Tab
            key={type}
            active={active === type}
            onClick={() => setActive(type)}
          >
            {type}
          </Tab>
        ))}
      </ButtonGroup>
      <p />
      <Stack spacing={2}> {info}</Stack>
    </>
  );
}

export default TabForContents;
