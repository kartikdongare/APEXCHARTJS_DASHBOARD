import React, { useState } from "react";
import Chart from "react-apexcharts";
import styled from "styled-components";

let options = {
    series: [67],
    colors: ["#20E647"],
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: "70%",
          background: "#293450"
        },
        track: {
          dropShadow: {
            enabled: true,
            top: 2,
            left: 0,
            blur: 4,
            opacity: 0.15
          }
        },
        dataLabels: {
          name: {
            offsetY: -10,
            color: "#fff",
            fontSize: "13px"
          },
          value: {
            color: "#fff",
            fontSize: "30px",
            show: true
          }
        }
      }
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "vertical",
        gradientToColors: ["#87D4F9"],
        stops: [0, 100]
      }
    },
    stroke: {
      lineCap: "round"
    },
    labels: ["Progress"]
  };
  
const series = [80];
const Graph4 = () => {
  const [data, setData] = useState(options);
  return (
    <Wrapper>
      <Chart options={data} series={series} type="radialBar"  />
    </Wrapper>
  );
};

export default Graph4;

const Wrapper=styled.section`
/* border: 1px solid black; */
box-shadow: 0 0 10px #dadde3;
border-radius: 10px;
/* padding: 10px; */
`
