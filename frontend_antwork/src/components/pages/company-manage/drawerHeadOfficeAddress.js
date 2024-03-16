import React from "react";
import { Grid, styled } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import DrawerCustom from "../shared/general/Drawer";
import TextFieldTheme from "../shared/general/TextFieldTheme";
import ButtonBlue from "../shared/general/ButtonBlue";
import NumberFormat from "react-number-format";
import { useDispatch } from "react-redux";
import { getCompanyManage, updateCompanyManage } from "../../../actions/company";


//
import company from "../assets/data/company";
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
      // color: "#d32f2f",
      // borderColor: "#d32f2f",
      color: "#9e9e9e",
      borderColor: "#9e9e9e",
    }
  }
})

const DrawerHeadOfficeAddress = (props) => {
  //const { open, onClose, company } = props;
  const { open, onClose,  } = props;

  const dispatch = useDispatch();

  const { control, handleSubmit, formState: { errors, dirtyFields } } = useForm({
    defaultValues: {
      address: (company && company.address) || "",
      district: (company && company.district) || "",
      province: (company && company.province) || "",
      areaCode: (company && company.areaCode) || "",
      country: (company && company.country) || "",
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

  return(
    <DrawerCustom
      open={open}
      title="แก้ไขสำนักงานใหญ่"
      anchor="right"
    >
      <StyledRoot>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Controller
                control={control}
                name="address"
                render={({field})=>(
                  <TextFieldTheme
                    {...field}
                    label="ที่อยู่"
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                control={control}
                name="district"
                rules={{
                  required: {value: true, message: "กรุณากรอกอำเภอ"}
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
                  required: {value: true, message: "กรุณากรอกจังหวัด"}
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
                    helperText={errors && errors.country && errors.country.message}
                    error={errors && errors.country ? true: false}
                  />
                )}
              />
            </Grid> */}
           
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

export default DrawerHeadOfficeAddress;