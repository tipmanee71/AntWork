import React from "react";
import { Divider, Modal, Typography } from "@mui/material";

const ModalCustom = (props) => {
  return(
    <Modal open={props.open} onClose={props.onClose}>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#ffffff',
          borderRadius: 20,
        }}
      >
        <div style={{ padding: 16 }}>
          <Typography>{props.title}</Typography>
        </div>
        <Divider />
        {props.children}
      </div>
    </Modal>
  )
}

export default ModalCustom;