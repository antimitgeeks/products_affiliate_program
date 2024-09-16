import React from 'react';
import './Invoices.css';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

function Invoices({ listData, loading }) {

  const invoices = [
    {
      id: 1,
      themeName: "Elegant Portfolio",
      domain: "elegantportfolio.com",
      date: "2024-09-01",
      commission: "$200",
      status: "Paid",
    },
    {
      id: 2,
      themeName: "Modern Blog",
      domain: "modernblog.net",
      date: "2024-08-15",
      commission: "$150",
      status: "Pending",
    },
    {
      id: 3,
      themeName: "Tech Startup",
      domain: "techstartup.io",
      date: "2024-07-30",
      commission: "$300",
      status: "Paid",
    },
    {
      id: 4,
      themeName: "ItGeeks",
      domain: "itgeeks.io",
      date: "2024-08-30",
      commission: "$100",
      status: "Paid",
    },
    {
      id: 5,
      themeName: "Krown",
      domain: "Krown.io",
      date: "2024-08-30",
      commission: "$120",
      status: "Pending",
    },
    {
      id: 2,
      themeName: "Modern Blog",
      domain: "modernblog.net",
      date: "2024-08-15",
      commission: "$150",
      status: "Pending",
    },
    {
      id: 3,
      themeName: "Tech Startup",
      domain: "techstartup.io",
      date: "2024-07-30",
      commission: "$300",
      status: "Paid",
    },
    {
      id: 4,
      themeName: "ItGeeks",
      domain: "itgeeks.io",
      date: "2024-08-30",
      commission: "$100",
      status: "Paid",
    },
    {
      id: 5,
      themeName: "Krown",
      domain: "Krown.io",
      date: "2024-08-30",
      commission: "$120",
      status: "Pending",
    }
    // Add more invoice records as needed
  ];

  console.log(

    listData?.result,'listdataaaaaaaaaa'
  )


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
          listData?.result?.length <= 0 ?
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
                      <th>Domain</th>
                      <th>Date</th>
                      <th>Commission</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {listData?.map(invoice => (
                      <tr key={invoice?.id}>
                        <td>{invoice?.themeName}</td>
                        <td>{invoice?.domain}</td>
                        <td>{invoice?.createdAt?.split('T')[0]}</td>
                        <td style={{ paddingLeft: '40px' }}>{invoice?.commission} $ </td>
                        <td>{invoice?.status}</td>
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
    </>
  );
}

export default Invoices;