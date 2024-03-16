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

const DialogExperience = (props) => {
  const dispatch = useDispatch();
  const { open, drawerConfig, handleClose, onSubmit } = props;
  // const { result: employeeProfile } = useSelector((state) => state.employeeProfile);
  const { control, handleSubmit, formState:{ errors }, getValues, reset} = useForm({
    defaultValues: {
      fromYear: null,
      endYear: null,
      degree: null,
      university: "",
      faculty: "",
      major: "",
      gpa: "",
    },
  });

  const formSubmit = async (values) => {
    let result = {
      ...values,
      fromYear : values.fromYear ? dayjs(values.fromYear).format("YYYY") : null,
      endYear : values.endYear ? dayjs(values.endYear).format("YYYY") : null,
      degree : values.degree === "" ? null : values.degree ,
      university : values.university === "" ? null : values.university ,
      faculty : values.faculty === "" ? null : values.faculty ,
      major : values.major === "" ? null : values.major ,
      gpa : values.gpa === "" ? null : values.gpa ,
    }
    onSubmit(result)
    handleClose()
  };

  useEffect(() => {
    if(open === true){
      if(drawerConfig.isEdit){
        reset({
          fromYear: drawerConfig.data.fromYear? new Date(`01-01-${drawerConfig.data.fromYear}`): null,
          endYear: drawerConfig.data.endYear? new Date(`01-01-${drawerConfig.data.endYear}`): null,
          degree: drawerConfig.data.degree || "",
          university: drawerConfig.data.university || "",
          faculty: drawerConfig.data.faculty || "",
          major: drawerConfig.data.major || "",
          gpa: drawerConfig.data.gpa || "",
        })
      } else {
        reset({
          fromYear: null,
          endYear: null,
          degree: "",
          university: "",
          faculty: "",
          major: "",
          gpa: "",
        })
      }
    }
  }, [open])

  return (
    <DrawerCustom
      title={drawerConfig.isEdit? "Edit Education": "Add Education"}
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
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2">Start</Typography>
              <Controller
                name="fromYear"
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
                          }}
                          onBlur={field.onBlur}
                          helperText={errors && errors.fromYear && errors.fromYear.message}
                          error={errors && errors.fromYear ? true: false}
                        />
                      )}
                    />
                  </LocalizationProvider>
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2">End</Typography>
              <Controller
                name="endYear"
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
                          helperText={errors && errors.endYear && errors.endYear.message}
                          error={errors && errors.endYear ? true: false}
                        />
                      )}
                    />
                  </LocalizationProvider>
                )}
              />
            </Grid>
          <Grid item xs={12} sm={12}>
            <Typography variant="subtitle2">Education level</Typography>
            <Controller
              name="degree"
              control={control}
              render={({field}) => (
                <StyledTextFieldTheme
                  {...field}
                  select
                  helperText={errors && errors.degree && errors.degree.message}
                  error={errors && errors.degree ? true: false}
                >
                  <MenuItem value="ประถมศึกษา">ประถมศึกษา</MenuItem>
                  <MenuItem value="มัธยมศึกษาตอนต้น">มัธยมศึกษาตอนต้น</MenuItem>
                  <MenuItem value="มัธยมศึกษาตอนปลาย">มัธยมศึกษาตอนปลาย</MenuItem>
                  <MenuItem value="ปวช.">ปวช.</MenuItem>
                  <MenuItem value="ปวส.">ปวส.</MenuItem>
                  <MenuItem value="ปริญญาตรี">ปริญญาตรี</MenuItem>
                  <MenuItem value="ปริญญาโท">ปริญญาโท</MenuItem>
                  <MenuItem value="ปริญญาเอก">ปริญญาเอก</MenuItem>
                </StyledTextFieldTheme>
              )}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <Typography variant="subtitle2">School/Institution/University</Typography>
            <Controller
              name="university"
              control={control}
              rules={{
                required : { value : true, message : "กรุณาระบุสถานะบันการศึกษา"},
              }}
              render={({field}) => (
                <StyledTextFieldTheme
                  {...field}
                  helperText={errors && errors.university && errors.university.message}
                  error={errors && errors.university ? true: false}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <Typography variant="subtitle2">Faculty</Typography>
            <Controller
              name="faculty"
              control={control}
              render={({field}) => (
                <StyledTextFieldTheme
                  {...field}
                  helperText={errors && errors.faculty && errors.faculty.message}
                  error={errors && errors.faculty ? true: false}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <Typography variant="subtitle2">Major</Typography>
            <Controller
              name="major"
              control={control}
              render={({field}) => (
                <StyledTextFieldTheme
                  {...field}
                  helperText={errors && errors.major && errors.major.message}
                  error={errors && errors.major ? true: false}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <Typography variant="subtitle2">GPA</Typography>
            <Controller
              name="gpa"
              control={control}
              render={({field}) => (
                <StyledTextFieldTheme
                  {...field}
                  InputProps={{
                    inputComponent: NumberFormatTheme,
                  }}
                  inputProps={{
                    allowNegative: false,
                    allowLeadingZeros: true,
                    allowEmptyFormatting: false,
                    value: field.value,
                    decimalScale: 2,
                    onValueChange: (values) => {
                      const { value } = values;
                      field.onChange(value)
                    },
                    isAllowed: (values) => {
                      const { value } = values;
                      return value <= 4
                    }
                  }}
                  onChange={()=>{}}
                  helperText={errors && errors.gpa && errors.gpa.message}
                  error={errors && errors.gpa ? true: false}
                />
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

export default DialogExperience;
