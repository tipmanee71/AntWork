import React from "react"
import { styled, Typography } from "@mui/material";
import ModalCustom from "../shared/general/Modal";
import ButtonBlue from "../shared/general/ButtonBlue";

const StyledRoot = styled("div")({
  padding: 16,
  // width: "100%",
  width: 500,
  "& .modal-footer": {
    paddingTop: 24,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& .confirm-button": {
      color: "#ffffff",
      backgroundColor: "#d32f2f",
      borderColor: "#d32f2f",
      // borderRadius: 19,
      // "& i": {
      //   fontSize: 12,
      // },
      "&:hover": {
        borderColor: "#d32f2f",
        backgroundColor: "#d32f2f",
        // borderRadius: 19,
      }
    }
  }
})

const ModalConfirmDeleteBranch = (props) => {

  const { open, onClose, onConfirm } = props;

  return (
    <ModalCustom
      title="ลบสาขา"
      open={open}
      onClose={onClose}
    >
    <StyledRoot>
      <Typography>ยืนยันลบสาขา ?</Typography>
      <div className="modal-footer">
        <ButtonBlue variant="outlined" onClick={onClose}>ยกเลิก</ButtonBlue>
        <ButtonBlue className="confirm-button" variant="contained" color="error" onClick={onConfirm}>ลบ</ButtonBlue>
      </div>
    </StyledRoot>
    </ModalCustom>
  )
}

export default ModalConfirmDeleteBranch;