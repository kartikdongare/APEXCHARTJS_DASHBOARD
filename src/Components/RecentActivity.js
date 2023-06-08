import React from "react";
import "./RecentActivity.css";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Grid, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const options = [
  "None",
  "Atria",
  "Callisto",
  "Dione",
  "Ganymede",
];

const ITEM_HEIGHT = 48;
const RecentActivity = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="main-recent">
      <Typography className="recent-header">
        <Typography>Recent Activity</Typography>
        <Typography variant="div">
          <IconButton
            aria-label="more"
            id="long-button"
            aria-controls={open ? "long-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="long-menu"
            MenuListProps={{
              "aria-labelledby": "long-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: "20ch",
              },
            }}
          >
            {options.map((option) => (
              <MenuItem
                key={option}
                selected={option === "Pyxis"}
                onClick={handleClose}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
        </Typography>
      </Typography>
      <Divider style={{ margin: "20px" }} />
      <Grid container >
        <Grid item sx={{marginBottom:'20px',fontWeight:'bold'}}>Today</Grid>
        <Grid container>
          <Grid item xs={2}>
            <Typography className="icon1">
            <FacebookIcon style={{margin:'10px'}}/>
            </Typography>
          </Grid>
          <Grid container xs={10} >
            <Grid item xs={12}>
              <Typography style={{fontWeight:'bold'}}>Facebook</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>Posted a video on facebook</Typography>
            </Grid>
          </Grid>
        </Grid>

        <Divider style={{ margin: "20px" }} />
        <Grid container>
          <Grid item xs={2}>
            <Typography className="icon2">
              <InstagramIcon/>
            </Typography>
          </Grid>
          <Grid container xs={10}>
            <Grid item xs={12}>
              <Typography style={{fontWeight:'bold'}}>Instagram</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>Posted a video on instagram</Typography>
            </Grid>
          </Grid>
        </Grid>

        <Divider style={{ margin: "20px" }} />
        <Grid container>
          <Grid item xs={2}>
            <Typography className="icon3">
              <LinkedInIcon/>
            </Typography>
          </Grid>
          <Grid container xs={10}>
            <Grid item xs={12}>
              <Typography style={{fontWeight:'bold'}}>LinkedIn</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>Posted a video on linkedIn</Typography>
            </Grid>
          </Grid>
        </Grid>

        <Divider style={{ margin: "20px" }} />
        <Grid container>
          <Grid item xs={2}>
            <Typography className="icon4">
              <TwitterIcon/>
            </Typography>
          </Grid>
          <Grid container xs={10}>
            <Grid item xs={12}>
              <Typography style={{fontWeight:'bold'}}>Twitter</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>Posted a video on twitter</Typography>
            </Grid>
          </Grid>
        </Grid>

        <Divider style={{ margin: "20px" }} />
        <Grid container style={{display:'flex',justifyContent:'center'}}>
          <Button variant="outlined">See All Activities</Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default RecentActivity;
