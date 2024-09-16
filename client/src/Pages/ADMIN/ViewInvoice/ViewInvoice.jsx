import React from 'react';
import './ViewInvoice.css';
import { useNavigate, useParams } from 'react-router-dom';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import Select from 'react-select';
import { useUpdateInvoiceStatusMutation } from '../../../services/AdminService';
import toast from 'react-hot-toast';

function ViewInvoice({ loading, listData }) {


  console.log(listData, 'ListDataaa')
  const navigate = useNavigate();
  const [UpdateStatus] = useUpdateInvoiceStatusMutation();

  const paramData = useParams();


  const handleSelect = (e, id) => {
    console.log(e);
    console.log(id, 'id')
    const dataForApi = {
      "status": e?.label
    }
    UpdateStatus({ Id: id, data: dataForApi })
      .then((res) => {
        if (res?.error) {
          console.log(res?.error, 'resError');
          toast.error(res?.error?.data?.message || "Internal server error")
        }
        else {
          toast.success("Invoice updated");
        }
      })
      .catch((err) => {
        console.log(err, 'catchErr')
      })

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
          listData?.length <= 0 ?
            <div className=' w-full flex items-center justify-center'>
              <span className=' w-full border bg-white py-2 rounded flex items-center justify-center'>
                No data found
              </span>
            </div>
            :
            <div className='view-invoices-page'>
              <div className='flex w-full justify-end px-4 py-2'>
                <span className='font-semibold pt-0'>

                  {paramData?.email}
                </span>
              </div>
              <div className='table-container'>

                <table className=''>
                  <thead>
                    <tr>
                      <th>Source Id</th>
                      <th>Theme name</th>
                      <th>Domain</th>
                      <th>Commission</th>
                      <th>Status</th>
                      <th>Date</th>
                      {/* <th>Company name</th> */}
                      {/* <th>Invoices</th> */}
                    </tr>
                  </thead>

                  <tbody>
                    {

                      listData?.map((itm, indx) => (
                        <tr key={indx}>
                          <td>{itm?.sourceId || "N/A"}</td>
                          <td>{itm?.themeName}</td>
                          <td>{itm?.domain}</td>
                          <td style={{ paddingLeft: '30px' }}>{itm?.commission || '0'} $ </td>
                          {/* <td>{itm.status}</td> */}

                          <Select onChange={(e) => handleSelect(e, itm?.id)} placeholder={itm?.status} value={itm?.status} className='w-[75%] max-w-[75%] m-0 h-[12px] pt-2  px-0' options={[{ label: "Pending", value: "pending" }, { label: "Paid", value: "paid" }]} />
                          {/* <td>{itm.companyName}</td> */}
                          <td>{itm?.createdAt?.split('T')[0]}</td>
                        </tr>
                      ))
                    }
                    <tr className="spacer-row">
                      <td colSpan="6"></td>
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
