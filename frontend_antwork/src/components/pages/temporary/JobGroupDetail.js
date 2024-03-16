import React, { Fragment } from 'react';
import { styled, Typography, Container, Paper } from '@mui/material';
import { useParams } from 'react-router-dom';
import jobGroup from '../assets/data/jobGroup';
import CardTemporary from '../shared/general/Card/CardTemporary';

const StyleTypography = styled(Typography)({
  borderLeft: "4px solid transparent",
  borderImage: "linear-gradient(0deg, rgba(136,213,254,1) 0%, rgba(254,184,207,1) 99%, rgba(254,184,207,1) 100%) 5",
  padding: 5
});

const StyledRoot = styled("div")({
  minWidth: 350,
  width: "100%",
  backgroundColor: "#f1f4f9",
  paddingBottom: 36,
  marginTop: "10%",
});

const StyledPaper = styled(Paper)({
  padding: "40px 0px",
  width: "100%",
  borderRadius: 20,
  border: "none",
  "& .wrap": {
    padding: "0 16px",
    textAlign: "center",
    "& .MuiButton-root": {
      marginTop: 16,
    },
  },
});

function JobGroupDetail() {
  const { id } = useParams();
  const jobGroupData = jobGroup.find((group) => group.idJobGroup === parseInt(id));

  return (
    <StyledRoot className={`page`}>
      <Container maxWidth="md">
        <Fragment>
          <StyleTypography variant="h4" style={{ fontWeight: 600 }}>
            {jobGroupData ? jobGroupData.name : ''}
          </StyleTypography>
          <CardTemporary />
        </Fragment>
      </Container>
    </StyledRoot>
  );
}

export default JobGroupDetail;
