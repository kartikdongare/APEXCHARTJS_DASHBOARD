import Chart from "react-apexcharts";
import styled from "styled-components";
import {useContextApi} from '../Context/Graph_context'

const Graph2 = () => {
const Mydata1=useContextApi()
let stock=Mydata1.stock;
let brand=Mydata1.brand
  let data1 = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: brand,
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      theme: {
        palette: 'palette7' 
      }
    },
    
    series: [
      {
        name: "Stock",
        data: stock,
      },
    ],
  };
  
  return (
    <Wrapper>
      {data1 && <Chart options={data1.options} series={data1.series} type="bar" />}
    </Wrapper>
  );
};

export default Graph2;

const Wrapper=styled.section`
/* border: 1px solid black; */
box-shadow: 0 0 10px #dadde3;
border-radius: 10px;
padding: 10px;
`
