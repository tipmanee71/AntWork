import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function LanguagesBox() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={languages}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Language" />}
    />
  );
}

const languages = [{ label: "English" }, { label: "Thai" }];
