import React, { useState } from "react";
import styled from "styled-components";

import ButtonBlue from "../../../shared/general/ButtonBlue";

import {
  Container,
  Stack,
  Typography,
  Box,
  Link,
  Divider,
  Paper,
} from "@mui/material";

import PriorityOrders from "./tables/priority-orders";
import ActiveOrders from "./tables/active-orders";
import LateOrders from "./tables/late-orders";
import CancelledOrders from "./tables/cancelled-orders";
import StarredOrders from "./tables/starred-orders";
import CompletedOrders from "./tables/completed-orders";
import DeliveredOrders from "./tables/delivered-orders";

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

const types = [
  "PRIORITY",
  "ACTIVE",
  "LATE",
  "DELIVERRED",
  "COMPLETED",
  "CANCELLED",
  "STARRED",
];

const data = [
  // PRIORITY
  <Stack spacing={2}>
    <PriorityOrders />
  </Stack>,

  // ACTIVE
  <Stack spacing={2}>
    <ActiveOrders />
  </Stack>,

  // LATE
  <Stack spacing={2}>
    <LateOrders />
  </Stack>,

  // DELIVERRED
  <Stack spacing={2}>
    <DeliveredOrders />
  </Stack>,

  // COMPLETED
  <Stack spacing={2}>
    <CompletedOrders />
  </Stack>,

  // CANCELLED
  <Stack spacing={2}>
    <CancelledOrders />
  </Stack>,

  // STARRED
  <Stack spacing={2}>
    <StarredOrders />
  </Stack>,
];

function TabForManageOrders() {
  const [active, setActive] = useState(types[0]);
  let info;

  if (active === types[0]) {
    info = data[0];
  } else if (active === types[1]) {
    info = data[1];
  } else if (active === types[2]) {
    info = data[2];
  } else if (active === types[3]) {
    info = data[3];
  } else if (active === types[4]) {
    info = data[4];
  } else if (active === types[5]) {
    info = data[5];
  } else if (active === types[6]) {
    info = data[6];
  } else {
    info = data[7];
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

export default TabForManageOrders;
