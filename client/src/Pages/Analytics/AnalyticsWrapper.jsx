import React, { useEffect, useState } from 'react'
import Analytics from './Analytics';
import { useGetAnalyticsDetailsQuery } from '../../services/AnalyticsService';

function AnalyticsWrapper() {

    const [loading, setLoading] = useState(false);
    const [analyticsData, setAnalyticsData] = useState([]);

    const { data, isLoading, isFetching } = useGetAnalyticsDetailsQuery({ Id: 4, data: { "type": "purchases" } })

    useEffect(() => {
        console.log(data, '-----------------------------------------analyticsDetail');

    }, [data, isLoading, isFetching])

    console.log(analyticsData, '-----------------------------analyticsDetail');


    useEffect(() => {
        if (isLoading || isFetching) {
            setLoading(true);
        }
        else {
            setLoading(false);
            setAnalyticsData(data?.result)
        }
    }, [isLoading, isFetching])

    return (
        <>
            <div className='page-body px-4'>
                <Analytics loading={loading} analyticsData={analyticsData} />
            </div>
        </>
    )
}

export default AnalyticsWrapper;