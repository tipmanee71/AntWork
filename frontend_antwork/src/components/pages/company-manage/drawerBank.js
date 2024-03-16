import React from "react";
import { Grid, MenuItem, styled } from "@mui/material";
import DrawerCustom from "../shared/general/Drawer";
import ButtonBlue from "../shared/general/ButtonBlue";
import { Controller, useForm } from "react-hook-form";
import TextFieldTheme from "../shared/general/TextFieldTheme";
import bankDetail from "../assets/data/bankDetail";
import { useDispatch, useSelector } from "react-redux";
 import { getCompanyManage, updateCompanyManageBankDetail } from "../../../actions/company";

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

const DrawerBank = (props) => {
  const { open, onClose, company } = props;

  const dispatch = useDispatch();

  //const { result: bankDetail } = useSelector((state) => state.bank)

  const { control, handleSubmit, formState: { errors, dirtyFields } } = useForm({
    defaultValues: {
      idBank: (bankDetail && bankDetail.idBank) || "",
      accountNo: (bankDetail && bankDetail.accountNo) || "",
      accountName: (bankDetail && bankDetail.accountName) || "",
      branchName: (bankDetail && bankDetail.branchName) || "",
      branchAddress: (bankDetail && bankDetail.branchAddress) || "",
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

    const response = await dispatch(updateCompanyManageBankDetail(changedForm));
    if (response.status === 200){
      dispatch(getCompanyManage());
      onClose();
    }

  }

  return(
    <DrawerCustom
      open={open}
      title="แก้ไขธนาคาร"
      anchor="right"
    >
      <StyledRoot>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Controller
                control={control}
                name="idBank"
                rules={{
                  required: {value: true, message: "กรุณากรอกชื่อธนาคาร"}
                }}
                render={({field})=>(
                  <TextFieldTheme
                    {...field}
                    label="ชื่อธนาคาร"
                    helperText={errors && errors.idBank && errors.idBank.message}
                    error={errors && errors.idBank ? true: false}
                    select
                  >
                    {bankDetail.map((bank, index) => (
                      <MenuItem key={`bank_${index}`} value={bank.idBank}>{bank.bankName}</MenuItem>
                    ))}
                  </TextFieldTheme>
                )}
              />
            </Grid>

            <Grid item xs={12}>
              <Controller
                control={control}
                name="accountNo"
                rules={{
                  required: {value: true, message: "กรุณากรอกเลขที่บัญชี"}
                }}
                render={({field})=>(
                  <TextFieldTheme
                    {...field}
                    label="เลขที่บัญชี"
                    helperText={errors && errors.accountNo && errors.accountNo.message}
                    error={errors && errors.accountNo ? true: false}
                  />
                )}
              />
            </Grid>

            <Grid item xs={12}>
              <Controller
                control={control}
                name="accountName"
                rules={{
                  required: {value: true, message: "กรุณากรอกชื่อบัญชี"}
                }}
                render={({field})=>(
                  <TextFieldTheme
                    {...field}
                    label="ชื่อบัญชี"
                    helperText={errors && errors.accountName && errors.accountName.message}
                    error={errors && errors.accountName ? true: false}
                  />
                )}
              />
            </Grid>

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
                name="branchAddress"
                rules={{
                  required: {value: true, message: "กรุณากรอกที่อยู่สาขา"}
                }}
                render={({field})=>(
                  <TextFieldTheme
                    {...field}
                    label="ที่อยู่สาขา"
                    multiline
                    rows={3}
                    helperText={errors && errors.branchAddress && errors.branchAddress.message}
                    error={errors && errors.branchAddress ? true: false}
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

export default DrawerBank;