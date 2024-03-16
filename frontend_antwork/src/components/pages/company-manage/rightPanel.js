import React, { useState } from "react";
import { styled, Tab, Tabs, Typography, Card, CardContent } from "@mui/material";
import CardStyle from "../shared/general/Card";
import ProfilePanel from "./profilePanel";
import AddressPanel from "./addressPanel";
import BankPanel from "./bankPanel";
import InformationPanel from "./informationPanel";
import GeneretorChildsCompany from "./generatorChildsCompany";
//import AdminSetting from "./adminSetting";

const StyledRoot = styled("div")(({ theme }) => ({
  padding: theme.spacing(3), // Use theme spacing for padding
  paddingTop: theme.spacing(2), // Use theme spacing for top padding
  "& .MuiTabs-root": {
    marginBottom: theme.spacing(2), // Use theme spacing for marginBottom
  },
  "& i": {
    marginRight: theme.spacing(1), // Use theme spacing for marginRight
  },
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2), // Adjust padding for small screens
    paddingTop: theme.spacing(1), // Adjust top padding for small screens
  },
}));


const RightPanel = (props) => {
  const { company, bankDetail, banks, companyAddress, branches } = props;

  const [tabValue, setTabValue] = useState(0);

  const handleTabChangeHandler = (event, newValue) => {
    setTabValue(newValue);
  }

  return(
    <CardStyle>
        <StyledRoot>
          <Tabs 
          value={tabValue} 
          onChange={handleTabChangeHandler} 
          variant="scrollable" 
          scrollButtons
          //allowScrollButtonsMobile
          aria-label="scrollable auto tabs example"
          sx={{
            color: "#F394BC",
            '& .Mui-selected': {
            color: 'linear-gradient(0deg, rgba(136,213,254,1) 0%, rgba(254,184,207,1) 99%, rgba(254,184,207,1) 100%) 5', // Text color for selected tab
            },
            '& .MuiTabs-indicator': {
            backgroundColor: '#F394BC', // Indicator color
            },
            
            
          }}
          >
                <Tab icon={<i className="fa-solid fa-building"></i>}iconPosition="start" label="บริษัท" />
                <Tab icon={<i className="fa-solid fa-address-card"></i>}iconPosition="start" label="ที่อยู่" />
                <Tab icon={<i className="fa-solid fa-building-columns"></i>}iconPosition="start" label="ธนาคาร" />
                <Tab icon={<i className="fa-solid fa-circle-info"></i>}iconPosition="start" label="รายละเอียด" />
                <Tab icon={<i className="fa-solid fa-share-from-square"></i>}iconPosition="start" label="ลิงก์บริษัทลูก" />
                <Tab icon={<i className="fa-solid fa-users-gear"></i>}iconPosition="start" label="ผู้ดูแล" />
                </Tabs>
        
        
            {/* Render different panels based on the selected tab */}
            {tabValue === 0 && <ProfilePanel company={company} />}
            {tabValue === 1 && <AddressPanel company={company} companyAddress={companyAddress} branches={branches}/>}
            {tabValue === 2 && <BankPanel banks={banks} bankDetail={bankDetail} company={company}/>}
            {tabValue === 3 && <InformationPanel company={company}/>}
            {tabValue === 4 && <GeneretorChildsCompany />}
            {/* {tabValue === 5 && <AdminSetting adminList={adminList} setAdminList={setAdminList}/>} */}
        </StyledRoot>
    </CardStyle>
  );
}

export default RightPanel;
