import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function ToYearBox() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={years}
      sx={{ width: 90 }}
      renderInput={(params) => <TextField {...params} label="To" />}
    />
  );
}

const years = [
  { label: "2000" },
  { label: "2001" },
  { label: "2002" },
  { label: "2003" },
  { label: "2004" },
  { label: "2005" },
  { label: "2006" },
  { label: "2007" },
  { label: "2008" },
  { label: "2009" },
  { label: "2010" },
  { label: "2011" },
  { label: "2012" },
  { label: "2013" },
  { label: "2014" },
  { label: "2015" },
];
