import React, { Fragment, useEffect, useState } from "react";
import { Container, Grid, styled } from "@mui/material";

import ProgressBarProfile from "../shared/general/ProgressBarProfile"
import LeftPanel from "./leftPanel";
import RightPanel from "./rightPanel";
import companyStore from "../assets/data/company"
//import { getCompanyManage } from "../../../actions/company";
import { getAllBusinessGroup } from "../../../actions/business";

//import company from "../assets/data/company";
import bankDetailStore from "../assets/data/bankDetail"

const StyledRoot = styled("div")({
    marginTop:100,
  "& .part-progressbar": {
    paddingTop: 24,
    paddingBottom: 24,
  },
  "& .header-text": {
    fontSize: 20,
  },
  "& .edit-button": {
    borderRadius: 19,
    "& i": {
      fontSize: 12,
      marginRight: 8,
    }
  },
});

// Corrected functional component syntax
const CompanyManagePage = (props) => {
  const [company, setCompany] = useState([0]);
  const [banks, setBanks] = useState([0]);
  const [profileProgress, setProfileProgress] = useState(15); 
  const [businessGroups, setBusinessGroups] = useState([]);

  useEffect(() => {
    setCompany(null)
    if(companyStore != null){
      setCompany({...companyStore});
      setProfileProgress(companyStore.progress)
    }
  }, [companyStore])


  
  return (
    <StyledRoot className="page">
        <Container maxWidth="lg">
           <Fragment>
            <div className="part-progressbar">
                <ProgressBarProfile progressValue={profileProgress} />
            </div>    
            <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                    <LeftPanel company={company}/>
                </Grid>    
                <Grid item xs={12} sm={8}>
                    <RightPanel 
                    //companies={mockCompanyData}
                        company={company}
                        banks={banks}
                        bankDetail={company.bankDetail}
                        companyAddress={company}
                        branches={company.branches}
                    />
                </Grid>
              </Grid>
            
            </Fragment> 
        </Container>
    </StyledRoot>
  );
}

export default CompanyManagePage;
