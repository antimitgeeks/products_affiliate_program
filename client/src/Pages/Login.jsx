import React, { useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import InputComponent from '../components/InputComponent';
import Cookies from 'js-cookie';
import { setLoginData } from '../Redux/Slices/loginSlice';
import { useDispatch } from 'react-redux';
import { useLoginMutation } from '../services/AuthServices';
import { toast } from 'react-toastify';
import { jwtDecode } from 'jwt-decode';
import LoginBanner from '../Assets/loginBanner.png';
import { Container, Row, Col } from "reactstrap";
import LoginTab from './LoginTabs';


function Login(props) {
    const userToken = Cookies.get("AuthLogin");
    const dispatch = useDispatch();
    const [isLoading, setLoading] = useState(false);
    const [decodedToken, setDecodedToken] = useState(null);
    const [userLoginData, setUserLoginData] = useState()
    const navigate = useNavigate();
    const isLogged = Cookies.get("isLogged");
    const isChecked = Cookies.get("isChecked");
    const AuthData = Cookies.get("AuthData");


    // useEffect(() => {
    //     if (isChecked?.length > 0) {
    //         let dta = JSON.parse(isChecked)
    //         setUserLoginData(dta)
    //     }
    // }, [isChecked]);

    useEffect(() => {
        if (AuthData?.length > 0 && AuthData) {
            let dta = JSON.parse(AuthData)
            setUserLoginData(dta)
        }
    }, [AuthData]);


    useEffect(() => {
        if (userToken?.length > 0) {
            const DecodedData = jwtDecode(userToken);
            setDecodedToken(DecodedData);
        }
    }, [userToken]);


    useEffect(() => {
        if (isLogged) {
            props.auth(true);
            navigate('/dashboard');
        }
    }, [isLogged, props]);

    const [LoginUser] = useLoginMutation();


    const initialValues = {
        email: decodedToken?.email?.toLowerCase() || '',
        password: userLoginData?.password || '',
        rememberMe: userLoginData?.rememberMe
    };


    const validationSchema = yup.object().shape({
        email: yup.string()
            .strict()
            .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Enter a valid email")
            .max(70, "Length should not exceed 70")
            .email("Enter a valid email")
            .required("Email is required")
            .trim("Invalid email"),
        password: yup.string().trim("Enter valid password").required("password is required").strict(),
    });


    const handleSubmit = (data) => {
        setLoading(true);
        const loginData = { email: data?.email, password: data?.password };
        LoginUser({ data: loginData })
            .then((res) => {
                setLoading(false)
                if (res?.data) {
                    if (data?.rememberMe) {
                        Cookies.set("AuthLogin", `${res?.data?.result?.accessToken}`, { expires: 30 });
                        Cookies.set("AuthData", JSON.stringify(data), { expires: 30 });
                    }
                    else {
                        var in30Minutes = 1 / 48;
                        Cookies.set("AuthLogin", `${res?.data?.result?.accessToken}`, { expires: in30Minutes });
                        Cookies.set("AuthData", JSON.stringify(data), { expires: in30Minutes });
                    }
                    dispatch(setLoginData(data))
                    Cookies.set("isLogged", `${res?.data?.result?.accessToken}`, { expires: 30 });
                    Cookies.set("isChecked", JSON.stringify(data), { expires: 30 });
                    navigate('/dashboard')
                } else if (res?.error) {
                    toast.error(res?.error?.data?.message || "Internal server error");
                }
            })
            .catch((err) => {
                setLoading(false);
                toast.error(err.response.data.message || "Internal server error");
            });
    };


    return (
        <div className='h-[full] py-5  bg-white flex w-full items-center justify-center'>
            <Container fluid={true} className="p-0 login-page">
                <Row>
                    <Col xs="12">
                        <div className="login-card flex-column">
                            <div className="logo">
                                {/* <Image
                                    className="img-fluid for-light mx-auto"
                                    src={require("../assets/images/logo/login.png")}
                                /> */}
                               image
                            </div>
                            <div className="login-main login-tab">
                                <LoginTab />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            
            {/* <Formik
                enableReinitialize
                validationSchema={validationSchema}
                initialValues={initialValues}
                onSubmit={handleSubmit}
            >
                {(loginProps) => (
                    <Form className=' w-[88%] rounded-[14px] p-2 bg-[rgb(243,244,246)] flex items-center justify-center'>
                        <div className=' w-full h-full p-4 rounded-[10px] bg-[#F9FAFB] flex  justify-center gap-4'>

                            <div className=' w-[88%] h-full bg-orange-100 flex flex-col justify-between'>
                                <div>
                                    Login
                                </div>
                                <div>
                                    Login btn
                                </div>
                            </div>
                            <div className=' w-full h-full  '>
                                <div className=' rounded-full bg-[#F9FAFB] h-[600px] relative object-cover object-center'>
                                    <img className=' object-cover h-full rounded-[12.5px] w-full object-center' src={LoginBanner} alt="" />
                                    <div className='absolute flex items-center justify-center w-full'>
                                        <span>
                                            SignUp btn
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik> */}
        </div>
    );
}

export default Login;
