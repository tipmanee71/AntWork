import React from 'react';

import {
  Box,
  Dialog,
  DialogContent,
  Divider,
  Typography
} from "@mui/material";

import ButtonBlue from '../shared/general/ButtonBlue';

const DeleteDialog = (props) => {
  let { open, onClose, onConfirm } = props;

  const onClickConfirmHandler = () => {
    onConfirm();
  }

  return (
    <Dialog
      open={open}
      onClose={onClose}
    >
      <DialogContent style={{ width: "320px" }}>
        <Typography variant='h5'>
          <i className="fa-solid fa-triangle-exclamation" style={{ color: "#ff9800", marginRight: "8px" }} />
          ยืนยันการลบ
        </Typography>
        <Divider style={{ margin: "8px 0 16px" }} />
        <Box style={{ paddingLeft: "8px" }}>
          <Typography>คุณต้องการลบใช่หรือไม่</Typography>
          <Box style={{ display: "flex", justifyContent: "flex-end", marginTop: "24px" }}>
            <ButtonBlue style={{ marginRight: "16px" }} onClick={onClose}>ยกเลิก</ButtonBlue>
            <ButtonBlue variant="contained" onClick={onClickConfirmHandler}>ยืนยัน</ButtonBlue>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteDialog;