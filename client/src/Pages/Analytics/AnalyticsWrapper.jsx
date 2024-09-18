import React, { useEffect, useState } from 'react'
import Analytics from './Analytics';
import { useGetAnalyticsDetailsQuery } from '../../services/AnalyticsService';
import Cookies from 'js-cookie'
import { jwtDecode } from 'jwt-decode';
import { useGetIndividualAffiliateListQuery } from '../../services/AffiliateService';

function AnalyticsWrapper() {

    const [loading, setLoading] = useState(false);
    const [analyticsData, setAnalyticsData] = useState([]);
    const [affiliatesData, setAffiliatesData] = useState([]);

    const UserToken = Cookies.get("isLogged");
    const [UserId, setUserId] = useState(0);
    useEffect(() => {
        if (UserToken) {
            const decodedToken = jwtDecode(UserToken);
            setUserId(decodedToken?.id)
        }
    }, [UserToken])



    const { data, isLoading, isFetching } = useGetAnalyticsDetailsQuery({
        Id: UserId, data: {
            "type": "purchases", 
            "month": "9",
            "year": "2024"
        }
    })

    const { data: affiliateData, isLoading: listLoading, isFetching: listFetching } = useGetIndividualAffiliateListQuery({ Id: UserId })

    // useEffect(() => {
    //     console.log(data, '-----------------------------------------analyticsDetail');

    // }, [data, isLoading, isFetching])

    console.log(analyticsData, '-----------------------------analyticsDetail');


    useEffect(() => {
        if (isLoading || isFetching || listLoading || listFetching) {
            setLoading(true);
        }
        else {
            setLoading(false);
            setAnalyticsData(data?.result)
            setAffiliatesData(affiliateData?.result)
        }
    }, [data, isLoading, isFetching, listLoading, listFetching])

    return (
        <>
            <div className='page-body px-4'>
                <Analytics loading={loading} analyticsData={analyticsData} affiliatesData={affiliatesData} />
            </div>
        </>
    )
}

export default AnalyticsWrapper;