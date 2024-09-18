import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { Link, useNavigate } from 'react-router-dom';
import ReactApexChart from 'react-apexcharts';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

function Analytics({ loading, analyticsData, affiliatesData }) {

  const navigate = useNavigate();
  const [purchasesData, setPurchasesData] = useState([]);
  const [ClicksData, setClicksData] = useState([]);
  const [purchaseCount, setPurchaseCount] = useState(0);


  console.log(affiliatesData, '----------------------------------------------------------affiliatesData');


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

  const purchases = [
    { createAt: "2024-08-2 08:06:32" },
    { createAt: "2024-08-14 08:06:32" },
    { createAt: "2024-08-6 08:06:32" },
    { createAt: "2024-08-6 08:06:32" },
    { createAt: "2024-08-18 08:06:32" },
    { createAt: "2024-08-09 08:06:32" },
    { createAt: "2024-08-09 08:06:32" }
  ];


  useEffect(() => {
    const Clicks = [
      {
        theme: "Theme one",
        data: [
          { createAt: "2024-08-2 08:06:32" },
          { createAt: "2024-08-14 08:06:32" },
          { createAt: "2024-08-6 08:06:32" },
          { createAt: "2024-08-6 08:06:32" },
          { createAt: "2024-08-18 08:06:32" },
          { createAt: "2024-08-09 08:06:32" },
          { createAt: "2024-08-09 08:06:32" },
          { createAt: "2024-08-29 08:06:32" },
          { createAt: "2024-08-29 08:06:32" },
        ]
      },
      {
        theme: "Theme Two",
        data: [
          { createAt: "2024-08-1 08:06:32" },
          { createAt: "2024-08-5 08:06:32" },
          { createAt: "2024-08-6 08:06:32" },
          { createAt: "2024-08-6 08:06:32" },
          { createAt: "2024-08-6 08:06:32" },
          { createAt: "2024-08-15 08:06:32" },
          { createAt: "2024-08-09 08:06:32" },
          { createAt: "2024-08-09 08:06:32" },
          { createAt: "2024-08-30 08:06:32" },
        ]
      }
    ];

    // Function to process the data
    const result = Clicks.map(theme => {
      // Initialize an array of 30 zeros for each day of the month
      const dayCounts = Array(30).fill(0);

      // Count the occurrences of each day in the theme's data
      theme.data.forEach(item => {
        const day = new Date(item.createAt).getDate(); // Get the day from the date
        dayCounts[day - 1]++; // Increment the count for that day
      });

      return {
        theme: theme.theme,
        data: dayCounts
      };
    });

    console.log(result);
    setClicksData(result)

  }, [])


  useEffect(() => {

    // Get day from the date string
    const getDay = (dateString) => new Date(dateString).getDate();

    // Initialize an array for days 1 to 30
    const daysOfMonth = Array.from({ length: 30 }, (_, i) => i + 1);

    // Create a result array with only counts for each day
    const counts = daysOfMonth.map(day => {
      const count = analyticsData?.filter(purchase => getDay(purchase.createdAt) === day).length;
      return count;
    });

    // Output the result in the desired format
    console.log(counts, 'PURCHASE COUNT');
    setPurchasesData(counts)

    const totalPurchases = counts.reduce((total, count) => total + count, 0);
    setPurchaseCount(totalPurchases)



  }, [analyticsData])

  console.log(purchaseCount, '---------------------purchaseCount');


  const viewGraphHandle = (id) => {
    console.log(id, '----------------------------------------------affiliate id ');
    navigate(`${id}`);
    return;
  }

  return (
    <>
      {loading ? <div className=' w-full flex h-[70vh] items-center justify-center'>
        <span className=' w-fit flex  items-center justify-center animate-spin'>
          <AiOutlineLoading3Quarters />
        </span>
      </div> : <>
        <p className='text-[20px] font-semibold'>Analytics Details</p>


        <div className='w-full'>

          <div className=' w-full flex flex-col gap-12 pt-6'>
            <div className='w-full px-5 py-4 rounded border bg-white'>
              <div className='w-full flex justify-between'>
                <span className='font-semibold text-[17.5px]'>Purchases</span>
                {/* <span>TOtal</span> */}
                <h3 className='text-[16.5px] font-semibold py-1'>Total : {purchaseCount}</h3>

              </div>
              <ReactApexChart
                options={chartState?.options}
                // series={chartState?.series}
                series={[
                  {
                    name: 'Counts',
                    data: purchasesData,
                  },
                ]}
                type="line"
                height={350}

                className="px-2 w-full max-w-full"
              />

            </div>
            <div className='grid grid-cols-1 w-full gap-10'>
              {/* <div className=' w-1/2 py-4 px-4 border bg-white rounded' > */}
              <p className='text-[20px] font-semibold'>CLICKS</p>
              {
                loading ?
                  <div className=' w-full flex items-center justify-center'>
                    <span className=' w-fit flex  items-center justify-center animate-spin'>
                      <AiOutlineLoading3Quarters />
                    </span>
                  </div>

                  :
                  affiliatesData?.result?.length <= 0 ?
                    <div className=' w-full flex items-center justify-center'>
                      <span className=' border bg-white py-2 rounded w-full flex items-center justify-center'>
                        No data found
                      </span>
                    </div>
                    :
                    <div className='w-full h-full invoices-page'>
                      <div className='table-container'>
                        <table className='shadow'>
                          <thead className=' py-2'>
                            <tr className='py-2'>
                              <th>Theme name</th>
                              <th>Total Clicks</th>
                              <th>View Graph</th>
                              <th>Date</th>
                            </tr>
                          </thead>
                          <tbody>
                            {affiliatesData?.result?.map(affiliate => (
                              <tr key={affiliate?.id}>
                                <td>{affiliate.affiliate?.name}</td>
                                <td>{affiliate?.clicks}</td>
                                <td onClick={() => viewGraphHandle(affiliate?.affiliate?.id)}>view</td>
                                <td>{affiliate?.createdAt?.split('T')[0]}</td>
                              </tr>
                            ))}
                            <tr className="spacer-row">
                              <td colSpan="5"></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
              }
              {/* {
                ClicksData?.map((itm) => {
                  return <div className='border bg-white p-4'>
                    <ReactApexChart
                      options={{
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
                          text: itm?.theme,
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
                      }}
                      series={
                        [
                          {
                            name: 'Themes',
                            data: itm?.data,
                          }
                        ]
                      }
                      type="line"
                      height={325}
                    />
                  </div>

                })
              } */}

            </div>
            {/* <div className=' w-1/2 py-4 px-4 border bg-white rounded' >

<ReactApexChart
options={chartStateTwo.options}
series={chartStateTwo.series}
type="bar"
height={325}
        /> 
        
        </div> */}
          </div>
        </div>
      </>}


    </>

  )
}

export default Analytics;