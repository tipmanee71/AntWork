import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import "./dropzone.css";
import { 
  Button, 
  Fab, 
  IconButton,
  Typography,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DeleteIcon from "@mui/icons-material/Delete";
import { styled } from "@mui/material/styles";

const thumb = {
  display: "inline-flex",
  justifyContent: "center",
  width: "100%",
};



function DropZone(props) {
  const { dropwidth, dropheight, width, height, childToParent, oldfile, error, helperText } = props
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/jpeg , image/png",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
      })));
      childToParent(acceptedFiles[0]);
    },
  });

  const thumbs = (files.length > 0) ? 
    (files.map((file, index) => (
      <div style={thumb} key={file.name}>
        <div style={{ width: width? width:"100%", height: height? height:"100%", position: "relative"}}>
          <img src={file.preview} alt="" style={{ width: "100%", height: "100%" }} />
          <div 
            style={{ 
              position: "absolute",
              right: 0,
              top: 0,
              transform: "translate(50%, -50%)",
            }}
          >
            <Fab
              size="small"
              style={{
                backgroundColor: "#d32f2f",
                color: "#fff"
              }}
              variant="contained"
              onClick={()=>remove(index)}
            >
              <DeleteIcon />
            </Fab>
          </div>
        </div>
      </div>
      ))
    ) : ( oldfile && oldfile.map((file, index) => (
      <div style={thumb}>
        <div style={{ width: width? width:"100%", position: "relative"}}>
          <img src={file} alt="" style={{ width: "100%" }} />
          <div 
            style={{ 
              position: "absolute",
              right: 0,
              top: 0,
              transform: "translate(50%, -50%)",
            }}
          >
            <Fab
              size="small"
              style={{
                backgroundColor: "#d32f2f",
                color: "#fff"
              }}
              variant="contained"
              onClick={()=>remove(index)}
            >
              <DeleteIcon />
            </Fab>
          </div>
        </div>
      </div>
    )));

  const remove = (file) => {
    const newFiles = [...files];
    newFiles.splice(newFiles.indexOf(file), 1);
    setFiles(newFiles);
    childToParent(newFiles);
  };

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );
  // style={{ width: width? width: "80%", height: height? height:"100%", position: "relative"}} 
  return (
    <div>
      {files.length === 0 ? (
        <div style={{ width: dropwidth? dropwidth: "80%", height: dropheight? dropheight:"100%"}} /*style={dropContainer}*/ {...getRootProps({ className: "dropzone" })}>
          <input {...getInputProps()} />
          <div>
            <p style={ error ? {margin:'auto',padding:'10px', color: "#f44336"} : {margin:'auto',padding:'10px'} }>
              Drag 'n' drop some files here, or click to select files
            </p>
            {error && (
              <Typography variant="caption" style={{ color: "#f44336", marginLeft: "14px" }}>
                {helperText ? helperText : "ข้อผิดพลาด" }
              </Typography>
            )}
          </div>
        </div>
      ) : (
        <div>{thumbs}</div>
      )}
      {/* <section>
      {files.length === 0 ? (
        <div style={dropContainer} {...getRootProps({ className: "dropzone" })}>
          <input {...getInputProps()} />
          <div>
            <p style={{ padding: "10px", margin: "auto"}}>
              Drag 'n' drop some files here, or click to select files
            </p>
          </div>
        </div>
      ) : (
        <div>
          {/* <div style={dropContainer}>
            <div style={thumbsContainer}>{thumbs}</div>
          </div>
        // </div>
      )}
    </section> */}

    {/* <button
      style={{
        backgroundColor: props.bgColor,
        border: "none",
        boxShadow: "none",
        marginTop: "10px",
        borderRadius: "5px",
      }}
      variant="contained"
      onClick={remove(1)}
    >
      <DeleteIcon
        style={{ fontSize: 35, color: "#757575", backgroundColor: "none" }}
      />
    </button> */}
    </div>
    
  );
}
export default DropZone;
