import React, { useState } from "react";
import Chart from "react-apexcharts";
import styled from "styled-components";
import {useContextApi} from '../Context/Graph_context'

const Graph3 = () => {
  
  const Mydata1=useContextApi()
  let rating=Mydata1.rating
  let brand=Mydata1.brand
  console.log('brand',brand)
  let data1 = {
    options : {
       series: [45,36,36,87,23,67],
    // labels:brand,

      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
            },
          
          }
        }
      }
    },

    series: rating,
  };
  return (
    <Wrapper>
      <Chart options={data1.options} series={data1.series} type="donut"  />
    </Wrapper>
  );
};

export default Graph3;

const Wrapper=styled.section`
box-shadow: 0 0 10px #dadde3;
border-radius: 10px;
/* height: 300px; */
/* display: flex;
justify-content: center;
align-items: center; */
`
