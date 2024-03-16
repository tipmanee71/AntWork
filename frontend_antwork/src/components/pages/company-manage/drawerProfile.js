import React from "react";
import { Grid, styled } from "@mui/material";
import DrawerCustom from "../shared/general/Drawer";
import ButtonBlue from "../shared/general/ButtonBlue";
import { Controller, useForm } from "react-hook-form";
import TextFieldTheme from "../shared/general/TextFieldTheme";
import NumberFormat from "react-number-format";

import { useDispatch } from "react-redux";
import { getCompanyManage, updateCompanyManage } from "../../../actions/company";

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

const DrawerProfile = (props) => {
  const { open, onClose, company } = props;

  const dispatch = useDispatch();

  const { control, handleSubmit, formState: { errors, dirtyFields } } = useForm({
    defaultValues: {
      companyCode: (company && company.companyCode) || "",
      companySocialSecurityAccount: (company && company.companySocialSecurityAccount) || "",
      authorizedSignatureOneName: company.authorizedSignatureOneName || "",
      authorizedSignatureOnePosition: company.authorizedSignatureOnePosition || "",
      authorizedSignatureTwoName: company.authorizedSignatureTwoName || "",
      authorizedSignatureTwoPosition: company.authorizedSignatureTwoPosition || "",
      witnessSignatureName: company.witnessSignatureName || "",
      witnessSignaturePosition: company.witnessSignaturePosition || "",
  
    }
  })

  const onSubmit = async (formData) => {
    const changedForm = {};

    Object.keys(dirtyFields).forEach((key) => {
      if(formData[key] === ""){
        changedForm[key] = null
      } else {
        changedForm[key] = formData[key];
      }
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

  return(
    <DrawerCustom
      open={open}
      title="แก้ไขบริษัท"
      anchor="right"
    >
      <StyledRoot>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Controller
                control={control}
                name="companyCode"
                render={({field})=>(
                  <TextFieldTheme
                    {...field}
                    label="รหัสบริษัท"
                    helperText={errors && errors.companyCode && errors.companyCode.message}
                    error={errors && errors.companyCode ? true: false}
                  />
                )}
              />
            </Grid>

            <Grid item xs={12}>
              <Controller
                control={control}
                name="companySocialSecurityAccount"
                rules={{
                  minLength: {value: 13, message: "กรุณากรอกเลขประจำตัวผู้เสียภาษี 13 หลัก"}
                }}
                render={({field})=>(
                  <NumberFormat
                    {...field}
                    format="# #### ##### ## #"
                    allowNegative={false}
                    customInput={TextFieldTheme}
                    label="เลขประจำตัวผู้เสียภาษี"
                    onValueChange={(values) => {
                      const {formattedValue, value, floatValue} = values;
                      field.onChange(value)
                    }}
                    helperText={errors && errors.companySocialSecurityAccount && errors.companySocialSecurityAccount.message}
                    error={errors && errors.companySocialSecurityAccount ? true: false}
                    onChange={()=>{}}
                  />
                )}
              />
            </Grid>

            <Grid item xs={12}>
              <Controller
                control={control}
                name="authorizedSignatureOneName"
                render={({field})=>(
                  <TextFieldTheme
                    {...field}
                    label="ชื่อผู้มีอำนาจของบริษัท คนที่ 1"
                    helperText={errors && errors.authorizedSignatureOneName && errors.authorizedSignatureOneName.message}
                    error={errors && errors.authorizedSignatureOneName ? true: false}
                  />
                )}
              />
            </Grid>

            <Grid item xs={12}>
              <Controller
                control={control}
                name="authorizedSignatureOnePosition"
                render={({field})=>(
                  <TextFieldTheme
                    {...field}
                    label="ตำแหน่งผู้มีอำนาจของบริษัท คนที่ 1"
                    helperText={errors && errors.authorizedSignatureOnePosition && errors.authorizedSignatureOnePosition.message}
                    error={errors && errors.authorizedSignatureOnePosition ? true: false}
                  />
                )}
              />
            </Grid>

            <Grid item xs={12}>
              <Controller
                control={control}
                name="authorizedSignatureTwoName"
                render={({field})=>(
                  <TextFieldTheme
                    {...field}
                    label="ชื่อผู้มีอำนาจของบริษัท คนที่ 2"
                    helperText={errors && errors.authorizedSignatureTwoName && errors.authorizedSignatureTwoName.message}
                    error={errors && errors.authorizedSignatureTwoName ? true: false}
                  />
                )}
              />
            </Grid>

            <Grid item xs={12}>
              <Controller
                control={control}
                name="authorizedSignatureTwoPosition"
                render={({field})=>(
                  <TextFieldTheme
                    {...field}
                    label="ตำแหน่งผู้มีอำนาจของบริษัท คนที่ 2"
                    helperText={errors && errors.authorizedSignatureTwoPosition && errors.authorizedSignatureTwoPosition.message}
                    error={errors && errors.authorizedSignatureTwoPosition ? true: false}
                  />
                )}
              />
            </Grid>

            <Grid item xs={12}>
              <Controller
                control={control}
                name="witnessSignatureName"
                render={({field})=>(
                  <TextFieldTheme
                    {...field}
                    label="ชื่อพยาน"
                    helperText={errors && errors.witnessSignatureName && errors.witnessSignatureName.message}
                    error={errors && errors.witnessSignatureName ? true: false}
                  />
                )}
              />
            </Grid>

            <Grid item xs={12}>
              <Controller
                control={control}
                name="witnessSignaturePosition"
                render={({field})=>(
                  <TextFieldTheme
                    {...field}
                    label="ตำแหน่งพยาน"
                    helperText={errors && errors.witnessSignaturePosition && errors.witnessSignaturePosition.message}
                    error={errors && errors.witnessSignaturePosition ? true: false}
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

export default DrawerProfile;