import React, { useEffect, useState } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useNavigate, useParams } from 'react-router-dom';
import InputComponent from '../../components/InputComponent';
import { useResetPasswordMutation } from '../../services/AuthServices';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { toast } from 'react-toastify';
import { Container, Row, Col } from "reactstrap";
import { Btn, H4, P, Image } from "../../components/AbstractElements";
import { FormGroup } from "reactstrap";



function EmailAuth() {

    let navigate = useNavigate();
    const [UserData, setUserData] = useState('');
    const [linksend, setLinkSend] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resetPassword] = useResetPasswordMutation();
    const { role } = useParams();
    console.log(role)


    /* form initialValues */
    const [initialValues, setInitialValues] = useState({
        email: ''
    });


    /* form Validation using Yup */
    const validationSchema = yup.object().shape({
        email: yup.string()
            .strict()
            .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Enter a valid email")
            .max(70, "Length should not exceed 70")
            .email("Enter a valid email")
            .required("Email is required")
            .trim("Invalid email"),
    });


    /* handling form submit */
    const handleSubmit = (data, { resetForm }) => {
        setLoading(true)
        setUserData(data)
        console.log(data);
        const roleData = { email: data?.email, role: role }
        // resetPassword({ data: roleData })
        //     .then((dta) => {
        //         if (dta?.data) {
        //             setTimeout(() => {
        //                 toast.success(dta?.data?.message)
        //                 setLinkSend(true);
        //                 resetForm();
        //             }, 100);
        //             setTimeout(() => {
        //                 if (role == 'admin') {
        //                     navigate('/login/admin')
        //                 }
        //                 else {
        //                     navigate('/login/npo')
        //                 }
        //             }, 600);
        //         }
        //         else if (dta?.error) {
        //             console.log(dta?.error)
        //             toast.error(dta?.error?.data?.message || "Internal server error")
        //             setLinkSend(false)
        //         }
        //         setLoading(false)
        //     })
        //     .catch((err) => { toast.error(err.response.data.message); setLoading(false); setLinkSend(false) })

    };


    /*if user already logged in will be redirect to dashboard */
    // let localData= JSON.parse(localStorage.getItem('IsUserLogged'))
    // useEffect(() => {
    //     if (localData || localData != null) {
    //         navigate('/dashboard')
    //     }
    // }, [localData])

    return (
        <div className='h-[95vh] bg-slate-50 relative flex-col gap-2 flex w-full items-center justify-center'>
            <span className=' text-[18px]  text-green-500'> {linksend && "Check Your Email to Reset Password !"} </span>

            <Formik
                validationSchema={validationSchema}
                initialValues={initialValues}
                onSubmit={handleSubmit}
            >
                {(loginProps) => (
                    <Form className='w-full flex items-center justify-center'>
                        <Container fluid={true} className="p-0 login-page bg-slate-50 shoaw">
                            <Row>
                                <Col xs="12">
                                    <div className="login-card flex-column">
                                        <div className="logo">
                                            <Image
                                                className="img-fluid for-light mx-auto h-[65px] w-[65px]"
                                                src={require("../../Assets/logo/itg_logo.webp")}
                                            />
                                        </div>
                                        <div className="login-main login-tab shadow">
                                            <div className="theme-form">
                                                <H4 className="text-center font-semibold text-2xl">Forgot password ?</H4>
                                                <P className="text-center">{"Enter your email to get reset link"}</P>
                                                <div className=' flex flex-col gap-2'>

                                                    <FormGroup className=" flex flex-col gap-5">
                                                        <InputComponent placeholder={"Enter your Email"} value={loginProps.values.email} name={"email"} type="text" onChange={loginProps.handleChange} />
                                                    </FormGroup>
                                                    <div onClick={()=>navigate('/login')} className=' flex w-full justify-end text-[#3E5FCE] hover:underline cursor-pointer'>
                                                        <span>Sign in ?</span>
                                                    </div>
                                                    <Btn color="primary" type="submit" className="d-block w-100 mt-1 rounded-full">
                                                        Reset
                                                    </Btn>
                                                </div>
                                            </div >
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </Form>
                )}
            </Formik>

        </div>
    );
}

export default EmailAuth;
