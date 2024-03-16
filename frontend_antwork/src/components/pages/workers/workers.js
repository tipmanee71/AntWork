import React from "react";
import { styled } from "@mui/material/styles";

import { Typography, Grid } from "@mui/material";
import ButtonBlue from "../shared/general/ButtonBlue";
import ButtonOcean from "../shared/general/ButtonOcean";
import ButtonWhite from "../shared/general/ButtonWhite";
import Stack from "@mui/material/Stack";

import Box from "@mui/material/Box";

import WorkersCard from "../shared/general/CardWorkers";

const StyledRoot = styled("div")({
  paddingBottom: 50,
  "& .category-head": {
    marginBottom: 24,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  "& .wrap-card": {
    position: "relative",
  },
});

const StyledBox = styled(Box)({
  border: "1px solid",
  borderColor: "#CFD3D7",
  borderRadius: "12px",
  padding: 35,
  marginTop: 60,
});

const Workers = (props) => {
  const { locations } = props;

  return (
    <StyledRoot>
      <StyledBox>
        <div className="category-head">
          <Typography variant="h4" color="white" gutterBottom>
            Most Popular Workers
          </Typography>
          <div>
            <ButtonWhite variant="outlined">
              See All{" "}
              <i
                style={{ lineHeight: 0, paddingLeft: 6 }}
                class="fi fi-br-angle-small-right"
              ></i>
            </ButtonWhite>
          </div>
        </div>
        <div className="wrap-card">
          <Stack
            direction="row"
            spacing={2}
            style={{ justifyContent: "space-between" }}
          >
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {Array.from(Array(3)).map((_, index) => (
                <Grid item xs={2} sm={4} md={4} key={index}>
                  <WorkersCard />
                </Grid>
              ))}
            </Grid>
          </Stack>
        </div>
      </StyledBox>
      <Box>
        <div className="category-head" style={{ marginTop: 48 }}>
          <Typography variant="h5" color="white" gutterBottom>
            Newest Workers
          </Typography>
          <div>
            <ButtonWhite variant="text">
              See All{" "}
              <i
                style={{ lineHeight: 0}}
                class="fi fi-br-angle-small-right"
              ></i>
            </ButtonWhite>
          </div>
        </div>
        <div className="wrap-card">
          <Stack
            direction="row"
            spacing={2}
            style={{ justifyContent: "space-between" }}
          >
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
              style={{justifyContent: "center"}}
            >
              {Array.from(Array(9)).map((_, index) => (
                <Grid item xs={2} sm={4} md={4} key={index}>
                  <WorkersCard />
                </Grid>
              ))}
            </Grid>
          </Stack>
        </div>
      </Box>
    </StyledRoot>
  );
};

export default Workers;
