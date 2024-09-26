import React, { useState } from 'react';
import './AdminDashboard.css';
import { useNavigate } from 'react-router-dom';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { IoEyeOutline } from "react-icons/io5";
import { MdRemoveRedEye } from "react-icons/md";
import { FaSquarePlus } from "react-icons/fa6";
import { Pagination } from '@mui/material';

function AdminDashboard({ loading, ListData, setCurrentPage, currentPage, count }) {

  const navigate = useNavigate();


  console.log(ListData?.rows, 'ListDataaa')

  const handleAddInvoice = (itm) => {
    const data = { email: itm?.email, }
    navigate(`invoice/add/${itm?.id}`, { state: data })
  }

  const handleViewInvoice = (itm) => {
    // navigate(`invoice/view/${itm?.id}/${itm?.email}`);
    console.log(itm?.companyName, 'ITMMMMMMMMMMMMMMMMMMMMMMMMMMM')
    const data = { email: itm?.email, companyName: itm?.companyName };
    navigate(`invoice/view/${itm?.id}`, { state: data });
  }
  const handlePageChange = (e, page) => {
    setCurrentPage(page)
  }

  const handleEmailClick = (id) => {
    console.log('email click................', id);
    navigate(`customer/profile/${id}`)
  }

  return (
    <>
      {
        loading ?
          <div className=' w-full flex items-center justify-center'>
            <span className=' w-fit flex  items-center justify-center animate-spin'>
              <AiOutlineLoading3Quarters />
            </span>
          </div>

          :

          <div className='mt-[5px]'>
            <span className='font-semibold text-[20px] mb-2 pb-2'>
              Partners List
            </span>
            {
              ListData?.rows?.length <= 0 || ListData?.rows == undefined ?
                // <div className=' w-full flex mt-2 items-center justify-center'>
                //   <span className=' border bg-white py-2 rounded w-full flex items-center justify-center'>
                //     No data found
                //   </span>
                // </div>
                <div className='invoices-page   w-full mt-1 flex items-center flex-col justify-center'>
                  <table className='bg-white border-t border-l border-r '>
                    <thead className=' py-0'>
                      <tr className='py-0'>
                        <th>UTM Id</th>
                        <th>Email Address</th>
                        <th>Name</th>
                        <th>Products</th>
                        <th>Invoices</th>
                      </tr>
                    </thead>
                  </table>
                  <span className=' border-b border-r border-l  bg-white py-3 rounded w-full flex items-center justify-center'>
                    No data found
                  </span>
                </div>
                :

                <div className='invoices-page'>
                  <div className='table-container'>
                    <table className=''>
                      <thead>
                        <tr>
                          <th>UTM Id</th>
                          <th>Email Address</th>
                          <th>Name</th>
                          <th>Products</th>
                          <th>Invoices</th>
                        </tr>
                      </thead>
                      <tbody>

                        {

                          ListData?.rows?.map((itm, indx) => (
                            <tr key={indx}>
                              {console.log(itm, 'User list item')}
                              <td>{itm?.userId}</td>
                              <td><span className='hover:underline cursor-pointer' onClick={() => { handleEmailClick(itm?.id) }}>{itm?.email}</span></td>
                              <td>{itm?.companyName}</td>
                              <td>{itm?.affiliateCount}</td>
                              <td className=' flex gap-2'>
                                <span onClick={() => { handleViewInvoice(itm) }} className=' hover:opacity-85 flex items-center justify-center cursor-pointer  rounded px-1'>
                                  {/* View */}
                                  {/* <IoEyeOutline/> */}
                                  <MdRemoveRedEye size={22} />
                                </span>
                                <span onClick={() => { handleAddInvoice(itm) }} className=' hover:opacity-85 rounded cursor-pointer px-1'>
                                  {/* Add */}
                                  <FaSquarePlus size={20} />
                                </span>

                              </td>

                            </tr>
                          ))
                        }
                        <tr className="spacer-row">
                          <td colSpan="5"></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className='w-full flex justify-end py-4'>

                    <Pagination
                      shape="rounded"
                      variant="outlined"
                      color="standard"
                      page={currentPage}
                      count={count}
                      onChange={handlePageChange}
                    />
                  </div>
                </div>
            }
          </div>

      }
    </>
  );
}

export default AdminDashboard;
