import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

import { styled } from "@mui/material/styles";

import CollectionsOutlinedIcon from "@mui/icons-material/CollectionsOutlined";

import { Stack } from "@mui/system";
import { Typography } from "@mui/material";

const StyledStack = styled(Stack)({
  border: `1px dashed #CFD3D7`,
  borderRadius: "12px",
  alignItems: "center",
  justifyContent: "center",
  background: "white",
  height: 100,
  outline: "none",
  padding: 20,
  gap: 10,
  "&:hover": {
    borderColor: "#0046b7",
  },
});

const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

const img = {
  display: "block",
  width: "auto",
  height: "100%",
};

function FileUploader(props) {
  const [files, setFiles] = useState([]);
  const setPreview = (acceptedFiles) => {
    return acceptedFiles.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      })
    );
  };
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    acceptedFiles: ["image/png", "image/jpg", "application/eps"].join(","),
    onDrop: (acceptedFiles) => {
      setFiles((currentState) => [
        ...currentState,
        ...setPreview(acceptedFiles),
      ]);
    },
  });

  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
          // Revoke data uri after image is loaded
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
        />
      </div>
    </div>
  ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, []);

  return (
    <section className="uploader">
      <div
        style={{ width: "35%" }}
        {...getRootProps({ className: "dropzone" })}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <StyledStack spacing={0} style={{ alignItems: "center" }}>
            <Typography style={{ color: "grey" }}>
              Drop the files here ...
            </Typography>
          </StyledStack>
        ) : (
          <StyledStack spacing={0} style={{ alignItems: "center" }}>
            <CollectionsOutlinedIcon
              style={{ fontSize: "50px", color: "grey" }}
            />
            <Stack
              direction="row"
              spacing={0.5}
              style={{ alignItems: "center", marginTop: 0 }}
            >
              <Typography style={{ color: "grey" }}>
                Drag & drop Photos or{" "}
              </Typography>
              <Typography style={{ color: "#007afe" }}>Browse</Typography>
            </Stack>
          </StyledStack>
        )}
      </div>
      <aside style={thumbsContainer}>{thumbs}</aside>
    </section>
  );
}

export default FileUploader;
