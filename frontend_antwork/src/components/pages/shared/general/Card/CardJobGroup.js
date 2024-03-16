import React, { Fragment } from 'react';
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useHistory } from 'react-router-dom';

const StyleCardRoot = styled(Card)({
  display: 'block',
  borderRadius: 20,
  height: 150,
  background: '#FFFFFF', // Set the background color to #FFFFFF
  border: `2px solid  rgba(136,213,254,1)`, 
  boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.13)',
  cursor: 'pointer',
});



const StyleIcon = styled(CardContent)({
  display: 'contents',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '50%', // Adjust the height of the icon container
  // background: 'linear-gradient(to right, #f2d0e2, #e6d9ef, #d7ecf1)', // Updated color
});

const StyleCardContent = styled(CardContent)({
  display: 'block',
  textAlign: 'center',
  color: '#000000',
  fontSize: 30,
  fontWeight: '500',
  lineHeight: 1.4, // Adjusted lineHeight for better readability
  letterSpacing: 0.3,
  wordWrap: 'break-word',
  
});

const CardjobGroup = ({ jobGroup, navigateTo }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(navigateTo);
  };

  return (
    <Fragment>
      <StyleCardRoot onClick={handleClick}>
        <Grid container direction="column" justifyContent="center" alignItems="center" height="100%" gap={1}>
          <Grid item>
            <StyleIcon>
              {jobGroup.icon}
            </StyleIcon>
          </Grid>
          <Grid item>
            <StyleCardContent>
              <Typography variant="h6" component="h2">
                {jobGroup.name}
              </Typography>
            </StyleCardContent>
          </Grid>
        </Grid>
      
      </StyleCardRoot>
    </Fragment>
  );
};

export default CardjobGroup;
