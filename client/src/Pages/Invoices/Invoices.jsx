import React from 'react';
import './Invoices.css';

function Invoices() {

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

  return (
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
            {invoices.map(invoice => (
              <tr key={invoice.id}>
                <td>{invoice.themeName}</td>
                <td>{invoice.domain}</td>
                <td>{invoice.date}</td>
                <td>{invoice.commission}</td>
                <td>{invoice.status}</td>
              </tr>
            ))}
            <tr className="spacer-row">
              <td colSpan="5"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Invoices;
