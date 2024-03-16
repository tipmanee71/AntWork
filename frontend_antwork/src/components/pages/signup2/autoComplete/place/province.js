import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function ProvinceBox() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={province}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Province" />}
    />
  );
}

const province = [
  { label: "Buriram" },
  { label: "Khon Kaen" },
  { label: "Rayong" },
  { label: "Nakhon Phanom" },
];
