import React, { useState } from "react";
import { Divider, Grid, styled, Typography } from "@mui/material";
import CardStyle from "../shared/general/Card";
import ButtonBlue from "../shared/general/ButtonBlue";
import Logo from "./logo"
import  DrawerLeftPanel from "./drawerLeftPanel";

const StyledRoot = styled("div")({
  padding: 24,
  paddingTop: 16,
  "& i": {
    marginRight: 8,
  },
  "& .dropzone-container": {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 20,
    borderWidth: 2,
    borderRadius: 2,
    borderColor: "#eeeeee",
    borderStyle: "dashed",
    color: "#bdbdbd",
    outline: "none",
    transition: "border 0.24s ease-in-out",
    margin: "auto",
    borderRadius: 8,
    padding: 8,
    border: "1px dashed rgba(145, 158, 171, 0.32)",
    "& .inner-dropzone-config": {
      width: "100%",
      outline: "none",
      position: "relative",
      cursor: "pointer",
    },
    "& .company-logo": {
      height: 160,
    },
    "& .company-signature": {
      height: 100,
    },
    "& img": {
      objectFit: "cover",
      objectPosition: "center",
      width: "inherit",
      height: "inherit",
    },
    "& .placeholder-dropzone": {
      position: "absolute", 
      top: "50%", 
      left: "50%", 
      transform: "translate(-50%,-50%)", 
      textAlign: "center",
      "& .MuiTypography-root": {
        color: "#9e9e9e",
      }
    }
  },
  "& .MuiDivider-root": {
    borderWidth: "0px 0px thin",
    borderColor: "#919eab52",
    borderStyle: "dashed",
  },
  "& .dropzone": {
    border: `2px solid rgba(0, 0, 0, 0.23)`,
    borderRadius: 10,
    background: "white",
    height: 150,
    outline: "none",
    overflow: "hidden",
    userSelect: "none",
    // padding: 20,
    "& .MuiTypography-root, & svg": {
      color: "#919eab"
    },
    "& .img-show": {
      height: "inherit",
      display: "flex",
      justifyContent: "center",
      position: "relative",
      "& img": {
        width: "100%",
        objectFit: "contain"
      },
      "& .delete-button": {
        width: 35,
        height: 35,
        position: "absolute",
        top: 0,
        right: 0,
        "& i": {
          color: "#919eab",
          margin: 0,
        }
      }
    },
    "& .empty-img": {
      minHeight: "inherit",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      "& i": {
        fontSize: 24,
        color: "#919eab",
      }
    }
  },
  "& .signature": {
    height: 100,
  }
});

const LeftPanel = (props) => {
      const [isOpenDrawerLeftPanel, setIsOpenDrawerLeftPanel] = useState(false);
      const { company } = props

    return(
        <CardStyle>
            <StyledRoot>
                <Grid container spacing={2}>
                    <Grid item xs={12} container justifyContent="space-between" alignItems="center">
                        <Typography className="header-text" variant="h7">ทั่วไป</Typography>
                        <ButtonBlue className="edit-button" variant="outlined" size="small" onClick={()=>{setIsOpenDrawerLeftPanel(true)}}><i className="fa-regular fa-pen"></i>แก้ไข</ButtonBlue>
                    </Grid>
                    <Grid item xs={12}>
                        <Logo
                        // data={company.companyImageURL}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Typography variant="caption" color="text.secondary">ชื่อบริษัท</Typography>
                        {/* <Typography>{company.companyName || "-"}</Typography> */}
                        <Typography>SCGGGGGG </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Divider />
                    </Grid>

                    <Grid item xs={12}>
                        <Typography variant="caption" color="text.secondary">ผู้ติดต่อ</Typography>
                        {/* <Typography>{company.mainContactName || "-"}</Typography> */}
                        <Typography>Praeawa </Typography>
                        <Typography variant="caption" color="text.secondary">เบอร์โทรศัพท์</Typography>
                        {/* <Typography>{(company.mainContactPhone && phoneNumberFormat(company.mainContactPhone)) || "-"}</Typography> */}
                        <Typography>095-258-6831</Typography>
                        <Typography variant="caption" color="text.secondary">อีเมล</Typography>
                        {/* <Typography>{company.mainContactEmail || "-"}</Typography> */}
                        <Typography>tipmaanee9012gmail.com</Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Divider />
                    </Grid>

                    {isOpenDrawerLeftPanel && (
                        <DrawerLeftPanel
                            open={isOpenDrawerLeftPanel}
                            onClose={()=>{setIsOpenDrawerLeftPanel(false)}}
                            company={company}
                        />
                        )}
                </Grid>
            </StyledRoot>
        </CardStyle>
    )
    
}
export default LeftPanel;