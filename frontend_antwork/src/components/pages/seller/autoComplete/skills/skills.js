import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function SkillsBox() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={skills}
      sx={{ width: 200 }}
      renderInput={(params) => (
        <TextField {...params} label="Add Skill" />
      )}
    />
  );
}

const skills = [
  { label: "Coding" },
  { label: "Design" },
];
