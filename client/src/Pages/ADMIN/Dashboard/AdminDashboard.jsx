import React from 'react';
import './AdminDashboard.css';
import { useNavigate } from 'react-router-dom';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { IoEyeOutline } from "react-icons/io5";
import { MdRemoveRedEye } from "react-icons/md";
import { FaSquarePlus } from "react-icons/fa6";

function AdminDashboard({ loading, ListData }) {
  // const invoices = [
  //   {
  //     id: 1,
  //     themeName: "Elegant Portfolio",
  //     domain: "elegantportfolio.com",
  //     date: "2024-09-01",
  //     commission: "$200",
  //     status: "Paid",
  //   },
  //   {
  //     id: 2,
  //     themeName: "Modern Blog",
  //     domain: "modernblog.net",
  //     date: "2024-08-15",
  //     commission: "$150",
  //     status: "Pending",
  //   },
  //   {
  //     id: 3,
  //     themeName: "Tech Startup",
  //     domain: "techstartup.io",
  //     date: "2024-07-30",
  //     commission: "$300",
  //     status: "Paid",
  //   },
  //   {
  //     id: 4,
  //     themeName: "ItGeeks",
  //     domain: "itgeeks.io",
  //     date: "2024-08-30",
  //     commission: "$100",
  //     status: "Paid",
  //   },
  //   {
  //     id: 5,
  //     themeName: "Krown",
  //     domain: "Krown.io",
  //     date: "2024-08-30",
  //     commission: "$120",
  //     status: "Pending",
  //   }
  // ];

  const navigate = useNavigate();

  console.log(ListData, 'ListDataaa')

  const handleAddInvoice = (itm) => {
    console.log(itm, 'itm')
    navigate(`invoice/add/${itm?.id}/${itm?.email}`)
  }

  const handleViewInvoice = (id) => {
    navigate(`invoice/view/${id}`)
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
                      <th>Country</th>
                      <th>City</th>
                      <th>Address</th>
                      <th>Company name</th>
                      <th>Invoices</th>
                    </tr>
                  </thead>
                  <tbody>

                    {

                      ListData?.map((itm, indx) => (
                        <tr key={indx}>
                          <td>{itm?.email}</td>
                          <td>{itm?.country}</td>
                          <td>{itm.city}</td>
                          <td>{itm.address}</td>
                          <td>{itm.companyName}</td>
                          <td className=' flex gap-2'>
                            <span onClick={() => { handleViewInvoice(itm?.id) }} className=' hover:opacity-85 flex items-center justify-center cursor-pointer  rounded px-1'>
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
