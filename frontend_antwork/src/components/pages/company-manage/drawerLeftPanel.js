import React from "react";
import { Grid, styled } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import DrawerCustom from "../shared/general/Drawer";
import TextFieldTheme from "../shared/general/TextFieldTheme";
import ButtonBlue from "../shared/general/ButtonBlue";
import ButtonUni from "../shared/general/ButtonUni";
import NumberFormat from "react-number-format";

import { useDispatch } from "react-redux";
//import { getCompanyManage, updateCompanyManage } from "../../../../actions/company";

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


///connect back
const DrawerLeftPanel = (props) => {
  const { open, onClose, company } = props;

  const dispatch = useDispatch();

  const { control, handleSubmit, formState: { errors, dirtyFields } } = useForm({
    defaultValues: {
      companyName: (company && company.companyName) || "",
      mainContactName: (company && company.mainContactName) || "",
      mainContactPhone: (company && company.mainContactPhone) || "",
      mainContactEmail: (company && company.mainContactEmail) || "",
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

    // const response = await dispatch(updateCompanyManage(changedForm));
    // if (response.status === 200){
    //   dispatch(getCompanyManage());
    //   onClose();
    // }

  }

  return(
    <DrawerCustom
      open={open}
      title="แก้ไขข้อมูลทั่วไป"
      anchor="right"
    >
      <StyledRoot>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Controller
                control={control}
                name="companyName"
                rules={{
                  required: {value: true, message: "กรุณากรอกชื่อบริษัท"}
                }}
                render={({field})=>(
                  <TextFieldTheme
                    {...field}
                    label="ชื่อบริษัท"
                    helperText={errors && errors.companyName && errors.companyName.message}
                    error={errors && errors.companyName ? true: false}
                  />
                )}
              />
            </Grid>

            <Grid item xs={12}>
              <Controller
                control={control}
                name="mainContactName"
                rules={{
                  required: {value: true, message: "กรุณาชื่อผู้ติดต่อ"}
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
            <ButtonUni className="cancel-button" variant="outlined" color="error" onClick={onClose}>
                 <i className="fa-regular fa-x"></i>ยกเลิก
             </ButtonUni>
             <ButtonUni type="submit" variant="contained" color="secondary"><i className="fa-regular fa-check"></i>แก้ไข</ButtonUni>
            </div>
        </form>
      </StyledRoot>
    </DrawerCustom>
  )
}

export default DrawerLeftPanel;

//mock fontend
// const DrawerLeftPanel = (props) => {
//   const { open, onClose, company } = props;

//   // const dispatch = useDispatch();

//   const { control, handleSubmit, formState: { errors, dirtyFields } } = useForm({
//     defaultValues: {
//       companyName: (company && company.companyName) || "",
//       mainContactName: (company && company.mainContactName) || "",
//       mainContactPhone: (company && company.mainContactPhone) || "",
//       mainContactEmail: (company && company.mainContactEmail) || "",
//     }
//   })

//   const onSubmit = async (formData) => {
//     // Backend interaction removed
//     onClose();
//   }

//   return(
//     <DrawerCustom
//       open={open}
//       title="แก้ไขข้อมูลทั่วไป"
//       anchor="right"
//     >
//       <StyledRoot>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <Grid container spacing={2}>
//             {/* Form fields */}
//           </Grid>

//           <div className="part-action">
//             <ButtonUni className="cancel-button" variant="contained" color="error" onClick={onClose}>
//                 <i className="fa-regular fa-x"></i>ยกเลิก
//             </ButtonUni>
//             <ButtonUni type="submit" variant="contained"><i className="fa-regular fa-check"></i>แก้ไข</ButtonUni>
//           </div>
//         </form>
//       </StyledRoot>
//     </DrawerCustom>
//   )
// }

// export default DrawerLeftPanel;