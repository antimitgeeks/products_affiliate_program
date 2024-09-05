import React from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

function Dashboard() {

  const navigate = useNavigate()
  return (
    <div>
      <div onClick={()=>{Cookies.remove("isLogged");navigate('/')}}>
        Logout
      </div>  
      

    </div>
  )
}

export default Dashboard;