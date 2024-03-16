import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function ExpLevelsBox() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={expLevels}
      sx={{ width: 200 }}
      renderInput={(params) => (
        <TextField {...params} label="Experience Level" />
      )}
    />
  );
}

const expLevels = [
  { label: "Beginner" },
  { label: "Intermediate" },
  { label: "Expert" },
];
