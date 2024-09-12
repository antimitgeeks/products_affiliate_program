import React from 'react';
import './ViewInvoice.css';
import { useNavigate } from 'react-router-dom';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

function ViewInvoice({ loading, listData }) {


  console.log(listData, 'ListDataaa')
  const navigate = useNavigate();



  const handleViewInvoice = (id) => {
    navigate(`invoice/view/${id}`)
  }

  return (
    <>
      {
        loading ?
          <div className=' w-full flex items-center justify-center'>
            <span className=' w-full flex  items-center justify-center animate-spin'>
              <AiOutlineLoading3Quarters />
            </span>
          </div>
          :
          listData?.length <= 0 ?
            <div className=' w-full flex items-center justify-center'>
              <span className=' w-full flex items-center justify-center'>
                No data found
              </span>
            </div>
            :
            <div className='invoices-page'>
              <div className='table-container'>
                <table className=''>
                  <thead>
                    <tr>
                      <th>Theme name</th>
                      <th>Domain</th>
                      <th>Commission</th>
                      <th>Status</th>
                      {/* <th>Company name</th> */}
                      {/* <th>Invoices</th> */}
                    </tr>
                  </thead>


                  <tbody>
                    {

                      listData?.map((itm, indx) => (
                        <tr key={indx}>
                          <td>{itm?.themeName}</td>
                          <td>{itm?.domain}</td>
                          <td>{itm.commission}</td>
                          <td>{itm.status}</td>
                          {/* <td>{itm.companyName}</td> */}
                          {/* <td className=' flex gap-2'>
                  <span onClick={() => { handleViewInvoice(itm?.id) }} className='cursor-pointer border rounded p-1'>
                    View
                    </span>
                    <span onClick={() => { handleAddInvoice(itm?.id) }} className=' rounded cursor-pointer border p-1'>
                    Add
                    </span>

                    </td> */}
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

export default ViewInvoice;
