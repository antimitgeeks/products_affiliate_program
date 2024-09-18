import React, { useEffect, useState } from 'react'
import AnalyticsGraph from './AnalyticsGraph'
import { useGetAnalyticsDetailsQuery } from '../../services/AnalyticsService';
import Cookies from 'js-cookie'
import { jwtDecode } from 'jwt-decode';
import { useGetIndividualAffiliateListQuery } from '../../services/AffiliateService';

function AnalyticsGraphWrapper() {

    const [loading, setLoading] = useState(false);
    const [analyticsData, setAnalyticsData] = useState([]);

    const UserToken = Cookies.get("isLogged");
    const [UserId, setUserId] = useState(0);
    useEffect(() => {
        if (UserToken) {
            const decodedToken = jwtDecode(UserToken);
            setUserId(decodedToken?.id)
        }
    }, [UserToken])

    const { data, isLoading, isFetching } = useGetAnalyticsDetailsQuery({ Id: UserId, data: { "type": "purchases" } })

    useEffect(() => {
        if (isLoading || isFetching) {
            setLoading(true);
        }
        else {
            setLoading(false);
            setAnalyticsData(data?.result)
        }
    }, [data, isLoading, isFetching])

    return (
        <>
            <div className='page-body px-4'>
                <AnalyticsGraph loading={loading} analyticsData={analyticsData} />
            </div>
        </>
    )
}

export default AnalyticsGraphWrapper;