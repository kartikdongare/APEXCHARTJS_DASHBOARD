import React from "react";
import Grid from "@mui/material/Grid";
import "./MarketingChart.css";
import { Typography } from "@mui/material";
import Selectors from "./Selectors";
import Graph1 from './Graph1'
import Graph2 from "./Graph2";
import Graph3 from "./Graph3";
import Graph4 from "./Graph4";

const MarketingChart = () => {
  return (
    <Grid container className="main-container"  rowSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid container  xs={12} sx={{margin:{xs:'15px'}}}>
        <Grid item xs={12} md={6} >
          <Typography variant="h6" style={{ fontWeight: "bold" }}>
            Marketing Performance
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography>
            <Selectors />
          </Typography>
        </Grid>
      </Grid>
      <Grid container  xs={12} columnSpacing={2} sx={{marginBottom:{xs:'15px'}}} rowSpacing={{ xs: 2, sm: 2, md: 3 }}>
        <Grid item md={6} sm={6} xs={12}>
            <Graph1/>
        </Grid>
        <Grid item md={6} sm={6} xs={12}>
            <Graph2/>
        </Grid>
      </Grid>
      <Grid container  xs={12}  columnSpacing={2} rowSpacing={{ xs: 2, sm: 2, md: 3 }}>
        <Grid item md={6} sm={6} xs={12}>
            <Graph3/>
        </Grid>
        <Grid item md={6} sm={6} xs={12}>
            <Graph4/>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MarketingChart;
