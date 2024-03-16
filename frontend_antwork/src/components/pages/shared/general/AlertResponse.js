import React from "react";
import { makeStyles } from "@mui/styles";
import { Snackbar, Typography } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import AlertTitle from '@mui/material/AlertTitle';

const AlertCustom = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const AlertResponse = (props) => {
  const { open, handleClose, alertType, label } = props;
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      style={{
        "& .MuiPaper-root":{
          borderRadius: "8px !important"
        }
      }}
    >
      <AlertCustom
        onClose={handleClose}
        severity={alertType ? alertType : (label ? "info" : "error")}
        style={{ width: "100%" }}
      >
        {!(alertType || label) && (
          <AlertTitle style={{ color: "#FFFFFF" }}>เกิดข้อผิดพลาด</AlertTitle>
        )}
        {label ?
          label :
          (
            alertType === "success"
              ? `บันทึกข้อมูลสำเร็จ`
              : alertType === "error"
              ? `เกิดข้อผิดพลาด...ติดต่อผู้ดูแลระบบ`
              : alertType
          )
        }
      </AlertCustom>
    </Snackbar>
  );
};
export default AlertResponse;
