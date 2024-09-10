import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import ReactApexChart from 'react-apexcharts';

function Dashboard() {

  const navigate = useNavigate();

  const [chartState, setChartState] = useState({
    series: [
      {
        name: 'Themes',
        data: [10, 41, 35, 51, 49, 62, 69, 95],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'straight',
      },
      title: {
        text: 'Purchases',
        align: 'left',
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      },
    },
  });

  const [chartStateTwo, setChartStateTwo] = useState({
    series: [{
      data: [34, 44, 54, 21, 12, 43, 33, 23, 66, 66, 58]
    }],
    options: {
      chart: {
        type: 'line',
        height: 350
      },
      stroke: {
        curve: 'stepline',
      },
      dataLabels: {
        enabled: false
      },
      title: {
        text: 'Stepline Chart',
        align: 'left'
      },
      markers: {
        hover: {
          sizeOffset: 4
        }
      }
    }
  });



  return (
    <div className=' w-full flex flex-col gap-12'>
      <div className='w-full px-5 py-4 rounded border bg-white'>

        <ReactApexChart
          options={chartState?.options}
          series={chartState?.series}
          type="line"
          height={350}
          className="px-2"
        />

      </div>
      <div className='flex w-full gap-4'>
        <div className=' w-1/2 py-4 px-4 border bg-white rounded' >

          <ReactApexChart
            options={chartStateTwo.options}
            series={chartStateTwo.series}
            type="line"
            height={325}
          />

        </div>
        <div className=' w-1/2 py-4 px-4 border bg-white rounded' >

          <ReactApexChart
            options={chartStateTwo.options}
            series={chartStateTwo.series}
            type="line"
            height={325}
          />

        </div>
      </div>
    </div>
  )
}

export default Dashboard;