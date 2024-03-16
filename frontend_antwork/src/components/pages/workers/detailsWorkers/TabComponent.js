import React, { useState } from "react";
import styled from "styled-components";

import ButtonBlue from "../../shared/general/ButtonBlue";
import ButtonOcean from "../../shared/general/ButtonOcean";

import { Container, Stack, Typography, Box } from "@mui/material";

import { Link, withRouter, NavLink } from "react-router-dom";

const Tab = styled.button`
  font-size: 20px;
  padding: 10px 20px;
  justify-content: "center";
  cursor: pointer;
  opacity: 0.6;
  background: #f1f4f9;
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

const types = ["1 Day", "7 Days", "1 Month"];
const prices = ["150 ฿", "300 ฿", "1,000 ฿"];
const data = [
  <Stack spacing={2}>
    <Stack direction="row" style={{ justifyContent: "space-between" }}>
      <Typography variant="h6">{types[0]}</Typography>
      <Typography variant="h6">{prices[0]}</Typography>
    </Stack>
    <Typography paragraph variant="body1">
      {" "}
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
      molestiae quas vel sint commodi repudiandae consequuntur voluptatum
      laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga
      praesentium optio, eaque rerum!{" "}
    </Typography>
  </Stack>,
  <Stack spacing={2}>
    <Stack direction="row" style={{ justifyContent: "space-between" }}>
      <Typography variant="h6">{types[1]}</Typography>
      <Typography variant="h6">{prices[1]}</Typography>
    </Stack>
    <Typography paragraph variant="body1">
      {" "}
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
      molestiae quas vel sint commodi repudiandae consequuntur voluptatum
      laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga
      praesentium optio, eaque rerum!{" "}
    </Typography>
  </Stack>,
  <Stack spacing={2}>
    <Stack direction="row" style={{ justifyContent: "space-between" }}>
      <Typography variant="h6">{types[2]}</Typography>
      <Typography variant="h6">{prices[2]}</Typography>
    </Stack>
    <Typography paragraph variant="body1">
      {" "}
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
      molestiae quas vel sint commodi repudiandae consequuntur voluptatum
      laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga
      praesentium optio, eaque rerum!{" "}
    </Typography>
  </Stack>,
];

function TabGroup() {
  const [active, setActive] = useState(types[0]);
  let paragraph;

  if (active === types[0]) {
    paragraph = data[0];
  } else if (active === types[1]) {
    paragraph = data[1];
  } else {
    paragraph = data[2];
  }

  return (
    <>
      <ButtonGroup style={{ backgroudColor: "#CAEBF1" }}>
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
      <Stack spacing={2} style={{ alignItems: "center" }}>
        {" "}
        {paragraph}
        <ButtonOcean
          to="/hire"
          component={Link}
          variant="contained"
          style={{ width: 300, height: 50 }}
        >
          Continue ({active})
        </ButtonOcean>
      </Stack>
    </>
  );
}

export default TabGroup;
