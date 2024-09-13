import React, { useEffect, useState } from 'react'
import ViewInvoice from './ViewInvoice';
import { useParams } from 'react-router-dom';
import { useGetIndividualInvoiceListQuery } from '../../../services/AdminService';

function ViewInvoiceWrapper() {

    const paramData = useParams();
    const id=paramData?.id;
    console.log('param id viewInvoice',id);

    const [loading,setLoading] = useState(false);
    const [ListData,setListData] = useState([])
  
    const {data, isLoading ,isFetching}=useGetIndividualInvoiceListQuery({Id:id});
  
    useEffect(()=>
    {
      if(isLoading || isFetching)
      {
        setLoading(true);
      }
      else
      {
        setLoading(false);
        setListData(data?.result)
      }
    },[isLoading,isFetching])

    console.log(ListData,'Invoice view listData')


  return (
    <div className='page-body px-4'>
        <ViewInvoice listData={ListData?.result} loading={loading}/>
    </div>
  )
}

export default ViewInvoiceWrapper;