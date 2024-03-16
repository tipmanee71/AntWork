import React from "react";

import { Typography, Stack, Grid, Link } from "@mui/material";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";

import "./style/UploadPic.css";

function UploadPic() {
  const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);

  const handleImageUpload = (e) => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = (e) => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        ref={imageUploader}
        style={{
          display: "none",
        }}
      />
      <div
        style={{
          height: "150px",
          width: "150px",
          border: "none",
          border: "1px dashed grey",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={() => imageUploader.current.click()}
      >
        {" "}
        <Typography color="text.secondary">
          <CameraAltOutlinedIcon fontSize="large" />
        </Typography>
        <img
          ref={uploadedImage}
          placeholder={
            <Typography color="text.secondary">
              <CameraAltOutlinedIcon fontSize="large" />
            </Typography>
          }
          style={{
            height: "150px",
            width: "150px",
            display: "none",
            // border: "1px dashed grey",
            // borderRadius: "50%",
          }}
        />
      </div>
      {/* <Typography
        variant="body1"
        color="text.secondary"
        style={{ marginTop: 10 }}
      >
        Click to add a Profile Picture
      </Typography> */}
    </div>
  );
}

export default UploadPic;
