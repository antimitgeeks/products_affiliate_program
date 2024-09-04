import React, { useEffect, useState } from 'react';
import { Routes, Route, } from "react-router-dom";
import Login from './Pages/Login';
// import NoPageFound from './Pages/NoPageFound';
// import ForgetPassword from './Pages/ForgetPassword/ForgetPassword';
import EmailAuth from './Pages/ForgetPassword/EmailAuth';
import Cookies from 'js-cookie'
import ForgetPassword from './Pages/ForgetPassword/ForgetPassword';
import { jwtDecode } from 'jwt-decode';
import Header from './components/Header';
import SignUp from './Pages/SignUp/SignUp';


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
        if (userToken?.length > 0) {
            const DecodedData = jwtDecode(userToken);
            setDecodedToken(DecodedData);
        }
    }, [userToken]);

    useEffect(() => {
        console.log(decodedToken?.role)
        setRole(decodedToken?.role)

    }, [decodedToken, userToken])

    const windowLocation = (window.location.href)

    return (
        <div className=' w-full h-full'>
            <Header/>
            <Routes>
                <Route path="" element={<Login auth={setAthenticateLogin} />} />
                <Route path="/login" element={<Login auth={setAthenticateLogin} />} />
                <Route path="/sign-up" element={<SignUp auth={setAthenticateLogin} />} />
                <Route path="/forgot-password/:role/:id" element={<ForgetPassword />} />
                <Route path="/reset-password/:role" element={<EmailAuth />} />
            </Routes>
        </div>
    )
}

export default Routing;