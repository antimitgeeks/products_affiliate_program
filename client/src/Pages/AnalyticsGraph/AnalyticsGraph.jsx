import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { Link, useNavigate } from 'react-router-dom';
import ReactApexChart from 'react-apexcharts';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

function AnalyticsGraph({ loading, analyticsData }) {


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
          : <div className=' w-full flex items-center justify-center'>
            <span className=' border bg-white py-2 rounded w-full flex items-center justify-center'>
              Hello
            </span>
          </div>
      }
    </>
  )
}

export default AnalyticsGraph;