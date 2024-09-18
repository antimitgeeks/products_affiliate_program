import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { Link, useNavigate } from 'react-router-dom';
import ReactApexChart from 'react-apexcharts';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { IoArrowBack } from 'react-icons/io5';

function AnalyticsGraph({ loading, analyticsData, themeName }) {

  const [clicksData, setClicksData] = useState([]);
  const [totalCount, setTotalCount] = useState(0)

  const navigate = useNavigate();
  console.log(analyticsData, '----------------------------analyticsData');

  const clicks = [
    { createdAt: "2024-08-2 08:06:32" },
    { createdAt: "2024-08-14 08:06:32" },
    { createdAt: "2024-08-6 08:06:32" },
    { createdAt: "2024-08-6 08:06:32" },
    { createdAt: "2024-08-18 08:06:32" },
    { createdAt: "2024-08-09 08:06:32" },
    { createdAt: "2024-08-09 08:06:32" }
  ];


  const [chartState, setChartState] = useState({
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
        text: '',
        align: 'left',
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'],
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30']

      },
    },
  });


  useEffect(() => {

    // Get day from the date string
    const getDay = (dateString) => new Date(dateString).getDate();

    // Initialize an array for days 1 to 30
    const daysOfMonth = Array.from({ length: 30 }, (_, i) => i + 1);

    // Create a result array with only counts for each day
    const counts = daysOfMonth.map(day => {
      const count = analyticsData != undefined && analyticsData?.filter(click => getDay(click.createdAt) === day).length;
      return count;
    });

    // Output the result in the desired format
    console.log(counts, 'Clicks COUNT');
    setClicksData(counts)

    const totalPurchases = counts.reduce((total, count) => total + count, 0);

    setTotalCount(totalPurchases)


  }, [analyticsData])

  return (
    <>
      {
        loading ?
          <>
            <div className=' w-full flex items-center justify-center'>
              <span className=' w-fit flex  items-center justify-center animate-spin'>
                <AiOutlineLoading3Quarters />
              </span>
            </div>
          </>
          :
          <div className='w-full'>

            <div className='flex w-full justify-between px-4 py-1 mb-1'>
              <span onClick={() => { navigate('/dashboard/analytics') }} className='font-semibold underline text-[16px] w-fit px-1 py-1 bg-white border rounded cursor-pointer'>
                <IoArrowBack size={20} />
              </span>
              <span>
                
              </span>
            </div>

            <div className=' w-full flex flex-col gap-12 pt-6'>

              <div className='w-full px-5 py-4 rounded border bg-white'>
                <div className='w-full flex justify-between py-2'>
                  <span className='font-semibold text-[17.5px] capitalize'>{themeName}</span>
                  <span className='font-semibold text-[17px]'>

                  Total : {totalCount}
                  </span>
                </div>
                <ReactApexChart
                  options={chartState?.options}
                  // series={chartState?.series}
                  series={[
                    {
                      name: 'Counts',
                      data: clicksData,
                    },
                  ]}
                  type="line"
                  height={350}

                  className="px-2 w-full max-w-full"
                />

              </div>
            </div>
          </div>


      }
    </>
  )
}

export default AnalyticsGraph;