import React, { useEffect, useState } from 'react'
import AdminDashboard from './AdminDashboard';
import { useGetUserListQuery } from '../../../services/AdminService';
import { useGetProfileQuery } from '../../../services/ProfileService';
import Cookies from 'js-cookie';


function AdminDashboardWrapper() {

  const [loading,setLoading] = useState(false);
  const [ListData,setListData] = useState([])

  const {data, isLoading ,isFetching}=useGetUserListQuery({});

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

  console.log(data?.result,'userList')

  const { data: profileData, isLoading: listLoading, isFetching: listFetching } = useGetProfileQuery({});

  useEffect(() => {
    Cookies.set("profileData", `${JSON.stringify(profileData?.result?.result)}`, { expires: 30 });
  }, [profileData, listLoading, listFetching])




  return (
    <div className="page-body px-4  h-full">
        <AdminDashboard loading={loading} ListData={ListData?.result} />
    </div>
  )
}

export default AdminDashboardWrapper;