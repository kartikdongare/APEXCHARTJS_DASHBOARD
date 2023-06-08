import Chart from "react-apexcharts";
import styled from "styled-components";
import {useContextApi} from '../Context/Graph_context'


const Graph1 = () => {
   const Mydata1 = useContextApi()
  
  let price=Mydata1.price;
  let brand=Mydata1.brand;
   console.log("Mydata1===", Mydata1);

  let data1 = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories:brand,
      },
      markers: {
        size: 3,
    },
    stroke: {
      curve: 'smooth',
    }
    },
    series: [
      {
        name: "price",
        data: price,
      },
    ],
  };

  return (
    <Wrapper>
      <Chart options={data1.options} series={data1.series} type="line" />
    </Wrapper>
  );
};

export default Graph1;

const Wrapper=styled.section`
/* border: 1px solid black; */
box-shadow: 0 0 10px #dadde3;
border-radius: 10px;
padding: 10px;
`
