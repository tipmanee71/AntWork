import React,{ Fragment, useEffect, useState } from 'react';
import { Button, Checkbox, Container, FormControlLabel, FormHelperText, Grid, MenuItem, Select, styled, Typography,Box } from "@mui/material";
import TextFieldTheme from "../shared/general/TextFieldTheme";
import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import ButtonBlue from "../shared/general/ButtonBlue";

import { useDispatch, useSelector } from "react-redux";

import {getCompanysingup} from "../../../actions/company";

const StyledRoot = styled("div")({
  "& .fieldLabel": {
    fontSize: 16,
  },
  "& a": {
    color: "#1976d2",
    textDecoration: "none",
  }
});


const HomepageDiv = styled("div")({
  marginTop: "80px",
  width: "100%",
  textAlign: "center",
  ["@media (max-width: 1500px)"]: {
    marginTop: "80px",
  },
});

const CompanySignUp = () => {

   const dispatch = useDispatch();

//   const [isSuccess, setIsSuccess] = useState(false);

//   const { result: SignupCompanyFormStore } = useSelector(state => state.signupCompanyForm);
   const [businessGroup, setBusinessGroup] = useState([]);

  const { control, handleSubmit, getValues, formState: { errors }, setError } = useForm({
    defaultValues: {
      companyName: "",
      companyNameShort: "",
      idBusinessGroup: "",
      companySize: "",
      mainContactName: "",
      mainContactPhone: "",
      mainContactEmail: "",
      password: "",
      confirmPassword: "",
      acceptPrivacyPolicy: false,
    }
  });

//   const onSubmit = async (formData) => {
//     const cleansingForm = {
//       companyName: formData.companyName,
//       companyNameShort: formData.companyNameShort,
//       idBusinessGroup: formData.idBusinessGroup,
//       companySize: formData.companySize,
//       mainContactName: formData.mainContactName,
//       mainContactPhone: formData.mainContactPhone,
//       mainContactEmail: formData.mainContactEmail,
//       password: formData.password,
//     }


  return(
    <StyledRoot className={`page`}>
   
        <HomepageDiv>
          <Typography variant="h4" marginBottom={3}>สมัครสมาชิกสำหรับบริษัท</Typography>
        </HomepageDiv>
        
        <form  autoComplete="off">
            <Container maxWidth="md">
                <Grid container spacing={3}>
                <Grid item xs={12}>
                        {/* <Controller name="companyName" control={control} rules={{
                        required: {value: true, message: "กรุณากรอกชื่อบริษัท"}
                        }}> */}
                            <Fragment>
                                <Typography className="fieldLabel" gutterBottom>ชื่อบริษัท</Typography>
                                <TextFieldTheme size="small" fullWidth autoComplete="companyName" />
                            </Fragment>
                        {/* </Controller> */}
                </Grid>
                
                <Grid item xs={12} md={6}>
                        <Fragment>
                            <Typography className="fieldLabel" gutterBottom>ชื่อย่อบริษัท</Typography>
                            <TextFieldTheme
                            
                            size="small"
                            fullWidth
                            autoComplete="companyNameShort"
                            />
                        </Fragment>
                                
                </Grid>

                <Grid item xs={12} md={6}>
                  <Controller
                    name="idBusinessGroup"
                    control={control}
                    rules={{
                      required: {value: true, message: "กรุณาเลือกกลุ่มธุรกิจ"}
                    }}
                    render={({field})=>(
                      <Fragment>
                        <Typography className="fieldLabel" gutterBottom>กลุ่มธุรกิจ</Typography>
                        <TextFieldTheme
                          {...field}
                          select 
                          fullWidth
                          helperText={errors && errors.idBusinessGroup && errors.idBusinessGroup.message}
                          error={errors && errors.idBusinessGroup ? true: false}
                        >
                          {businessGroup.map(business => (
                            <MenuItem key={business.businessGroupCode} value={business.idBusinessGroup}>{business.businessGroupName}</MenuItem>
                          ))}
                        </TextFieldTheme>
                      </Fragment>
                    )}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <Controller
                    name="companySize"
                    control={control}
                    rules={{
                      required: {value: true, message: "กรุณาเลือกขนาดองค์กร"}
                    }}
                    render={({field})=>(
                      <Fragment>
                        <Typography className="fieldLabel" gutterBottom>ขนาดองค์กร</Typography>
                        <TextFieldTheme
                          {...field} 
                          select 
                          fullWidth
                          helperText={errors && errors.companySize && errors.companySize.message}
                          error={errors && errors.companySize ? true: false}
                        >
                          <MenuItem value="small">ขนาดเล็ก (น้อยกว่า 50 คน)</MenuItem>
                          <MenuItem value="medium">ขนาดกลาง (51-200 คน)</MenuItem>
                          <MenuItem value="large">ขนาดใหญ่ (มากกว่า 200 คน)</MenuItem>
                        </TextFieldTheme>
                      </Fragment>
                    )}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <Controller
                    name="mainContactName"
                    control={control}
                    rules={{
                      required: {value: true, message: "กรุณากรอกชื่อผู้ติดต่อ"}
                    }}
                    render={({field})=>(
                      <Fragment>
                        <Typography className="fieldLabel" gutterBottom>ชื่อผู้ติดต่อ</Typography>
                        <TextFieldTheme
                          {...field} 
                          fullWidth
                          helperText={errors && errors.mainContactName && errors.mainContactName.message}
                          error={errors && errors.mainContactName ? true: false}
                          autoComplete="mainContactName"
                        />     
                      </Fragment>
                    )}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <Controller
                    name="mainContactPhone"
                    control={control}
                    rules={{
                      required: {value: true, message: "กรุณากรอกเบอร์โทรอย่างน้อย 9 หลัก"},
                      validate: (value) => (!isNaN(value) && value.length >= 9) || "กรุณากรอกเบอร์โทรอย่างน้อย 9 หลัก"
                    }}
                    render={({field})=>(
                      <Fragment>
                        <Typography className="fieldLabel" gutterBottom>เบอร์โทร</Typography>
                        <TextFieldTheme
                        {...field}
                        fullWidth
                        helperText={errors && errors.mainContactPhone && errors.mainContactPhone.message}
                        error={errors && errors.mainContactPhone ? true: false}
                        autoComplete="mainContactPhone"
                      />     
                      </Fragment>
                    )}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <Controller
                    name="mainContactEmail"
                    control={control}
                    rules={{
                      required: {value: true, message: "กรุณากรอกอีเมล"},
                      pattern: {
                        value: /^[A-z0-9._%+-]+@[A-z0-9.-]+\.[A-z.]{1,}[A-z]$/,
                        message: "กรุณากรอกอีเมลให้ถูกต้อง เช่น 'antjob@example.com'"
                      }
                    }}
                    render={({field})=>(
                      <Fragment>
                        <Typography className="fieldLabel" gutterBottom>อีเมล</Typography>
                        <TextFieldTheme
                        {...field}
                        fullWidth
                        helperText={errors && errors.mainContactEmail && errors.mainContactEmail.message}
                        error={errors && errors.mainContactEmail ? true: false}
                        autoComplete="mainContactEmail"
                      />
                      </Fragment>
                    )}
                  />
                </Grid>
                
                <Grid item xs={12} md={6}>
                  <Controller
                    name="password"
                    control={control}
                    rules={{
                      required: {value: true, message: "กรุณากรอกรหัสผ่าน"},
                      validate: (value) => (value.length >= 8) || "กรุณากรอกรหัสผ่าน อย่างน้อย 8 ตัว",
                      pattern: {
                        value: /^[A-Za-z0-9_]+$/,
                        message: "กรุณากรอกรหัสผ่าน เป็นตัวภาษาอังกฤษ ตัวเลข หรือเครื่องหมาย_เท่านั้น"
                      }
                    }}
                    render={({field})=>(
                      <Fragment>
                        <Typography className="fieldLabel" gutterBottom>รหัสผ่าน</Typography>
                        <TextFieldTheme
                          {...field}
                          fullWidth
                          type="password"
                          helperText={errors && errors.password && errors.password.message}
                          error={errors && errors.password ? true: false}
                        />
                      </Fragment>
                    )}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <Controller
                    name="confirmPassword"
                    control={control}
                    rules={{
                      required: {value: true, message: "กรุณากรอกยืนยันรหัสผ่าน"},
                      validate: (value) => (value === getValues("password")) || "รหัสผ่านไม่ตรงกัน",
                    }}
                    render={({field})=>(
                      <Fragment>
                        <Typography className="fieldLabel" gutterBottom>ยืนยันรหัสผ่าน</Typography>
                        <TextFieldTheme
                          {...field}
                          fullWidth
                          type="password"
                          helperText={errors && errors.confirmPassword && errors.confirmPassword.message}
                          error={errors && errors.confirmPassword ? true: false}
                        />
                      </Fragment>
                    )}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Controller
                    name="acceptPrivacyPolicy"
                    control={control}
                    rules={{
                      required: {value: true, message: "กรุณายอมรับ เงื่อนไขการให้บริการ และ นโยบายความเป็นส่วนตัว ของ AntWork"},
                    }}
                    render={({field})=>(
                      <Fragment>
                        <FormControlLabel
                          label={<Typography>ยอมรับ <Link to="" target="_blank">เงื่อนไขการให้บริการ</Link> และ <Link to="" target="_blank">นโยบายความเป็นส่วนตัว</Link> ของ AntWork</Typography>}
                          control={
                            <Checkbox {...field} />
                          } 
                        />
                        <FormHelperText error={errors && errors.acceptPrivacyPolicy ? true: false}>
                          {errors && errors.acceptPrivacyPolicy && errors.acceptPrivacyPolicy.message}
                        </FormHelperText>
                      </Fragment>
                    )}
                  />
                </Grid>

                <Grid item xs={12} container justifyContent="space-between" alignItems="center">
                  <Typography>เป็นสมาชิกอยู่แล้ว ? <Link to="/login">เข้าสู่ระบบ</Link></Typography>
                  <ButtonBlue variant="contained" type="submit">สมัครสมาชิก</ButtonBlue>
                </Grid>

                </Grid>
            </Container>
            
        </form>
      
          {/* <Fragment> */}
            {/* <Typography variant="h4" marginBottom={3}>สมัครสมาชิกสำหรับบริษัท</Typography> */}
            {/* <form  autoComplete="off"> */}
              {/* <Grid container spacing={3}> */}
                {/* <Grid item xs={12}>
                  <Controller
                    name="companyName"
                    // control={control}
                    rules={{
                      required: {value: true, message: "กรุณากรอกชื่อบริษัท"}
                    }}
                    render={({field})=>(
                      <Fragment>
                        <Typography className="fieldLabel" gutterBottom>ชื่อบริษัท</Typography>
                        <TextFieldTheme
                        
                          size="small"
                          fullWidth
                        //   helperText={errors && errors.companyName && errors.companyName.message}
                        //   error={errors && errors.companyName ? true: false}
                          autoComplete="companyName"
                        />
                      </Fragment>
                    )}
                  />
                </Grid> */}

                {/* <Grid item xs={12} md={6}>
                  <Controller
                    name="companyNameShort"
                    // control={control}
                    rules={{
                      required: {value: true, message: "กรุณากรอกชื่อย่อบริษัท"}
                    }}
                    render={({field})=>(
                      <Fragment>
                        <Typography className="fieldLabel" gutterBottom>ชื่อย่อบริษัท</Typography>
                        <TextFieldTheme
                          {...field}
                          size="small"
                          fullWidth
                        //   helperText={errors && errors.companyNameShort && errors.companyNameShort.message}
                        //   error={errors && errors.companyNameShort ? true: false}
                          autoComplete="companyNameShort"
                        />
                      </Fragment>
                    )}
                  />
                </Grid> */}

                {/* <Grid item xs={12} md={6}>
                  <Controller
                    name="idBusinessGroup"
                    // control={control}
                    rules={{
                      required: {value: true, message: "กรุณาเลือกกลุ่มธุรกิจ"}
                    }}
                    render={({field})=>(
                      <Fragment>
                        <Typography className="fieldLabel" gutterBottom>กลุ่มธุรกิจ</Typography>
                        <TextFieldTheme
                          {...field}
                          select 
                          fullWidth
                        //   helperText={errors && errors.idBusinessGroup && errors.idBusinessGroup.message}
                        //   error={errors && errors.idBusinessGroup ? true: false}
                        >
                          
                        </TextFieldTheme>
                      </Fragment>
                    )}
                  />
                </Grid> */}

                {/* <Grid item xs={12} md={6}>
                  <Controller
                    name="companySize"
                    // control={control}
                    rules={{
                      required: {value: true, message: "กรุณาเลือกขนาดองค์กร"}
                    }}
                    render={({field})=>(
                      <Fragment>
                        <Typography className="fieldLabel" gutterBottom>ขนาดองค์กร</Typography>
                        <TextFieldTheme
                         
                          select 
                          fullWidth
                        //   helperText={errors && errors.companySize && errors.companySize.message}
                        //   error={errors && errors.companySize ? true: false}
                        >
                          <MenuItem value="small">ขนาดเล็ก (น้อยกว่า 50 คน)</MenuItem>
                          <MenuItem value="medium">ขนาดกลาง (51-200 คน)</MenuItem>
                          <MenuItem value="large">ขนาดใหญ่ (มากกว่า 200 คน)</MenuItem>
                        </TextFieldTheme>
                      </Fragment>
                    )}
                  />
                </Grid> */}

                {/* <Grid item xs={12} md={6}>
                  <Controller
                    name="mainContactName"
                    // control={control}
                    rules={{
                      required: {value: true, message: "กรุณากรอกชื่อผู้ติดต่อ"}
                    }}
                    render={({field})=>(
                      <Fragment>
                        <Typography className="fieldLabel" gutterBottom>ชื่อผู้ติดต่อ</Typography>
                        <TextFieldTheme
                          {...field} 
                          fullWidth
                        //   helperText={errors && errors.mainContactName && errors.mainContactName.message}
                        //   error={errors && errors.mainContactName ? true: false}
                          autoComplete="mainContactName"
                        />     
                      </Fragment>
                    )}
                  />
                </Grid> */}

                {/* <Grid item xs={12} md={6}>
                  <Controller
                    name="mainContactPhone"
                    // control={control}
                    rules={{
                      required: {value: true, message: "กรุณากรอกเบอร์โทรอย่างน้อย 9 หลัก"},
                      validate: (value) => (!isNaN(value) && value.length >= 9) || "กรุณากรอกเบอร์โทรอย่างน้อย 9 หลัก"
                    }}
                    render={({field})=>(
                      <Fragment>
                        <Typography className="fieldLabel" gutterBottom>เบอร์โทร</Typography>
                        <TextFieldTheme
                      
                        fullWidth
                        // helperText={errors && errors.mainContactPhone && errors.mainContactPhone.message}
                        // error={errors && errors.mainContactPhone ? true: false}
                        autoComplete="mainContactPhone"
                      />     
                      </Fragment>
                    )}
                  />
                </Grid> */}

                {/* <Grid item xs={12} md={6}>
                  <Controller
                    name="mainContactEmail"
                    // control={control}
                    rules={{
                      required: {value: true, message: "กรุณากรอกอีเมล"},
                      pattern: {
                        value: /^[A-z0-9._%+-]+@[A-z0-9.-]+\.[A-z.]{1,}[A-z]$/,
                        message: "กรุณากรอกอีเมลให้ถูกต้อง เช่น 'antjob@example.com'"
                      }
                    }}
                    render={({field})=>(
                      <Fragment>
                        <Typography className="fieldLabel" gutterBottom>อีเมล</Typography>
                        <TextFieldTheme
                        {...field}
                        fullWidth
                        // helperText={errors && errors.mainContactEmail && errors.mainContactEmail.message}
                        // error={errors && errors.mainContactEmail ? true: false}
                        autoComplete="mainContactEmail"
                      />
                      </Fragment>
                    )}
                  />
                </Grid> */}
                
                {/* <Grid item xs={12} md={6}>
                  <Controller
                    name="password"
                    // control={control}
                    rules={{
                      required: {value: true, message: "กรุณากรอกรหัสผ่าน"},
                      validate: (value) => (value.length >= 8) || "กรุณากรอกรหัสผ่าน อย่างน้อย 8 ตัว",
                      pattern: {
                        value: /^[A-Za-z0-9_]+$/,
                        message: "กรุณากรอกรหัสผ่าน เป็นตัวภาษาอังกฤษ ตัวเลข หรือเครื่องหมาย_เท่านั้น"
                      }
                    }}
                    render={({field})=>(
                      <Fragment>
                        <Typography className="fieldLabel" gutterBottom>รหัสผ่าน</Typography>
                        <TextFieldTheme
                          {...field}
                          fullWidth
                          type="password"
                        //   helperText={errors && errors.password && errors.password.message}
                        //   error={errors && errors.password ? true: false}
                        />
                      </Fragment>
                    )}
                  />
                </Grid> */}

                 {/* <Grid item xs={12} md={6}>
                  <Controller
                    name="confirmPassword"
                    // control={control}
                    rules={{
                      required: {value: true, message: "กรุณากรอกยืนยันรหัสผ่าน"},
                    //   validate: (value) => (value === getValues("password")) || "รหัสผ่านไม่ตรงกัน",
                    }}
                    render={({field})=>(
                      <Fragment>
                        <Typography className="fieldLabel" gutterBottom>ยืนยันรหัสผ่าน</Typography>
                        <TextFieldTheme
                          {...field}
                          fullWidth
                          type="password" */}
                        {/* //   helperText={errors && errors.confirmPassword && errors.confirmPassword.message}
                        //   error={errors && errors.confirmPassword ? true: false}
                         /> */}
                      {/* </Fragment> */}
                    {/* )} */}
                  {/* /> */}
                 {/* </Grid> */} 
              
                {/* <Grid item xs={12}>
                  <Controller
                    name="acceptPrivacyPolicy"
                    // control={control}
                    rules={{
                      required: {value: true, message: "กรุณายอมรับ เงื่อนไขการให้บริการ และ นโยบายความเป็นส่วนตัว ของ AntJob"},
                    }}
                    render={({field})=>(
                      <Fragment>
                        <FormControlLabel
                          label={<Typography>ยอมรับ <Link to="" target="_blank">เงื่อนไขการให้บริการ</Link> และ <Link to="" target="_blank">นโยบายความเป็นส่วนตัว</Link> ของ AntJob</Typography>}
                          control={
                            <Checkbox {...field} />
                          } 
                        />
                        <FormHelperText  */}
                        {/* //error={errors && errors.acceptPrivacyPolicy ? true: false}
                        // > */}
                          {/* {errors && errors.acceptPrivacyPolicy && errors.acceptPrivacyPolicy.message} */}
                        {/* </FormHelperText>
                      </Fragment>
                    )}
                  />
                </Grid> */}

                {/* <Grid item xs={12} container justifyContent="space-between" alignItems="center">
                  <Typography>เป็นสมาชิกอยู่แล้ว ? <Link to="/login">เข้าสู่ระบบ</Link></Typography>
                  <ButtonBlue variant="contained" type="submit">สมัครสมาชิก</ButtonBlue>
                </Grid> */}
              {/* </Grid> */}
            {/* </form> */}
          {/* </Fragment> */}
        

      
     
    </StyledRoot>
  )
}

export default CompanySignUp;