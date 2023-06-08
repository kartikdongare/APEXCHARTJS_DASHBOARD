import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Typography } from "@mui/material";
import './Selectors.css'
export default function Selectors() {
  const [dayWise, setdayWise] = React.useState("");
  const [socialWise, setsocialWise] = React.useState("");

  const handleChange1 = (event) => {
    setdayWise(event.target.value);
  };
  const handleChange2 = (event) => {
    setsocialWise(event.target.value);
  };

  return (
    <Typography className="main-selector">

      <Typography >
        <FormControl sx={{ borderRadius: "20px" }}>
          <Select value={socialWise} onChange={handleChange2} displayEmpty size="small">
            <MenuItem value="" hidden>
              <Typography
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                <FacebookIcon style={{ color: "blue" }} />
                <Typography ml={1}> Facebook</Typography>
              </Typography>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Typography>

      <Typography>
      <FormControl sx={{ borderRadius: "20px" }}>
          <Select value={dayWise} onChange={handleChange1} displayEmpty size="small">
            <MenuItem value="" hidden>
              <Typography
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                <Typography>weekly</Typography>
              </Typography>
            </MenuItem>
            <MenuItem value={10}>Day</MenuItem>
            <MenuItem value={20}>Month</MenuItem>
            <MenuItem value={30}>Year</MenuItem>
          </Select>
        </FormControl>
      </Typography>
    </Typography>
  );
}
