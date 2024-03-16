import React, { useState, useEffect } from "react";
import { Controller, useForm, useFieldArray, useWatch } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"; 
import dayjs from 'dayjs';
import { 
  TextField,
  FormControl,
  Select,
  MenuItem,
  Grid,
  Typography
}from "@mui/material";
import { styled } from "@mui/material/styles";

import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";

import ButtonBlue from "../../shared/general/ButtonBlue";
import DrawerCustom from "../../shared/general/Drawer";
import TextFieldTheme from "../../shared/general/TextFieldTheme";
import NumberFormatTheme from "../../shared/general/NumberFormatTheme";
// import { addEducation, updateEducation } from "../../../../../../actions/education";
// import { getEmployeeProfile } from "../../../../../../actions/employee";

const StyledRoot = styled("div")({
  // maxWidth: 550,
  padding: 16,
  "& .GridTopicInput":{
    display:"flex",
    alignItems:"center"
  },
});

const StyledGrid = styled(Grid)({
  // boxSizing: "border-box",
  // display: "flex",
  // flexFlow: "wrap",
  // marginTop: "-16px",
  // marginLeft: "-16px",
  // width: "calc(100% + 16px)",
});

const StyledFooter = styled("div")({
  padding: 16,
  display: "flex",
  justifyContent: "flex-end",
  "& .cancel": {
    marginRight: 8,
  },
});

const StyledTextFieldTheme = styled(TextFieldTheme)({
  marginBottom: 0,
});

const DialogOccupation = (props) => {
  const dispatch = useDispatch();
  const { open, drawerConfig, handleClose, onSubmit } = props;
  // const { result: employeeProfile } = useSelector((state) => state.employeeProfile);
  const { control, handleSubmit, formState:{ errors }, reset} = useForm({
    defaultValues: {
      type: null,
      otherOccupation: null,
      fromDate: null,
      toDate: null,
    },
  });

  const [ checkType, setCheckType ] = useState('')

  const formSubmit = async (values) => {
    console.log(drawerConfig);
    console.log(values);
    let result = {
      ...values,
      fromDate : values.fromDate ? dayjs(values.fromDate).format("YYYY") : null,
      toDate : values.toDate ? dayjs(values.toDate).format("YYYY") : null,
    }
    onSubmit(result)
    handleClose()
  };

  useEffect(() => {
    if(open === true){
      if(drawerConfig.isEdit){
        reset({
          type: drawerConfig.data.type || "",
          otherOccupation: drawerConfig.data.otherOccupation || null,
          fromDate: drawerConfig.data.fromDate || "",
          toDate: drawerConfig.data.toDate || "",
        })
      } else {
        reset({
          type: "",
          otherOccupation: null,
          fromDate: "",
          toDate: "",
        })
      }
    }
  }, [open])

  return (
    <DrawerCustom
      title={drawerConfig.isEdit? "Edit Occupation": "Add Occupation"}
      anchor="right"
      open={open}
      onClose={handleClose}
      PaperProps={{
        sx: {
          width: "100%",
          maxWidth: "500px"
        }
      }}
    >
      <StyledRoot>
        <form onSubmit={handleSubmit(formSubmit)}>
        <StyledGrid container spacing={2}>
        <Grid item xs={12} sm={12}>
            <Typography variant="subtitle2">Type</Typography>
            <Controller
              name="type"
              control={control}
              rules={{
                required : { value : true, message : "กรุณาเลือกประเภทของอาชีพ"},
              }}
              render={({field}) => (
                <StyledTextFieldTheme
                  {...field}
                  select
                  onChange={(e)=>{
                    field.onChange(e.target.value)
                    setCheckType(e.target.value)
                  }}
                  helperText={errors && errors.type && errors.type.message}
                  error={errors && errors.type ? true: false}
                >
                  <MenuItem value="Graphics_Design">Graphics & Design</MenuItem>
                  <MenuItem value="Programming_Tech">Programming & Tech</MenuItem>
                  <MenuItem value="Digital_Marketing">Digital Marketing</MenuItem>
                  <MenuItem value="Writing_Translation">Writing & Translation</MenuItem>
                  <MenuItem value="Video_Animation">Video & Animation</MenuItem>
                  <MenuItem value="Music_Audio">Music & Audio</MenuItem>
                  <MenuItem value="Business">Business</MenuItem>
                  <MenuItem value="Data">Data</MenuItem>
                  <MenuItem value="Photography">Photography</MenuItem>
                  <MenuItem value="AI_Services">AI Services</MenuItem>
                  <MenuItem value="Others">Others</MenuItem>
                </StyledTextFieldTheme>
              )}
            />
          </Grid>
          {checkType === 'Others' &&
          <Grid item xs={12} sm={12}>
            <Typography variant="subtitle2">Occupation Name</Typography>
            <Controller
              name="otherOccupation"
              control={control}
              rules={{
                required : { value : checkType === 'Others', message : "กรุณาระบุประเภทของอาชีพ"},
              }}
              render={({field}) => (
                <StyledTextFieldTheme
                  {...field}
                  helperText={errors && errors.otherOccupation && errors.otherOccupation.message}
                  error={errors && errors.otherOccupation ? true: false}
                />
              )}
            />
          </Grid>
          }
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle2">From</Typography>
            <Controller
              name="fromDate"
              control={control}
              render={({field}) => (
                <LocalizationProvider
                  dateFormats={{
                    year: "yyyy",
                    monthAndYear: "MMMM yyyy",
                  }}
                  dateAdapter={AdapterDateFns}
                >
                  <DatePicker
                    {...field}
                    views={["year"]}
                    inputFormat="yyyy"
                    disableFuture
                    disableMaskedInput
                    openTo="year"
                    value={field.value}
                    onChange={(newValue) => {
                      field.onChange(newValue)
                    }}
                    renderInput={(params) => (
                      <StyledTextFieldTheme
                        {...params}
                        inputProps={{
                          ...params.inputProps,
                          placeholder: "Date",
                        }}
                        onBlur={field.onBlur}
                        helperText={errors && errors.fromDate && errors.fromDate.message}
                        error={errors && errors.fromDate ? true: false}
                      />
                    )}
                  />
                </LocalizationProvider>
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2">To</Typography>
              <Controller
                name="toDate"
                control={control}
                render={({field}) => (
                  <LocalizationProvider
                    dateFormats={{
                      year: "yyyy",
                      monthAndYear: "MMMM yyyy",
                    }}
                    dateAdapter={AdapterDateFns}
                  >
                    <DatePicker
                      {...field}
                      views={["year"]}
                      inputFormat="yyyy"
                      disableFuture
                      disableMaskedInput
                      openTo="year"
                      value={field.value}
                      onChange={(newValue) => {
                        field.onChange(newValue)
                      }}
                      renderInput={(params) => (
                        <StyledTextFieldTheme
                          {...params}
                          inputProps={{
                            ...params.inputProps,
                            placeholder: "Year",
                            // readOnly: true,
                          }}
                          onBlur={field.onBlur}
                          helperText={errors && errors.toDate && errors.toDate.message}
                          error={errors && errors.toDate ? true: false}
                        />
                      )}
                    />
                  </LocalizationProvider>
                )}
              />
            </Grid>

          <Grid item xs={12} container justifyContent="space-between">
            <ButtonBlue className="cancel" onClick={handleClose}>ยกเลิก</ButtonBlue>
            <ButtonBlue variant="contained" type="submit" autoFocus>
              บันทึกข้อมูล
            </ButtonBlue>
          </Grid>
        </StyledGrid>
        </form>
      </StyledRoot>
    </DrawerCustom>
  );
};

export default DialogOccupation;
