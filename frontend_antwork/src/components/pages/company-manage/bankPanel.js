import { Grid, styled, Typography } from "@mui/material";
import React, { useState } from "react";
import ButtonBlue from "../shared/general/ButtonBlue";
import DrawerBank from "./drawerBank";

const StyledRoot = styled("div")({

})

const BankPanel = (props) => {

  const { bankDetail, company, banks } = props;

  const [isOpenDrawerBank, setIsOpenDrawerBank] = useState(false);

  return(
    <StyledRoot>
      <Grid container spacing={1}>
        <Grid item xs={12} container justifyContent="space-between" alignItems="center">
          <Typography className="header-text" variant="h7">ธนาคาร</Typography>
          <ButtonBlue className="edit-button" variant="outlined" size="small" onClick={()=>{setIsOpenDrawerBank(true)}}><i className="fa-regular fa-pen"></i>แก้ไข</ButtonBlue>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="caption" color="text.secondary">ชื่อธนาคาร</Typography>
          <Typography>{bankDetail && bankDetail.bankName || "-"}</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="caption" color="text.secondary">เลขที่บัญชี</Typography>
          <Typography>{bankDetail && bankDetail.accountNo || "-"}</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="caption" color="text.secondary">ชื่อบัญชี</Typography>
          <Typography>{bankDetail && bankDetail.accountName || "-"}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="caption" color="text.secondary">ชื่อสาขา</Typography>
          <Typography>{bankDetail && bankDetail.branchName || "-"}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="caption" color="text.secondary">ที่อยู่สาขา</Typography>
          <Typography>{bankDetail && bankDetail.branchAddress || "-"}</Typography>
        </Grid>
      </Grid>

      {isOpenDrawerBank && (
        <DrawerBank
          open={isOpenDrawerBank}
          onClose={()=>{setIsOpenDrawerBank(false)}}
          bankDetail={bankDetail}
          company={company}
          banks={banks}
        />
      )}
    </StyledRoot>
  )
};

export default BankPanel;
