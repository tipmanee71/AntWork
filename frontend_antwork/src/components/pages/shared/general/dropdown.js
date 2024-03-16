import React from "react";
import DropdownMenu from "./DropdownMenu";
import { Typography, Stack, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledDropdown = styled("div")({
  borderTop: "2px solid #ccc",
  borderBottom: "2px solid #ccc",
});

const Dropdown = (props) => {
  return (
    <StyledDropdown>
      <Stack direction="row" spacing={2} style={{ justifyContent: "center" }}>
        {Array.from(Array(7)).map((_, index) => (
          <DropdownMenu />
        ))}
      </Stack>
    </StyledDropdown>
  );
};

export default Dropdown;
