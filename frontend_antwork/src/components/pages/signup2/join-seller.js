import React, { useState, useEffect, Fragment ,useCallback} from "react";
import { Controller, useForm, useFieldArray, useWatch } from "react-hook-form"
import { useHistory, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import UploadFileOutlinedIcon from "@mui/icons-material/UploadFileOutlined";
import { useDropzone } from "react-dropzone";
import * as Yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import dayjs from "dayjs";
import "./style/seller.css";

import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';

import {
  Grid,
  Typography,
  Checkbox,
  FormControlLabel,
  IconButton,
  Box,
  Card,
  CardContent,
  Container,
  Button,
  Paper,
  Divider,
  Stack,
  TextField,
  MenuItem,
  Step,
  Stepper,
  StepLabel,
  Radio,
  RadioGroup,
  CircularProgress
} from "@mui/material";
import { styled } from "@mui/material/styles";


import FormGroup from '@mui/material/FormGroup';

import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import EditNoteRoundedIcon from "@mui/icons-material/EditNoteRounded";

import AlertResponse from "../shared/general/AlertResponse";
import TextFieldTheme from "../shared/general/TextFieldTheme";
import ButtonBlue from "../shared/general/ButtonBlue";
import ButtonGrey from "../shared/general/ButtonGrey";
import UploadPic from "../shared/general/UploadPic";
import NumberFormatTheme from "../shared/general/NumberFormatTheme";
import Dropzone from "./components/dropzone";
import DialogEducation from "./components/DialogEducation";
import DialogSkill from "./components/DialogSkill";
import DialogOccupation from "./components/DialogOccupation";

import { registerAccount } from "../../../actions/user";



const StyledRoot = styled("div")({
  minWidth: 350,
  width: "100%",
  backgroundColor: "#f1f4f9",
  paddingTop: 80,
  paddingBottom: 36,
});

const StyledHeader = styled(Typography)({
  // marginTop: 20,
});

const StyledStackForContent = styled(Stack)({
  // marginTop: 50,
});

const StyledStackForm = styled(Stack)({
  // justifyContent: "space-between",
  // justifyContent: "space-around",
  justifyContent: "center",
  // textAlign: "center",
  alignContent: "center",
  alignItems: "center",
  // display: "flex",
});

const StyledDivForContent = styled("div")({
  flexDirection: "row",
  // padding: "35px 0 96px",
  display: "flex",
  alignItems: "center",
});

const StyledBox = styled(Box)({
  marginTop: 50,
  border: "1px solid",
  borderColor: "#CFD3D7",
  borderRadius: "12px",
  padding: 35,
});

const StyledBoxForCaption = styled(Box)({
  width: 600,
});

const StyledTextFieldTheme = styled(TextFieldTheme)(({}) => ({
  marginBottom: 16,
}));

const StyledBoxForTextField = styled(Box)({
  display: "flex",
  alignItems: "center",
});

const validationSchema = Yup.object().shape({
  username: Yup.string()
  .required('กรุณากรอกข้อมูล')
  .min(8, 'อย่างน้อย 8-20')
  .max(20, 'อย่างน้อย 8-20')
  .matches(/^[0-9a-zA-Z]+$/, "Username ต้องเป็นตัวอักษรภาษาอังกฤษหรือตัวเลขเท่านั้น"),
  passWord: Yup.string()
  .required('กรุณากรอกข้อมูล')
  .min(8, 'อย่างน้อย 8-16')
  .max(16, 'อย่างน้อย 8-16')
  .matches(/^[0-9a-zA-Z]+$/, "รหัสผ่านต้องเป็นตัวอักษรภาษาอังกฤษหรือตัวเลขเท่านั้น"),
  confirmPassword: Yup.string()
  .required('กรุณากรอกข้อมูล')
  .min(8, 'อย่างน้อย 8-16')
  .max(16, 'อย่างน้อย 8-16')
  .matches(/^[0-9a-zA-Z]+$/, "รหัสผ่านต้องเป็นตัวอักษรภาษาอังกฤษหรือตัวเลขเท่านั้น")
  .equals([Yup.ref("passWord")], "รหัสผ่านไม่ตรงกัน"),
  firstname: Yup.string().required("กรุณาระบุชื่อจริง"),
  lastname: Yup.string().required("กรุณาระบุนามสกุล"),
  profileImg: Yup.mixed().required('กรุณาแนบรูปประจำตัวของคุณ'),
  // profileImg: Yup.object().shape({
  //   file: Yup.mixed().required('กรุณาแนบรูปประจำตัวของคุณ')
  // }).required(),
  description: Yup.string().required("กรุณาคำอธิบายเกี่ยวกับงานของคุณ"),
  occupation: Yup.array().of(
    Yup.object().shape({
      type: Yup.string().required()
    })
  ).min(1, 'ต้องมีข้อมูลอย่างน้อย 1 รายการ'),
  skill: Yup.array().of(
    Yup.object().shape({
      skillName: Yup.string().required(),
      level: Yup.string().required(),
    })
  ).min(1, 'ต้องมีข้อมูลอย่างน้อย 1 ทักษะ'),
  // education: Yup.array().of(
  //   Yup.object().shape({
  //     university: Yup.string()
  //   })
  // ),
  // website: Yup.string(),
  email: Yup.string().required('กรุณาใส่อีเมลล์ติดต่อให้ถูกต้อง').email(),
  phone: Yup.string().required('กรุณาใส่เอบร์โทรศัพท์ติดต่อให้ถูกต้อง'),
});


function JoinSeller(props) {
  const history = useHistory();
  const dispatch = useDispatch();

  const { control, handleSubmit, formState:{ errors }, getValues} = useForm({
    defaultValues: {
      username: "",
      passWord: "",
      confirmPassword: "",
      firstname: "",
      lastname: "",
      description: "",
      profileImg: null,
      occupation: [],
      skill: [],
      education: [],
      website: null,
      email: "",
      phone: "",
    },
    resolver: yupResolver(validationSchema)
  });

  const {
    fields: OccupationFields,
    append: OccupationAppend,
    remove: OccupationRemove,
    update: OccupationUpdate,
  } = useFieldArray({ control, name: "occupation" });
  const {
    fields: SkillFields,
    append: SkillAppend,
    remove: SkillRemove,
    update: SkillUpdate,
  } = useFieldArray({ control, name: "skill" });
  const {
    fields: EducationFields,
    append: EducationAppend,
    remove: EducationRemove,
    update: EducationUpdate,
  } = useFieldArray({ control, name: "education" });

  const [ openOccupation, setOpenOccupation ] = useState({
    isOpen: false,
    isEdit: false,
    data: {},
  });
  const [ openSkill, setOpenSkill ] = useState({
    isOpen: false,
    isEdit: false,
    data: {},
  });
  const [ openEducation, setOpenEducation ] = useState({
    isOpen: false,
    isEdit: false,
    data: {},
  });

  const [ activeStep, setActiveStep ] = useState(0)
  const backActiveStep = () => {
    setActiveStep((prev)=> prev-1);
  };
  const nextActiveStep = () => {
    setActiveStep((prev)=> prev+1);
  };

  const [ disablebtn, setDisablebtn ] = useState(false);
  const [ openAlert, setOpenAlert ] = useState({
    open: false,
    alertType: null,
    label: null
  })
  const handleOpenAlert = (alertType, label) => {
    setOpenAlert({
      open: true,
      alertType: alertType,
      label: label
    });
  };
  const handleCloseAlert = () => {
    setOpenAlert({
      open: false,
      alertType: null,
      label: null
    });
  };
  
  const formSubmit = async (values) => {
    setDisablebtn(true)
    let formData={
      username: values.username,
      password: values.passWord,
      firstname_EN: values.firstname,
      lastname_EN: values.lastname,
      description: values.description,
      occupation: values.occupation,
      skill: values.skill,
      education: values.education,
      websiteurl: values.website,
      email: values.email,
      telephoneMobile: values.phone,
    }
    const postData = new FormData

    Object.keys(formData).map((key)=>{
      postData.append(key,JSON.stringify(formData[key]))
    })
    if(values.profileImg){
      postData.append("profileImg",values.profileImg)
    }

    let result = await dispatch(registerAccount(postData, "freelance"))
    if(result && result.status === 200){
      history.push({
        pathname: `/login`,
      });
    }else{
      handleOpenAlert("error", result ? result.message : null)
      setDisablebtn(false)
    }

  };

   const [employmentType, setEmploymentType] = useState('');

  const handleEmploymentTypeChange = (event) => {
    setEmploymentType(event.target.value);
  };

  // const dropArea = () => {
  //   if (!loading) {
  //     if (isDragActive) {
  //       return (
  //         <>
  //           <Typography>วางไฟล์ได้ที่นี่...</Typography>
  //         </>
  //       );
  //     } else {
  //       return (
  //         <>
  //           <UploadFileOutlinedIcon sx={{ fontSize: 50, color: "#1976d2" }} />
  //           <Typography>
  //             คุณสามารถลากและวางไฟล์เรซูเม่ได้ที่นี่, หรือคลิ๊กเพื่อเลือกไฟล์
  //           </Typography>
  //         </>
  //       );
  //     }
  //   } else {
  //     return (
  //       <>
  //         <CircularProgress />
  //         <Typography>กำลังประมวลผล...</Typography>
  //       </>
  //     );
  //   }
  // };
  
  return (
    <StyledRoot className={`page`}>
      <Container maxWidth="lg">
        <Stepper activeStep={activeStep}>
          <Step key={"Selete TypeUser"}>
            <StepLabel>{"Selete TypeUser"}</StepLabel>
          </Step>
          <Step key={"Personal Info"}>
            <StepLabel>{"Personal Info"}</StepLabel>
          </Step>
          <Step key={"Professional Info"}>
            <StepLabel>{"Professional Info"}</StepLabel>
          </Step>
          <Step key={"Account Security"}>
            <StepLabel>{"Account Security"}</StepLabel>
          </Step>
        </Stepper>
        <form onSubmit={handleSubmit(formSubmit)} >
        {activeStep === 0 &&
          <StyledBox>
            <StyledStackForContent spacing={1}>
              <StyledHeader variant="h4">Selete TypeUser</StyledHeader>
              
               <StyledBoxForCaption>
                <Typography variant="body1" color="text.secondary">
                  Tell us a bit about yourself. This information will appear on your
                  public profile, so that potential buyers can get to know you better.
                </Typography>
              </StyledBoxForCaption>
              <Divider style={{ marginTop: 20, marginBottom: 20 }} />
              <Stack spacing={2}>
                <Grid container spacing={2} alignItems={"center"}>
                   <FormGroup>
                     <RadioGroup value={employmentType} onChange={handleEmploymentTypeChange}>
                      <FormControlLabel value="FREELANCE" control={<Radio />} label="FREELANCE" />
                      <FormControlLabel value="TEMPORARY" control={<Radio />} label="TEMPORARY" />
                      <FormControlLabel value="FREELANCE_AND_TEMPORARY" control={<Radio />} label="FREELANCE AND TEMPORARY" />
                    </RadioGroup>
                  </FormGroup>
                </Grid>
              </Stack>
            </StyledStackForContent>
          </StyledBox>
        }

        {activeStep === 1 &&
          <StyledBox>
            <StyledStackForContent spacing={1}>
              <StyledHeader variant="h4">Personal Info</StyledHeader>
              <StyledBoxForCaption>
                <Typography variant="body1" color="text.secondary">
                  Tell us a bit about yourself. This information will appear on your
                  public profile, so that potential buyers can get to know you better.
                </Typography>
              </StyledBoxForCaption>
        
              <Divider style={{ marginTop: 20, marginBottom: 20 }} />

              <Stack spacing={2}>
                <Grid container spacing={2} alignItems={"center"}>
                  <Grid item xs={12} md={2}>
                    <Box display={"flex"}>
                      <Typography variant="body1">Username</Typography>
                      <Typography variant="body1" color="red">
                        *
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={4}>
                  <Controller
                    control={control}
                    name = "username"
                    rules={{ 
                      required : { value : true, message : "กรุณาระบุ Username"}
                    }}
                    render={({field})=>(
                    <StyledTextFieldTheme
                      {...field}
                      label="Username"
                      variant="filled"
                      helperText={errors && errors.username && errors.username.message}
                      error={errors && errors.username ? true : false}
                      fullWidth
                    />
                    )}
                  />
                  </Grid>
                </Grid>
                <Grid container spacing={2} alignItems={"center"}>
                  <Grid item xs={12} md={2}>
                    <Box display={"flex"}>
                      <Typography variant="body1">Password</Typography>
                      <Typography variant="body1" color="red">
                        *
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Controller
                      control={control}
                      name = "passWord"
                      rules={{ 
                        required : { value : true, message : "กรุณาระบุ Password"},
                        validate : (v) => {return v === getValues('confirmPassword')},
                      }}
                      render={({field})=>(
                      <StyledTextFieldTheme
                        {...field}
                        label="Password"
                        variant="filled"
                        fullWidth
                        type="password"
                        helperText={ errors && errors.passWord && errors.passWord.message }
                        error={ errors && errors.passWord ? true : false }
                      />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Controller
                      control={control}
                      name = "confirmPassword"
                      rules={{ 
                        required : { value : true, message : "กรุณายืนยันรหัสผ่าน"},
                        validate : (v) => {return getValues('passWord') === v},
                      }}
                      render={({field})=>(
                      <StyledTextFieldTheme
                        {...field}
                        label="Confirm Password"
                        variant="filled"
                        fullWidth
                        type="password"
                        helperText={ errors && errors.confirmPassword && errors.confirmPassword.message }
                        error={ errors && errors.confirmPassword ? true : false }
                      />
                      )}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={2} alignItems={"center"}>
                  <Grid item xs={12} md={2}>
                    <Box display={"flex"}>
                      <Typography variant="body1">Full Name</Typography>
                      <Typography variant="body1" color="red">
                        *
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Controller 
                      control={control}
                      name="firstname"
                      rules={{
                        required : { value : true, message : "กรุณาระบุชื่อจริง"},
                      }}
                      render={({field})=>(
                        <StyledTextFieldTheme
                          {...field}
                          label="First Name"
                          variant="filled"
                          fullWidth
                          helperText={ errors && errors.firstname && errors.firstname.message }
                          error={ errors && errors.firstname ? true : false }
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Controller 
                      control={control}
                      name="lastname"
                      rules={{
                        required : { value : true, message : "กรุณาระบุนามสกุล"},
                      }}
                      render={({field})=>(
                        <StyledTextFieldTheme
                          {...field}
                          label="Last Name"
                          variant="filled"
                          fullWidth
                          helperText={ errors && errors.lastname && errors.lastname.message }
                          error={ errors && errors.lastname ? true : false }
                        />
                      )}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={2} alignItems={"center"}>
                  <Grid item xs={12} md={2}>
                    <Box display={"flex"}>
                      <Typography variant="body1">Profile Picture</Typography>
                      <Typography variant="body1" color="red">
                        *
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={10}>
                    <Controller
                      control={control}
                      name = "profileImg"
                      // rules={{ 
                      //   required : { value : true, message : "กรุณาแนบรูปประจำตัวของคุณ"}
                      // }}
                      render={({field})=>(
                        <Box style={{ width: "150px", height: "150px" }}>
                          <Dropzone
                            dropwidth={"100%"}
                            helperText={errors && errors.profileImg && errors.profileImg.message}
                            error={errors && errors.profileImg ? true : false}
                            oldfile={field.value && [field.value]}
                            childToParent={field.onChange}
                          />
                        </Box>
                      )}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={2} alignItems={"center"}>
                  <Grid item xs={12} md={2}>
                    <Box display={"flex"}>
                      <Typography variant="body1">Description</Typography>
                      <Typography variant="body1" color="red">
                        *
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={10}>
                    <Controller 
                      control={control}
                      name="description"
                      rules={{
                        required : { value : true, message : "กรุณาคำอธิบายเกี่ยวกับงานของคุณ"},
                      }}
                      render={({field})=>(
                        <StyledTextFieldTheme
                          {...field}
                          label="Share a bit about your work"
                          variant="filled"
                          fullWidth
                          helperText={ errors && errors.description && errors.description.message }
                          error={ errors && errors.description ? true : false }
                        />
                      )}
                    />
                  </Grid>
                </Grid>
              </Stack>
            </StyledStackForContent>
          </StyledBox>
        }
        {activeStep === 2 &&
          <StyledBox>
            <StyledStackForContent spacing={1}>
              <StyledHeader variant="h4">Professional Info</StyledHeader>
              <StyledBoxForCaption>
                <Typography variant="body1" color="text.secondary">
                  This is your time to shine. Let potential buyers know what you do best
                  and how you gained your skills, certifications and experience.
                </Typography>
              </StyledBoxForCaption>
        
              <Divider style={{ marginTop: 20, marginBottom: 20 }} />
        
              <Stack spacing={2}>
                <Grid container spacing={2} alignItems={"center"}>
                  <Grid item xs={12} md={2}>
                    <Box display={"flex"}>
                      <Typography variant="body1">Occupation</Typography>
                      <Typography variant="body1" color="red">
                        *
                      </Typography>
                    </Box>
                    {/* <Button
                      size="small"
                    >
                      Add Occupation
                    </Button> */}
                  </Grid>
                  <Grid item xs={12} md={6}>
                  {OccupationFields.length > 0 ? (
                    <>
                    <Button
                      onClick={()=>setOpenOccupation((prev)=>({
                        ...prev,
                        isOpen: true,
                        isEdit: false,
                        occupationMethod: (value)=>OccupationAppend(value),
                      }))}
                    >
                      Add Occupation
                    </Button>
                    {OccupationFields.map((occupation,index)=>(
                      <Fragment>
                        <div
                          style={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                            position: "relative",
                          }}
                        >
                          <Box style={{ position: "absolute", right: "0", top: "0" }}>
                            <IconButton
                              onClick={(e) => {
                                e.stopPropagation();
                                setOpenOccupation(prev => ({
                                  ...prev,
                                  isOpen: true,
                                  isEdit: true,
                                  data: occupation,
                                  occupationMethod: (value)=>OccupationUpdate(index, value),
                                }))
                              }}
                            >
                              <EditNoteRoundedIcon fontSize="inherit" />
                            </IconButton>
                            <IconButton
                              aria-label="delete"
                              onClick={(e) => {
                                e.stopPropagation();
                                OccupationRemove(index)
                              }}
                            >
                              <DeleteOutlineRoundedIcon fontSize="inherit" />
                            </IconButton>
                          </Box>
                          <Typography
                            style={{ fontWeight: 700, width: "calc(100% - 143px)" }}
                          >
                            {`(${
                              occupation.fromDate
                                ? dayjs(`01-01-${occupation.fromDate}`).format("YYYY")
                                : "ไม่ระบุ"
                            } ถึง ${
                              occupation.toDate
                                ? dayjs(`01-01-${occupation.toDate}`).format("YYYY")
                                : "ไม่ระบุ"
                            })
                            `}
                          </Typography>
                          <Typography variant="body1">
                            {`${occupation.type === "Others" ? occupation.otherOccupation : occupation.type}`}
                          </Typography>
                        </div>
                      </Fragment>
                    ))}
                    </>
                  ) : (
                    <Button
                      onClick={()=>setOpenOccupation((prev)=>({
                        ...prev,
                        isOpen: true,
                        isEdit: false,
                        occupationMethod: (value)=>OccupationAppend(value),
                      }))}
                    >
                      Add Occupation
                    </Button>
                  )}
                  {errors && errors.occupation &&
                  <Box>
                    <Typography variant="caption" style={{ color: "#f44336", marginLeft: "14px" }}>กรุณาเพิ่มอาชีพของคุณ</Typography>
                  </Box>
                  }
                  </Grid>
                </Grid>

                <Grid container spacing={2} alignItems={"center"}>
                  <Grid item xs={12} md={2}>
                    <Box display={"flex"}>
                      <Typography variant="body1">Skills</Typography>
                      <Typography variant="body1" color="red">
                        *
                      </Typography>
                    </Box>
                    {/* <Button
                      size="small"
                    >
                      Add Skill
                    </Button> */}
                  </Grid>
                  <Grid item xs={12} md={6}>
                  {SkillFields.length > 0 ? (
                    <>
                    <Button
                      onClick={()=>setOpenSkill((prev)=>({
                        ...prev,
                        isOpen: true,
                        isEdit: false,
                        skillMethod: (value)=>SkillAppend(value),
                      }))}
                    >
                      Add Skill
                    </Button>
                    {SkillFields.map((skill,index)=>(
                      <Fragment>
                        <div
                          style={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                            position: "relative",
                          }}
                        >
                          <Box style={{ position: "absolute", right: "0", top: "0" }}>
                            <IconButton
                              onClick={(e) => {
                                e.stopPropagation();
                                setOpenSkill(prev => ({
                                  ...prev,
                                  isOpen: true,
                                  isEdit: true,
                                  data: skill,
                                  skillMethod: (value)=>SkillUpdate(index, value),
                                }))
                              }}
                            >
                              <EditNoteRoundedIcon fontSize="inherit" />
                            </IconButton>
                            <IconButton
                              aria-label="delete"
                              onClick={(e) => {
                                e.stopPropagation();
                                SkillRemove(index)
                              }}
                            >
                              <DeleteOutlineRoundedIcon fontSize="inherit" />
                            </IconButton>
                          </Box>
                          <Box style={{width: "calc(100% - 143px)"}}>
                          <Typography
                            variant="h6"
                            style={{  }}
                          >
                            {skill.skillName}
                          </Typography>
                          <Typography variant="body1" color="text.secondary">
                            {`Level: ${skill.level || "-"}`}
                          </Typography>
                          </Box>
                        </div>
                      </Fragment>
                    ))}
                    </>
                  ) : (
                    <Button
                      onClick={()=>setOpenSkill((prev)=>({
                        ...prev,
                        isOpen: true,
                        isEdit: false,
                        skillMethod: (value)=>SkillAppend(value),
                      }))}
                    >
                      Add Skill
                    </Button>
                  )}
                  {errors && errors.skill &&
                  <Box>
                    <Typography variant="caption" style={{ color: "#f44336", marginLeft: "14px" }}>กรุณาเพิ่มทักษะของคุณ</Typography>
                  </Box>
                  }
                  </Grid>
                </Grid>

                <Grid container spacing={2} alignItems={"center"}>
                  <Grid item xs={12} md={2}>
                    <Box display={"flex"}>
                      <Typography variant="body1">Education</Typography>
                    </Box>
                    {/* <Button
                      size="small"
                    >
                      Add Education
                    </Button> */}
                  </Grid>
                  <Grid item xs={12} md={6}>
                  {EducationFields.length > 0 ? (
                    <>
                    <Button
                      onClick={()=>setOpenEducation((prev)=>({
                        ...prev,
                        isOpen: true,
                        isEdit: false,
                        eduMethod: (value)=>EducationAppend(value),
                      }))}
                    >
                      Add Education
                    </Button>
                    {EducationFields.map((education,index)=>(
                      <Fragment>
                        <div
                          style={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                            position: "relative",
                          }}
                        >
                          <Box style={{ position: "absolute", right: "0", top: "0" }}>
                            <IconButton
                              onClick={(e) => {
                                e.stopPropagation();
                                setOpenEducation(prev => ({
                                  ...prev,
                                  isOpen: true,
                                  isEdit: true,
                                  data: education,
                                  eduMethod: (value)=>EducationUpdate(index, value),
                                }))
                              }}
                            >
                              <EditNoteRoundedIcon fontSize="inherit" />
                            </IconButton>
                            <IconButton
                              aria-label="delete"
                              onClick={(e) => {
                                e.stopPropagation();
                                EducationRemove(index)
                              }}
                            >
                              <DeleteOutlineRoundedIcon fontSize="inherit" />
                            </IconButton>
                          </Box>
                          <Typography
                            style={{ fontWeight: 700, width: "calc(100% - 143px)" }}
                          >
                            {`(${
                              education.fromYear
                                ? dayjs(`01-01-${education.fromYear}`).format("YYYY")
                                : "ไม่ระบุ"
                            } ถึง ${
                              education.endYear
                                ? dayjs(`01-01-${education.endYear}`).format("YYYY")
                                : "ไม่ระบุ"
                            }) ${
                              education.university
                                ? education.university
                                : "ไม่ระบุสถานศึกษา"
                            }`}
                          </Typography>
                          <Typography variant="body1" color="text.secondary">
                            {`${education.major || "-"}, ${education.faculty || "-"}, ${education.degree || "-"}`}
                          </Typography>
                          <Typography style={{ fontWeight: 700, marginTop: 8 }}>
                            {`เกรดเฉลี่ย: ${education.gpa ? education.gpa : "ไม่ระบุ"}`}
                          </Typography>
                        </div>
                      </Fragment>
                    ))}
                    </>
                  ) : (
                    <Button
                      onClick={()=>setOpenEducation((prev)=>({
                        ...prev,
                        isOpen: true,
                        isEdit: false,
                        eduMethod: (value)=>EducationAppend(value),
                      }))}
                    >
                      Add Education
                    </Button>
                  )}
                  </Grid>
                </Grid>

               <Grid container spacing={2} alignItems={"center"}>
                <Grid item xs={12} md={2}>
                  <Box>
                    <Typography variant="body1">Resume</Typography>
                    <Typography variant="body1" color="red">
                      *
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} md={10}>
                  <Controller 
                    control={control}
                    name="resume"
                    render={({field})=>(
                      
                        <input 
                          type="file"
                          accept=".pdf,.doc,.docx"
                          {...field}
                          style={{ display: 'none' }}  // Hide the default file input style
                          id="resume-upload"
                        />
                      
                    )}
                  />
                  <label htmlFor="resume-upload">
                    <Button variant="outlined" component="span">
                      <UploadFileOutlinedIcon style={{ marginRight: '8000px' }} />
                      Upload Resume
                    </Button>
                  </label>
                </Grid>
              </Grid>


                <Grid container spacing={2} alignItems={"center"}>
                  <Grid item xs={12} md={2}>
                    <Box>
                      <Typography variant="body1">Personal Website</Typography>
                      <Typography variant="caption" color="text.secondary">
                        <i>Private</i>
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={10}>
                    <Controller 
                      control={control}
                      name="website"
                      render={({field})=>(
                        <StyledTextFieldTheme
                          {...field}
                          label="Provide a link to your own professional website"
                          variant="filled"
                          fullWidth
                        />
                      )}
                    />
                  </Grid>
                </Grid>
              </Stack>
            </StyledStackForContent>
          </StyledBox>
        }
        {activeStep === 3 &&
        <StyledBox>
          <StyledStackForContent spacing={1}>
              <StyledHeader variant="h4">Account Security</StyledHeader>
              <StyledBoxForCaption>
                <Typography variant="body1" color="text.secondary">
                  Trust and safety is a big deal in our community. Please verify your
                  email and phone number so that we can keep your account secured.
                </Typography>
              </StyledBoxForCaption>
        
              <Divider style={{ marginTop: 20, marginBottom: 20 }} />
        
              <Stack spacing={2}>
                <Grid container spacing={2} alignItems={"center"}>
                  <Grid item xs={12} md={2}>
                    <EmailIcon />
                    <Typography variant="body1">Email</Typography>
                    <Typography variant="caption" color="text.secondary">
                      <i>Private</i>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Controller 
                      control={control}
                      name="email"
                      rules={{
                        required : { value : true, message : "กรุณาใส่อีเมลล์ติดต่อของคุณ"},
                      }}
                      render={({field})=>(
                        <StyledTextFieldTheme
                          {...field}
                          label="We'll never share your Email."
                          variant="filled"
                          fullWidth
                          helperText={ errors && errors.email && errors.email.message }
                          error={ errors && errors.email ? true : false }
                        />
                      )}
                    />
                  </Grid>
                </Grid>

                <Grid container spacing={2} alignItems={"center"}>
                  <Grid item xs={12} md={2}>
                    <LocalPhoneIcon />
                    <Typography variant="body1">Phone Number</Typography>
                    <Typography variant="caption" color="text.secondary">
                      <i>Private</i>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Controller 
                      control={control}
                      name="phone"
                      rules={{
                        required : { value : true, message : "กรุณาใส่เอบร์โทรศัพท์ติดต่อของคุณ"},
                      }}
                      render={({field})=>(
                        <StyledTextFieldTheme
                          {...field}
                          label="We'll never share your phone number."
                          variant="filled"
                          fullWidth
                          InputProps={{
                            inputComponent: NumberFormatTheme,
                          }}
                          inputProps={{
                            format: (value) => {
                              if(value.length >= 7){
                                return String(value).replace(/(\d{1,3})(\d{1,3})(\d{1,4})/,"$1-$2-$3")
                              } else if(value.length >= 4){
                                return String(value).replace(/(\d{1,3})(\d{1,3})/,"$1-$2")
                              } else {
                                return String(value)
                              }
                            },
                            maxLength: 12,
                            allowNegative: false,
                            allowLeadingZeros: true,
                            allowEmptyFormatting: false,
                            value: field.value,
                            onValueChange: (values) => {
                              const { value } = values;
                              field.onChange(value)
                            },
                          }}
                          helperText={ errors && errors.phone && errors.phone.message }
                          error={ errors && errors.phone ? true : false }
                        />
                      )}
                    />
                  </Grid>
                </Grid>
              </Stack>
            </StyledStackForContent>
            {errors && Object.keys(errors).length > 0 && (
              <Box display={"flex"} alignItems={"center"}>
                <WarningAmberRoundedIcon style={{ color: "red" }} />
                <Typography variant="caption" color={"red"}>กรุณากรอกข้อมูลให้ครบถ้วน</Typography>
              </Box>
            )}
        </StyledBox>
        }

        <ButtonBlue
          onClick={backActiveStep}
          disabled={activeStep === 0}
        >
          Back
        </ButtonBlue>
        {activeStep === 3 ? (
        <Button
          type={"submit"}
          disabled={disablebtn}
        >
          Submit
        </Button>
        ) : (
        <ButtonBlue
          onClick={nextActiveStep}
        >
          Next
        </ButtonBlue>
        
        )}
        </form>

        {openOccupation.isOpen &&
          <DialogOccupation
            open={openOccupation.isOpen}
            drawerConfig={openOccupation}
            handleClose={()=>{
              setOpenOccupation((prev)=>({
                ...prev,
                isOpen: false,
              }))
            }}
            onSubmit={openOccupation.occupationMethod}
          />
        }
        {openSkill.isOpen &&
          <DialogSkill
            open={openSkill.isOpen}
            drawerConfig={openSkill}
            handleClose={()=>{
              setOpenSkill((prev)=>({
                ...prev,
                isOpen: false,
              }))
            }}
            onSubmit={openSkill.skillMethod}
          />
        }
        {openEducation.isOpen &&
          <DialogEducation
            open={openEducation.isOpen}
            drawerConfig={openEducation}
            handleClose={()=>{
              setOpenEducation((prev)=>({
                ...prev,
                isOpen: false,
              }))
            }}
            onSubmit={openEducation.eduMethod}
          />
        }
        <AlertResponse
          open={openAlert.open}
          handleClose={handleCloseAlert}
          alertType={openAlert.alertType}
          label={openAlert.label}
        />
        
      </Container>
    </StyledRoot>
  );
  
}

export default JoinSeller;
