import React, { Fragment, useState } from "react";
import { Grid, styled, Typography } from "@mui/material";
import ButtonBlue from "../shared/general/ButtonBlue";
import DrawerInformation from "./drawerInformation";

const StyledRoot = styled("div")({

})

const InformationPanel = (props) => {

  const { company } = props;
  
  const [isOpenDrawerInformation, setIsOpenDrawerInformation] = useState(false);


  return(
    <StyledRoot>
      <Grid container spacing={1}>
        <Grid item xs={12} container justifyContent="space-between" alignItems="center">
          <Typography className="header-text" variant="h7">รายละเอียด</Typography>
          <ButtonBlue className="edit-button" variant="outlined" size="small" onClick={()=>{setIsOpenDrawerInformation(true)}}><i className="fa-regular fa-pen"></i>แก้ไข</ButtonBlue>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="caption" color="text.secondary">กลุ่มธุรกิจ</Typography>
          <Typography>{company.businessGroupName || "-"}</Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="caption" color="text.secondary">ขนาดองค์กร</Typography>
          <Typography>
            {
              company.companySize ?
                <Fragment>
                  {company.companySize === "small" && "ขนาดเล็ก (น้อยกว่า 50 คน)"}
                  {company.companySize === "medium" && "ขนาดกลาง (51-200 คน)"}
                  {company.companySize === "large" && "ขนาดใหญ่ (มากกว่า 200 คน)"}
                </Fragment>
              : "-"
            }
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="caption" color="text.secondary">เกี่ยวกับบริษัท</Typography>
          <Typography>{company.companyAbout || "-"}</Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="caption" color="text.secondary">สิทธิประโยชน์</Typography>
          <Typography>{company.companyBenefits || "-"}</Typography>
        </Grid>
      </Grid>

      {isOpenDrawerInformation && (
        <DrawerInformation
          open={isOpenDrawerInformation}
          onClose={()=>{setIsOpenDrawerInformation(false)}}
          company={company}
        />
      )}
    </StyledRoot>
  )
}

export default InformationPanel;