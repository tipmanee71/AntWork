import React, { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Container,
  Box,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  Typography,
  Button,
  TextField,
  Dialog,
  DialogContent,
  DialogActions,
} from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { styled } from "@mui/material/styles";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import { LocalizationProvider, DatePicker, CalendarPicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import dayjs from "dayjs";

import ButtonUni from './ButtonUni'
import TextFieldTheme from "./TextFieldTheme"


const StyledRoot = styled("div")({
  backgroundColor: "#FFFFFF !important",
  "& .MuiContainer-root": {
    paddingBottom: 16,
  },
});
const StyledContentLabel = styled(Typography)({
  fontWeight: 600,
  fontSize: 18,
  "&.head-text-manager": {
    fontWeight: 400,
    "&.error": {
      color: "#f15e5e",
    },
  },
});
const CustomDialogHeader = styled(Box)({
  backgroundColor: "#EB94C0",
  padding: "15px",
  "& .MuiTypography-root": {
    color: "#fff",
    "&:hover": {
      cursor: "pointer",
    },
  },
})

const CustomDialogContent = styled(DialogContent)({
  padding: 0,
  maxWidth: "350px",
  "& .MuiMonthPicker-root": {
    margin: 0,
    "& .PrivatePickersMonth-root": {
      "&:hover": {
        backgroundColor: "transparent",
        fontWeight: "500",
        color: "#EB94C0",
      },
      "&.Mui-selected": {
        backgroundColor: "transparent",
        fontWeight: "500",
        border: "2px solid #EB94C0",
        color: "#EB94C0",
      },
    },
  },
  "& .MuiYearPicker-root": {
    padding: 0,
    "& .PrivatePickersYear-root": {
      flexBasis: "100%",
      "& .PrivatePickersYear-yearButton": {
        width: "100%",
        "&:hover": {
          backgroundColor: "transparent",
          fontWeight: "500",
          color: "#EB94C0",
        },
        "&.Mui-selected": {
          backgroundColor: "transparent",
          fontWeight: "500",
          border: "2px solid #EB94C0",
          color: "#EB94C0",
        }
      },
    },
  },
})

function DatePickerComponent(props) {
  const {
    minDate,
    maxDate,
    date,
    onSubmit,
    helperText, 
    error,
  } = props
  console.log(date);
  const [ open, setOpen ] = useState(false)
  const handleOpenDialog = () =>{
    setOpen(true)
  }
  const handleCloseDialog = () =>{
    setOpen(false)
  }

  const [ selectedDate, setSelectDate ] = useState(date !== undefined ? new Date(date) : new Date())
  const handleDateChange = (date) =>{
    setSelectDate(date)
  }

  const handleSubmit = () =>{
    onSubmit(dayjs(selectedDate).format("YYYY-MM-DD"))
    handleCloseDialog()
  }

  return (
    <Fragment>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          // variant="inline"
          // inputVariant="outlined"
          // inputFormat="MM/YYYY"
          // label={'"เดือน / ปี"'}
          // views={['month','date']}
          inputFormat="dd/MM/yyyy"
          value={date}
          // onChange={handleDateChange}
          readOnly
          renderInput={(params) => (
            <TextFieldTheme 
              {...params}
              style={{ width: "100%" }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton 
                      aria-label="Calendar"
                      onClick={handleOpenDialog}
                    >
                      <CalendarMonthIcon />
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
          )}
          disableOpenPicker
        />
        {error && (
        <Typography variant="caption" style={{ color: "#f44336", marginLeft: "14px" }}>
          {helperText ? helperText : "ข้อผิดพลาด" }
        </Typography>
        )}
        <Dialog
          open={open}
          onClose={handleCloseDialog}
        >
          <CustomDialogContent>
            <CalendarPicker
              minDate={minDate}
              maxDate={maxDate}
              showDaysOutsideCurrentMonth
              onChange={handleDateChange}
              date={selectedDate}
            />
            
          </CustomDialogContent>
          <DialogActions>
            <ButtonUni
              variant="text"
              radius="style2"
              onClick={handleCloseDialog}
            >
              Cancel
            </ButtonUni>
            <ButtonUni
              variant="text"
              radius="style2"
              onClick={handleSubmit}
            >
              OK
            </ButtonUni>
          </DialogActions>
        </Dialog>
      </LocalizationProvider>
    </Fragment>
  );
}

export default DatePickerComponent;
