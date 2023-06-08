import React from "react";
import "./Profile.css";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import { Grid, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Button from "@mui/material/Button";
import AddIcon from '@mui/icons-material/Add';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

const Profile = () => {
  return (
    <Box className="main-profile">
      <Box className="box1">
        <Box>
          <Avatar
            alt="Remy Sharp"
            src="Tiger-Shroff-collaborates-with-Mahesh-Bhupathi-to-expand-his-active-wear-brand-Prowl.jpg"
            sx={{ width: 56, height: 56 }}
          />
        </Box>
        <Typography variant="h6">
          Tiger Shroff{" "}
          <Typography variant="span">
            <img
              alt="Remy Sharp"
              src="1930264_check_complete_done_green_success_icon.svg"
              style={{ width: "12px", height: "12px" }}
            />
          </Typography>
        </Typography>
        <Box style={{ display: "flex", justifyContent: "center" }}>
          <LocationOnIcon />
          <Typography>Kharadi ,Pune</Typography>
        </Box>
      </Box>
      <Box className="box2">
        <Box className="sub-box2">
          <Typography variant="h6">15,789</Typography>
          <Typography variant="p">Post</Typography>
        </Box>
        <Box className="sub-box2">
          <Typography variant="h6">500</Typography>
          <Typography variant="p">Followers</Typography>
        </Box> 
        <Box className="sub-box2">
          <Typography variant="h6">200</Typography>
          <Typography variant="p">Following</Typography>
        </Box>
      </Box>
      <Grid container rowSpacing={2}>
        <Grid item xs={12} sm={4} md={6}  sx={{textAlign:'center'}}>
          <Button variant="outlined"><AddIcon/> {" "} Add to list</Button>
        </Grid>
        <Grid item xs={6} sm={4} md={3}  sx={{textAlign:'center'}}>
          <Button variant="outlined"><LocalPhoneIcon/></Button>
        </Grid>
        <Grid item xs={6} sm={4} md={3}  sx={{textAlign:'center'}}>
          <Button variant="outlined"><ChatBubbleOutlineIcon/></Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Profile;
