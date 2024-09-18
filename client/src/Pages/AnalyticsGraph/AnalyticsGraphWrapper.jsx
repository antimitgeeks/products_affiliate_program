import React, { useEffect, useState } from 'react'
import AnalyticsGraph from './AnalyticsGraph'
import { useGetAnalyticsDetailsQuery } from '../../services/AnalyticsService';
import Cookies from 'js-cookie'
import { jwtDecode } from 'jwt-decode';
import { useGetIndividualAffiliateListQuery } from '../../services/AffiliateService';
import { useParams } from 'react-router-dom';

function AnalyticsGraphWrapper() {

    const paramData = useParams()

    const [loading, setLoading] = useState(false);
    const [analyticsData, setAnalyticsData] = useState([]);

    const UserToken = Cookies.get("isLogged");
    const affiliateId = useParams();
    const [UserId, setUserId] = useState(0);

    const [monthData,setMonthData] = useState("9");
    const [yearData,setYearData]= useState("2024");

  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1); // Store the month number



    useEffect(() => {
        if (UserToken) {
            const decodedToken = jwtDecode(UserToken);
            setUserId(decodedToken?.id)
        }
    }, [UserToken])


    const { data, isLoading, isFetching } = useGetAnalyticsDetailsQuery({
        Id: UserId, data: {
            "type": "clicks",
            assignAffiliateId: affiliateId?.id,
            "month": String(selectedMonth),
            "year": yearData
        }
    })

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
                <AnalyticsGraph selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} themeName={paramData?.name} loading={loading} analyticsData={analyticsData} />
            </div>
        </>
    )
}

export default AnalyticsGraphWrapper;