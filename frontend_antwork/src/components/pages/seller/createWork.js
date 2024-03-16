import React, { Fragment } from 'react';
import CardStyle from '../shared/general/Card';
import { useHistory } from "react-router-dom";
import { useForm, Controller } from 'react-hook-form';
import {
  Grid,
  Typography,
  Switch,
  Box,
  Button,
  styled,
  Chip,
} from "@mui/material";

const StyledRoot = styled("div")({
  minWidth:  0,
  width: "100%",
  height:0,
  paddingTop: 80,
});

const StyledForm = styled("div")({
  padding: 24,
  paddingTop: 16,
  "& .is-false": {
    color: "#9e9e9e",
    backgroundColor: "#e4e4e4",
  },
});

const StyledChip = styled(Chip)({
  color: "#b72136",
  backgroundColor: "#ff484229",
  fontWeight: 700,
  borderRadius: 6,
});

const CreateWork = () => {
  const history = useHistory();
  const { control, handleSubmit, watch, setValue } = useForm({
    defaultValues: {
      isUrgent: false,
    },
  });

  const isUrgentWatch = watch("isUrgent");

  const handleSwitchChange = (event) => {
    setValue("isUrgent", event.target.checked);
  };

  const onSubmit = (data) => {
    // Handle your form submission logic here
  };

  return (
    <StyledRoot className={`page`}>
      <Fragment>
        <Box className="header">
          <Typography className="header" variant="h4">เปิดรับสมัครงาน</Typography>
        </Box>
        <CardStyle>
          <StyledForm>
            <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <Controller
                    control={control}
                    name="isUrgent"
                    render={({ field }) => (
                      <Fragment>
                        <Switch
                          {...field}
                          checked={field.value}
                          onChange={handleSwitchChange}
                        />
                        <StyledChip className={isUrgentWatch ? `` : `is-false`} label="งานด่วน" size="small"/>
                      </Fragment>
                    )}
                  />
                </Grid>
              </Grid>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </form>
          </StyledForm>
        </CardStyle>
      </Fragment>
    </StyledRoot>
  );
}

export default CreateWork;
