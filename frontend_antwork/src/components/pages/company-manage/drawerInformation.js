import React, { useEffect, useState } from "react";
import { Grid, MenuItem, styled } from "@mui/material";
import DrawerCustom from "../shared/general/Drawer";
import ButtonBlue from "../shared/general/ButtonBlue";
import { Controller, useForm } from "react-hook-form";
import TextFieldTheme from "../shared/general/TextFieldTheme";
import { useDispatch, useSelector } from "react-redux";
 import { getCompanyManage, updateCompanyManage } from "../../../actions/company";
 import { getAllBusinessGroup } from "../../../actions/business.js";

const StyledRoot = styled("div")({
  width: 450,
  padding: 16,
  "& i": {
    marginRight: 8,
    fontSize: 14,
  },
  "& .part-action": {
    paddingTop: 36,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& .cancel-button": {
      color: "#9e9e9e",
      borderColor: "#9e9e9e",
    }
  }
})

const DrawerInformation = (props) => {
  const { open, onClose, company } = props;

  const dispatch = useDispatch();
  //const { result: businessGroupStore } = useSelector(state => state.businessGroups)

  const [businessGroups, setBusinessGroups] = useState([]);

  const { control, handleSubmit, formState: { errors, dirtyFields } } = useForm({
    defaultValues: {
      idBusinessGroup: (company && company.idBusinessGroup) || "",
      companySize: (company && company.companySize) || "",
      companyAbout: (company && company.companyAbout) || "",
      companyBenefits: (company && company.companyBenefits) || "",
    }
  })

  const onSubmit = async (formData) => {
    const changedForm = {};
    
    Object.keys(dirtyFields).forEach((key) => {
      changedForm[key] = formData[key];
    });

    if(Object.keys(dirtyFields).length === 0){
      onClose();
      return;
    }

    const response = await dispatch(updateCompanyManage(changedForm));
    if (response.status === 200){
      dispatch(getCompanyManage());
      onClose();
    }

  }

  useEffect(() => {
    dispatch(getAllBusinessGroup());
  }, [])
  
  // useEffect(() => {
  //   if(businessGroupStore != null){
  //     setBusinessGroups([...businessGroupStore])
  //   }
  // }, [businessGroupStore])
  
  return(
    <DrawerCustom
      open={open}
      title="แก้ไขรายละเอียด"
      anchor="right"
    >
      <StyledRoot>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Controller
                control={control}
                name="idBusinessGroup"
                render={({field})=>(
                  <TextFieldTheme
                    {...field}
                    label="กลุ่มธุรกิจ"
                    select
                    helperText={errors && errors.idBusinessGroup && errors.idBusinessGroup.message}
                    error={errors && errors.idBusinessGroup ? true: false}
                  >
                    {businessGroups.map((b, index) => (
                      <MenuItem key={`business_group_${index}`} value={b.idBusinessGroup}>{b.businessGroupName}</MenuItem>
                    ))}
                  </TextFieldTheme>
                )}
              />
            </Grid>

            <Grid item xs={12}>
              <Controller
                control={control}
                name="companySize"
                rules={{
                  // required: {value: true, message: "กรุณากรอกขนาดองค์กร"}
                }}
                render={({field})=>(
                  <TextFieldTheme
                    {...field}
                    label="ขนาดองค์กร"
                    select
                    helperText={errors && errors.companySize && errors.companySize.message}
                    error={errors && errors.companySize ? true: false}
                  >
                    <MenuItem value="small">ขนาดเล็ก (น้อยกว่า 50 คน)</MenuItem>
                    <MenuItem value="medium">ขนาดกลาง (51-200 คน)</MenuItem>
                    <MenuItem value="large">ขนาดใหญ่ (มากกว่า 200 คน)</MenuItem>
                  </TextFieldTheme>
                )}
              />
            </Grid>

            <Grid item xs={12}>
              <Controller
                control={control}
                name="companyAbout"
                rules={{
                  // required: {value: true, message: "กรุณากรอกเกี่ยวกับบริษัท"},
                  // minLength: {value: 100, message: "กรุณากรอกอย่างน้อย 100 ตัวอักษร"}
                }}
                render={({field})=>(
                  <TextFieldTheme
                    {...field}
                    label="เกี่ยวกับบริษัท"
                    multiline
                    rows={5}
                    helperText={errors && errors.companyAbout && errors.companyAbout.message}
                    error={errors && errors.companyAbout ? true: false}
                  />
                )}
              />
            </Grid>

            <Grid item xs={12}>
              <Controller
                control={control}
                name="companyBenefits"
                rules={{
                  // required: {value: true, message: "กรุณากรอกสิทธิประโยชน์"}
                  // minLength: {value: 100, message: "กรุณากรอกอย่างน้อย 100 ตัวอักษร"}
                }}
                render={({field})=>(
                  <TextFieldTheme
                    {...field}
                    label="สิทธิประโยชน์"
                    multiline
                    rows={5}
                    helperText={errors && errors.companyBenefits && errors.companyBenefits.message}
                    error={errors && errors.companyBenefits ? true: false}
                  />
                )}
              />
            </Grid>
            
          </Grid>

          <div className="part-action">
            <ButtonBlue className="cancel-button" variant="outlined" onClick={onClose}><i className="fa-regular fa-x"></i>ยกเลิก</ButtonBlue>
            <ButtonBlue type="submit" variant="contained"><i className="fa-regular fa-check"></i>แก้ไข</ButtonBlue>
          </div>
        </form>
      </StyledRoot>
    </DrawerCustom>
  )
}

export default DrawerInformation;