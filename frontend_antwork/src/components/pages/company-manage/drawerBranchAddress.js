import React from "react";
import { Grid, styled } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import DrawerCustom from "../shared/general/Drawer";
import TextFieldTheme from "../shared/general/TextFieldTheme";
import ButtonBlue from "../shared/general/ButtonBlue";
import NumberFormat from "react-number-format";

import { useDispatch } from "react-redux";
import { getCompanyManage, addCompanyManageBranch } from "../../../actions/company";
import { updateBranchByBranchId } from "../../../actions/branch";

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

const DrawerBranchAddress = (props) => {
  const { open, onClose, isEdit, branch, company } = props;

  const dispatch = useDispatch()

  const { control, handleSubmit, formState: { errors, dirtyFields } } = useForm({
    defaultValues: {
      ...(!isEdit && ({
        branchName: "",
        mainContactName: "",
        mainContactPhone: "",
        mainContactEmail: "",
        address: "",
        district: "",
        province: "",
        areaCode: "",
      })),
      ...(isEdit && ({
        branchName: (branch && branch.branchName) || "",
        mainContactName: (branch && branch.mainContactName) || "",
        mainContactPhone: (branch && branch.mainContactPhone) || "",
        mainContactEmail: (branch && branch.mainContactEmail) || "",
        address: (branch && branch.address) || "",
        district: (branch && branch.district) || "",
        province: (branch && branch.province) || "",
        areaCode: (branch && branch.areaCode) || "",
      }))
    }
  })

  const onSubmit = async (formData) => {
    //แก้ไข
    if(isEdit){
      
      const changedForm = {};

      Object.keys(dirtyFields).forEach((key) => {
        changedForm[key] = formData[key];
      });

      if(Object.keys(dirtyFields).length === 0){
        onClose();
        return;
      }

      const response = await dispatch(updateBranchByBranchId(branch.idBranch, changedForm));
      if (response.status === 200){
        dispatch(getCompanyManage());
        onClose();
      }

    }
    //Add
    else{
      const response = await dispatch(addCompanyManageBranch(formData));
      if (response.status === 200){
        dispatch(getCompanyManage());
        onClose();
      }
    }
  }

  return(
    <DrawerCustom
      open={open}
      title={isEdit? `แก้ไขสาขา`: `เพิ่มสาขา`}
      anchor="right"
    >
      <StyledRoot>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Controller
                control={control}
                name="branchName"
                rules={{
                  required: {value: true, message: "กรุณากรอกชื่อสาขา"}
                }}
                render={({field})=>(
                  <TextFieldTheme
                    {...field}
                    label="ชื่อสาขา"
                    helperText={errors && errors.branchName && errors.branchName.message}
                    error={errors && errors.branchName ? true: false}
                  />
                )}
              />
            </Grid>

            <Grid item xs={12}>
              <Controller
                control={control}
                name="address"
                rules={{
                  // required: {value: true, message: "กรุณากรอกที่อยู่"}
                }}
                render={({field})=>(
                  <TextFieldTheme
                    {...field}
                    label="ที่อยู่"
                    multiline
                    rows={3}
                    helperText={errors && errors.address && errors.address.message}
                    error={errors && errors.address ? true: false}
                  />
                )}
              />
            </Grid>

            <Grid item xs={12}>
              <Controller
                control={control}
                name="district"
                rules={{
                  // required: {value: true, message: "กรุณากรอกอำเภอ"}
                }}
                render={({field})=>(
                  <TextFieldTheme
                    {...field}
                    label="อำเภอ"
                    helperText={errors && errors.district && errors.district.message}
                    error={errors && errors.district ? true: false}
                  />
                )}
              />
            </Grid>

            <Grid item xs={12}>
              <Controller
                control={control}
                name="province"
                rules={{
                  // required: {value: true, message: "กรุณากรอกจังหวัด"}
                }}
                render={({field})=>(
                  <TextFieldTheme
                    {...field}
                    label="จังหวัด"
                    helperText={errors && errors.province && errors.province.message}
                    error={errors && errors.province ? true: false}
                  />
                )}
              />
            </Grid>

            <Grid item xs={12}>
              <Controller
                control={control}
                name="areaCode"
                rules={{
                  minLength: {value: true, message: "กรุณากรอกรหัสไปรษณีย์ให้ครบ 5 หลัก"}
                }}
                render={({field})=>(
                  <NumberFormat
                    {...field}
                    format="#####"
                    allowNegative={false}
                    customInput={TextFieldTheme}
                    label="รหัสไปรษณีย์"
                    onValueChange={(values) => {
                      const {formattedValue, value, floatValue} = values;
                      field.onChange(value)
                    }}
                    helperText={errors && errors.areaCode && errors.areaCode.message}
                    error={errors && errors.areaCode ? true: false}
                    onChange={()=>{}}
                  />
                )}
              />
            </Grid>

            {/* <Grid item xs={12}>
              <Controller
                control={control}
                name="country"
                rules={{
                  required: {value: true, message: "กรุณากรอกประเทศ"}
                }}
                render={({field})=>(
                  <TextFieldTheme
                    {...field}
                    label="ประเทศ"
                    helperText={errors && errors.companyAddress && errors.country && errors.companyAddress.country.message}
                    error={errors && errors.companyAddress && errors.companyAddress.country ? true: false}
                  />
                )}
              />
            </Grid> */}
            <Grid item xs={12}>
              <Controller
                control={control}
                name="mainContactName"
                rules={{
                  required: {value: true, message: "กรุณากรอกชื่อผู้ติดต่อ"}
                }}
                render={({field})=>(
                  <TextFieldTheme
                    {...field}
                    label="ชื่อผู้ติดต่อ"
                    helperText={errors && errors.mainContactName && errors.mainContactName.message}
                    error={errors && errors.mainContactName ? true: false}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                control={control}
                name="mainContactPhone"
                rules={{
                  required: {value: true, message: "กรุณากรอกเบอร์โทรผู้ติดต่อ"},
                  minLength: {value: 10, message: "กรุณากรอกเบอร์โทรผู้ติดต่อ 10 หลัก"}
                }}
                render={({field})=>(
                  <NumberFormat
                    {...field}
                    format="###-###-####"
                    allowNegative={false}
                    customInput={TextFieldTheme}
                    label="เบอร์โทรผู้ติดต่อ"
                    onValueChange={(values) => {
                      const {formattedValue, value, floatValue} = values;
                      field.onChange(value)
                    }}
                    helperText={errors && errors.mainContactPhone && errors.mainContactPhone.message}
                    error={errors && errors.mainContactPhone ? true: false}
                    onChange={()=>{}}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                control={control}
                name="mainContactEmail"
                rules={{
                  required: {value: true, message: "กรุณากรอกอีเมลผู้ติดต่อ"},
                  pattern: {
                    value: /^[A-z0-9._%+-]+@[A-z0-9.-]+\.[A-z.]{1,}[A-z]$/,
                    message: "กรุณากรอกอีเมลให้ถูกต้อง เช่น 'antjob@example.com'"
                  }
                }}
                render={({field})=>(
                  <TextFieldTheme
                    {...field}
                    label="อีเมลผู้ติดต่อ"
                    helperText={errors && errors.mainContactEmail && errors.mainContactEmail.message}
                    error={errors && errors.mainContactEmail ? true: false}
                  />
                )}
              />
            </Grid>

          </Grid>

          <div className="part-action">
            <ButtonBlue className="cancel-button" variant="outlined" onClick={onClose}><i className="fa-regular fa-x"></i>ยกเลิก</ButtonBlue>
            <ButtonBlue type="submit" variant="contained"><i className="fa-regular fa-check"></i>{isEdit? `แก้ไข`: `เพิ่ม`}</ButtonBlue>
          </div>
        </form>
      </StyledRoot>
    </DrawerCustom>
  )
}

export default DrawerBranchAddress;