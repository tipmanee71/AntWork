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

import ActiveGigs from "./tables/active-gigs";
import PendingApprovalGigs from "./tables/pending-approval-gigs";
import RequiresModGigs from "./tables/requires-mod-gigs";
import DraftGigs from "./tables/draft-gigs";
import DeniedGigs from "./tables/denied-gigs";
import PausedGigs from "./tables/paused-gigs";

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
  "ACTIVE",
  "PENDING APPROVAL",
  "REQUIRES MODIFICATION",
  "DRAFT",
  "DENIED",
  "PAUSED",
];

const data = [
  // ACTIVE
  <Stack spacing={2}>
    <ActiveGigs />
  </Stack>,

  // PENDING APPROVAL
  <Stack spacing={2}>
    <PendingApprovalGigs />
  </Stack>,

  // REQUIRES MODIFICATION
  <Stack spacing={2}>
    <RequiresModGigs />
  </Stack>,

  // DRAFT
  <Stack spacing={2}>
    <DraftGigs />
  </Stack>,

  // DENIED
  <Stack spacing={2}>
    <DeniedGigs />
  </Stack>,

  // PAUSED
  <Stack spacing={2}>
    <PausedGigs />
  </Stack>,
];

function TabForManageGigs() {
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

export default TabForManageGigs;
