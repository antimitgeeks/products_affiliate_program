import React from 'react';
import './AdminDashboard.css';
import { useNavigate } from 'react-router-dom';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { IoEyeOutline } from "react-icons/io5";
import { MdRemoveRedEye } from "react-icons/md";
import { FaSquarePlus } from "react-icons/fa6";

function AdminDashboard({ loading, ListData }) {

  const navigate = useNavigate();

  console.log(ListData, 'ListDataaa')

  const handleAddInvoice = (itm) => {
    console.log(itm, 'itm')
    navigate(`invoice/add/${itm?.id}/${itm?.email}`)
  }

  const handleViewInvoice = (itm) => {
    navigate(`invoice/view/${itm?.id}/${itm?.email}`)
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
          ListData?.length <= 0 ?
            <div className=' w-full flex items-center justify-center'>
              <span className=' w-fit flex  items-center justify-center'>
                {/* <AiOutlineLoading3Quarters /> */}
                No data found
              </span>
            </div>
            :
            <div className='invoices-page'>
              <div className='table-container'>
                <table className=''>
                  <thead>
                    <tr>
                      <th>Email</th>
                      <th>Address</th>
                      <th>Company name</th>
                      <th>Themes</th>
                      <th>Invoices</th>
                    </tr>
                  </thead>
                  <tbody>

                    {

                      ListData?.map((itm, indx) => (
                        <tr key={indx}>
                          <td>{itm?.email}</td>
                          <td>{itm?.address}</td>
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
            </div>
      }
    </>
  );
}

export default AdminDashboard;
