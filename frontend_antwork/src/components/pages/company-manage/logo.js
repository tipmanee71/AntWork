import React, { useState } from "react";
import { Box, IconButton, styled, Typography } from "@mui/material";
import Dropzone from "react-dropzone";
import AddImageIcon from "../../pages/assets/add_image.png";
import ModalCrop from "../shared/general/ModelCrop";
import DeleteDialog from "./DeleteDialog";

const StyledRoot = styled(Box)({
  "& .dropzone": {
    cursor: "pointer",
    flexShrink: 0,
    width: "100%",
    height: 144,
    boxSizing: "border-box",
    backgroundColor: "#F9F9FB",
    border: "1px solid #D0D0D0",
    borderStyle: "dashed",
    borderRadius: 8,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& .inner-dropzone": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      "& img": {
        width: 72,
        height: 72,
      }
    }
  },
  "& .image-wrap": {
    textDecoration: "none",
    color: "inherit",
    position: "relative",
    cursor: "pointer",
    flexShrink: 0,
    overflow: "hidden",
    width: "100%",
    height: 144,
    boxSizing: "border-box",
    border: "1px solid #D0D0D0",
    borderRadius: 8,
    display: "flex",
    flexDirection: "column",
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "contain",
    },
    "& .icon-part": {
      flexGrow:1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "& i": {
        fontSize: 56,
        color: "#D0D0D0",
        margin: 0,
      }
    },
    "& .delete": {
      position: "absolute",
      top: 0,
      right: 0,
      padding: 8,
      "& i": {
        fontSize: 16,
        margin: 0,
      }
    }
  }
})

const Logo = (props) => {
  const { data } = props;
  const [companyImageURL, setCompanyImageURL] = useState(data);
  const [modalAvatarCropState, setModalAvatarCropState] = useState({
    isOpen: false,
    image: null,
  });
  const [isOpenConfirmDeleteDialog, setIsOpenConfirmDeleteDialog] = useState(false);

  return (
    <StyledRoot>
      <Typography marginBottom="8px" fontSize={12} color="text.third">
        โลโก้ของบริษัท
      </Typography>

      {!companyImageURL && (
        <Dropzone
          onDrop={(acceptedFiles, rejectedFiles) => {
            if (acceptedFiles.length > 0) {
              setModalAvatarCropState({
                isOpen: true,
                image: URL.createObjectURL(acceptedFiles[0]),
              });
            }
          }}
          accept="image/jpeg, image/png"
          maxSize={10485760}
        >
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps({ className: "dropzone" })}>
              <Box>
                <input {...getInputProps()} />
                <Box className="inner-dropzone">
                  <img alt="add" src={AddImageIcon} />
                </Box>
              </Box>
            </div>
          )}
        </Dropzone>
      )}

      {companyImageURL && (
        <Box className="image-wrap">
          <img src={companyImageURL} alt="witnessSignature" />
          <IconButton
            className="delete"
            onClick={(e) => {
              e.preventDefault();
              setIsOpenConfirmDeleteDialog(true);
            }}
          >
            <i className="fa-solid fa-trash-can"></i>
          </IconButton>
        </Box>
      )}

      {modalAvatarCropState.isOpen && (
        <ModalCrop
          title="อัพโหลดโลโก้ของบริษัท"
          open={modalAvatarCropState.isOpen}
          onClose={() => {
            setModalAvatarCropState({ isOpen: false, image: null });
          }}
          image={modalAvatarCropState.image}
          // onConfirm={onComfirmCropAvatar} // Removed backend functionality
        />
      )}

      {isOpenConfirmDeleteDialog && (
        <DeleteDialog
          open={isOpenConfirmDeleteDialog}
          onClose={() => {
            setIsOpenConfirmDeleteDialog(false);
          }}
          // onConfirm={onConfirmDelete} // Removed backend functionality
        />
      )}
    </StyledRoot>
  );
};

export default Logo;
