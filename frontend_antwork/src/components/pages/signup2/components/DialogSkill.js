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
  const { control, handleSubmit, formState:{ errors }, reset} = useForm({
    defaultValues: {
      skillName: null,
      level: null,
    },
  });

  const formSubmit = async (values) => {
    onSubmit(values)
    handleClose()
  };

  useEffect(() => {
    if(open === true){
      if(drawerConfig.isEdit){
        reset({
          skillName: drawerConfig.data.skillName || "",
          level: drawerConfig.data.level || "",
        })
      } else {
        reset({
          skillName: "",
          level: "",
        })
      }
    }
  }, [open])

  return (
    <DrawerCustom
      title={drawerConfig.isEdit? "Edit Skill": "Add Skill"}
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
            <Typography variant="subtitle2">Skill</Typography>
            <Controller
              name="skillName"
              control={control}
              rules={{
                required : { value : true, message : "กรุณาระบุ Skill ของคุณ"},
              }}
              render={({field}) => (
                <StyledTextFieldTheme
                  {...field}
                  helperText={errors && errors.skillName && errors.skillName.message}
                  error={errors && errors.skillName ? true: false}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <Typography variant="subtitle2">Level</Typography>
            <Controller
              name="level"
              control={control}
              rules={{
                required : { value : true, message : "กรุณาเลือกระดับ Skill"},
              }}
              render={({field}) => (
                <StyledTextFieldTheme
                  {...field}
                  select
                  helperText={errors && errors.level && errors.level.message}
                  error={errors && errors.level ? true: false}
                >
                  <MenuItem value="Beginner">Beginner</MenuItem>
                  <MenuItem value="Intermediate">Intermediate</MenuItem>
                  <MenuItem value="Expert">Expert</MenuItem>
                </StyledTextFieldTheme>
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
