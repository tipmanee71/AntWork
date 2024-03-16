import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function DistrictBox() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={district}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="District" />}
    />
  );
}

const district = [
  { label: "Ban Dung" },
  { label: "Ban Ta Khun" },
  { label: "Dan Chang" },
  { label: "Khai Bang Rachan" },
];
