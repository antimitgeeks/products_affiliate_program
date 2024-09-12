import React from 'react';
import './AdminDashboard.css';
import { useNavigate } from 'react-router-dom';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

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

  const handleAddInvoice = (id) => {
    navigate(`invoice/add/${id}`)
  }

  const handleViewInvoice = (id) => {
    navigate(`invoice/view/${id}`)
  }

  return (
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
                    <span onClick={() => { handleViewInvoice(itm?.id) }} className='cursor-pointer border rounded p-1'>
                      View
                    </span>
                    <span onClick={() => { handleAddInvoice(itm?.id) }} className=' rounded cursor-pointer border p-1'>
                      Add
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
  );
}

export default AdminDashboard;
