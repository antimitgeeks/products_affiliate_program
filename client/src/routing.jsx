import React, { useEffect, useState } from 'react';
import { Routes, Route, } from "react-router-dom";
// import NoPageFound from './Pages/NoPageFound';
// import ForgetPassword from './Pages/ForgetPassword/ForgetPassword';
import EmailAuth from './Pages/ForgetPassword/EmailAuth';
import Cookies from 'js-cookie'
import ForgetPassword from './Pages/ForgetPassword/ForgetPassword';
import { jwtDecode } from 'jwt-decode';
import Header from './components/Header';
import SignUp from './Pages/SignUp/SignUp';
import Dashboard from './Pages/Dashboard/Dashboard'
import RouteLayout from "./RouteLayout"
import Logins from "./components/Auth/Signin";
import Layout from './components/Layout/Layout';
import WelcomePage from './Pages/WelcomePage';
import Profile from './Pages/Profile/Profile';

function Routing() {
    const [authenticateLogin, setAthenticateLogin] = useState(true);
    const [decodedToken, setDecodedToken] = useState();
    const [role, setRole] = useState('Admin')

    const userToken = Cookies.get("isLogged");
    //////// Checking if user is logged or not ////////////  
    useEffect((e) => {
        if (!userToken || userToken === null) {
            setAthenticateLogin(false)
        }
        else {
            setAthenticateLogin(true)
        }
    }, [])


    useEffect(() => {
        console.log(decodedToken?.role)
        setRole(decodedToken?.role)

    }, [decodedToken, userToken])

    const windowLocation = (window.location.href)

    return (
        <div className=' w-full h-full'>
            {/* <Header/> */}
            <Routes>
                <Route path="" element={<Logins auth={setAthenticateLogin} />} />
                <Route path="/login" element={<Logins auth={setAthenticateLogin} />} />
                <Route path="/register" element={<SignUp auth={setAthenticateLogin} />} />
                <Route path="/forgot-password/:role" element={<EmailAuth />} />
                <Route path="/reset-password/:role/:id" element={<ForgetPassword />} />
                {
                    authenticateLogin &&
                    // <Route path='/dashboard/default' element={<RouteLayout />} />
                    <Route path='/dashboard/default' element={<Layout />} >
                        <Route path='' element={<Profile/>}/>
                    </Route>
                }
            </Routes>
        </div>
    )
}

export default Routing;