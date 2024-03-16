import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function CategoryBox() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={category}
      sx={{ width: 300 }}
      renderInput={(params) => (
        <TextField {...params} label="Category" />
      )}
    />
  );
}

const category = [
  { label: "Graphics & Design" },
  { label: "Digital Marketing" },
  { label: "Writing & Translation" },
  { label: "Video & Animation" },
  { label: "Music & Audio" },
  { label: "Programming & Tech" },
  { label: "Data" },
  { label: "Business" },
  { label: "Lifestyle" },
  { label: "Sitemap" },
];
