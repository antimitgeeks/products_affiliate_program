import React, { useEffect, useState } from 'react'
import AffiliateLinks from './AffiliateLinks';
import { useGetAffiliateListQuery } from '../../services/AffiliateService';

function AffiliateLinksWrapper() {

    const {data , isLoading:listLoading , isFetching:listFetching } = useGetAffiliateListQuery({})

    const [listData, setListData] = useState([]);
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      if (listLoading || listFetching) {
        setLoading(true)
      }
      else {
        setLoading(false);
        setListData(data?.result)
      }
    }, [listLoading, data, listFetching])
  

    return (
        <>
            <div className='page-body px-4 h-full pb-5 '>
                <AffiliateLinks listData={listData} loading={loading} />
            </div>
        </>
    )
}

export default AffiliateLinksWrapper;