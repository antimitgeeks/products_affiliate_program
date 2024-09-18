import React, { useEffect, useState } from 'react'
import Analytics from './Analytics';
import { useGetAnalyticsDetailsQuery } from '../../services/AnalyticsService';
import Cookies from 'js-cookie'
import { jwtDecode } from 'jwt-decode';

function AnalyticsWrapper() {

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

    // useEffect(() => {
    //     console.log(data, '-----------------------------------------analyticsDetail');

    // }, [data, isLoading, isFetching])

    console.log(analyticsData, '-----------------------------analyticsDetail');


    useEffect(() => {
        if (isLoading || isFetching) {
            setLoading(true);
        }
        else {
            setLoading(false);
            setAnalyticsData(data?.result)
        }
    }, [data,isLoading, isFetching])

    return (
        <>
            <div className='page-body px-4'>
                <Analytics loading={loading} analyticsData={analyticsData} />
            </div>
        </>
    )
}

export default AnalyticsWrapper;