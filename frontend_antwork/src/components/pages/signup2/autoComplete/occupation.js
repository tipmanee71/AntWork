import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function OccupationBox() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={occupation}
      sx={{ width: 200 }}
      renderInput={(params) => <TextField {...params} label="Your Occupation" />}
    />
  );
}

const occupation = [{ label: "Digital Marketing" }, { label: "Graphic & Design" }];
