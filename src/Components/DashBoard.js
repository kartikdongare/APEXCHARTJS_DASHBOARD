import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import HelpIcon from "@mui/icons-material/Help";
import Person3OutlinedIcon from "@mui/icons-material/Person3Outlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import MarketingChart from "../Components/MarketingChart";
import Profile from './Profile'
import RecentActivity from './RecentActivity'


export default function DashBoard() {
  return (
    <Grid container columnSpacing={4} >
      <Grid item  md={8} xs={12} >
        <Grid container rowSpacing={4}>
          <Grid item xs={12}>
            <Grid container columnSpacing={2} rowSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={12} md={4} sm={4} >
                <Typography
                  component="div"
                  className="card1"
                  style={{ color: "white" }}
                >
                  <Box className="box1">
                    <Typography>
                    <VisibilityIcon
                      style={{ color: "white" }}
                    />
                    </Typography>
                    <Typography style={{ color: "white" }}>10,000</Typography>
                    <Typography style={{ color: "white", opacity: "0.4" }}>
                      Total view
                    </Typography>
                  </Box>
                  <Box className="box2">
                    <Typography>
                      <ArrowUpwardIcon
                        style={{ color: "white", fontSize: "15px" }}
                      />
                      1.5%
                    </Typography>
                    <HelpIcon style={{ opacity: "0.4", fontSize: "20px" }} />
                  </Box>
                </Typography>
              </Grid>
              <Grid item xs={12} md={4} sm={4}>
                <Typography
                  component="div"
                  className="card2"
                  style={{ color: "white" }}
                >
                  <Box className="box1">
                    <Person3OutlinedIcon
                      style={{ color: "white" }}
                      className="icons1"
                    />
                    <Typography style={{ color: "white" }}>10,000</Typography>
                    <Typography style={{ color: "white", opacity: "0.4" }}>
                      Followers
                    </Typography>
                  </Box>
                  <Box className="box2">
                    <Typography>
                      <ArrowUpwardIcon
                        style={{ color: "white", fontSize: "15px" }}
                      />
                      1.5%
                    </Typography>
                    <HelpIcon style={{ opacity: "0.4", fontSize: "20px" }} />
                  </Box>
                </Typography>
              </Grid>
              <Grid item xs={12} md={4} sm={4}>
                <Typography
                  component="div"
                  className="card3"
                  style={{ color: "white" }}
                >
                  <Box className="box1">
                    <HandshakeOutlinedIcon
                      style={{ color: "white" }}
                      className="icons1"
                    />
                    <Typography style={{ color: "white" }}>10,000</Typography>
                    <Typography style={{ color: "white", opacity: "0.4" }}>
                      Partership
                    </Typography>
                  </Box>
                  <Box className="box2">
                    <Typography>
                      <ArrowUpwardIcon
                        style={{ color: "white", fontSize: "15px" }}
                      />
                      1.5%
                    </Typography>
                    <HelpIcon style={{ opacity: "0.4", fontSize: "20px" }} />
                  </Box>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          
          <Grid item xs={12}>
            <MarketingChart />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={4} sx={{marginTop:{xs:'20px'}}}>
        <Grid container rowSpacing={4}>
          <Grid item xs={12} >
            <Profile/>
          </Grid>
          <Grid item xs={12}>
            <RecentActivity/>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
