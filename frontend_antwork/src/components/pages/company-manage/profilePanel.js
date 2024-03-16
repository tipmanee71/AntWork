import React, { useState } from "react";
import { Grid, styled, Typography } from "@mui/material";
import ButtonBlue from "../shared/general/ButtonBlue";
import DrawerProfile from "./drawerProfile.js";

import company from "../assets/data/company.js";
const StyledRoot = styled("div")({
  // "& .header-text": {
  //   fontSize: 20,
  // },
  // "& .edit-button": {
  //   borderRadius: 19,
  //   "& i": {
  //     fontSize: 12,
  //   }
  // },
})

const ProfilePanel = (props) => {

  //const { company } = props;

  const [isOpenDrawerProfile, setIsOpenDrawerProfile] = useState(false);

  return(
    <StyledRoot>
      <Grid container spacing={2}>
        <Grid item xs={12} container justifyContent="space-between" alignItems="center">
          <Typography className="header-text" variant="h7">บริษัท</Typography>
          <ButtonBlue className="edit-button" variant="outlined" size="small" onClick={()=>{setIsOpenDrawerProfile(true)}}><i className="fa-regular fa-pen"></i>แก้ไข</ButtonBlue>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography variant="caption" color="text.secondary">รหัสบริษัท</Typography>
          <Typography>{company[0].companyCode || "-"}</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="caption" color="text.secondary">เลขประจำตัวผู้เสียภาษี</Typography>
          <Typography>{company[0].companySocialSecurityAccount || "-"}</Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography variant="caption" color="text.secondary">ชื่อผู้มีอำนาจของบริษัท คนที่ 1</Typography>
          <Typography>{company[0].authorizedSignatureOneName || "-"}</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="caption" color="text.secondary">ตำแหน่งผู้มีอำนาจของบริษัท คนที่ 1</Typography>
          <Typography>{company[0].authorizedSignatureOnePosition || "-"}</Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography variant="caption" color="text.secondary">ชื่อผู้มีอำนาจของบริษัท คนที่ 2</Typography>
          <Typography>{company[0].authorizedSignatureTwoName || "-"}</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="caption" color="text.secondary">ตำแหน่งผู้มีอำนาจของบริษัท คนที่ 2</Typography>
          <Typography>{company[0].authorizedSignatureTwoPosition || "-"}</Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography variant="caption" color="text.secondary">ชื่อพยาน</Typography>
          <Typography>{company[0].witnessSignatureName || "-"}</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="caption" color="text.secondary">ตำแหน่งพยาน</Typography>
          <Typography>{company[0].witnessSignaturePosition || "-"}</Typography>
        </Grid>

        <Grid item xs={12} container justifyContent="space-between" alignItems="center">
          <Typography className="header-text" variant="h7">บริษัทแม่</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>{company[0].parentCompanyName || "-"}</Typography>
        </Grid>
      </Grid>

      {isOpenDrawerProfile && (
        <DrawerProfile
          open={isOpenDrawerProfile}
          onClose={()=>{setIsOpenDrawerProfile(false)}}
          company={company}
        />
      )}
    </StyledRoot>
  )
};

export default ProfilePanel;
