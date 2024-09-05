import React, { useState } from 'react';
import { Container, Row, Col } from "reactstrap";
import { FormGroup, Input, Label } from "reactstrap";
import { Btn, H4, H6, P, Image } from "../../components/AbstractElements";
import OtherWay from '../../components/Auth/Tabs/LoginTab/OtherWay';
import { Facebook, Instagram, Linkedin, Twitter } from 'react-feather';
import { Link } from 'react-router-dom';
import { H, UL, LI } from '../../components/AbstractElements';
import * as yup from 'yup';
import { Form, Formik } from 'formik';
import InputComponent from '../../components/InputComponent';

function SignUp() {

  // const [email, setEmail] = useState("test123@gmail.com");
  // const [password, setPassword] = useState("Test@123");

  const [loading, setLoading] = useState(false)

  const RegisterHandle = (e) => {
    console.log("Registration");
  };

  const initialValues = {
    email: '',
    payPalAddress: '',
  };

  const validationSchema = yup.object().shape({
    email: yup.string().trim("Enter valid email").required("email is required").email(),
    payPalAddress: yup.string().trim("Enter valid address").required("address is required").strict(),
  });

  const handleSubmit = (data) => {
    setLoading(true);
    console.log(data);
    const loginData = { email: data?.email, password: data?.password };
    // LoginUser({ data: loginData })
    //   .then((res) => {
    //     setLoading(false)
    //     if (res?.data) {
    //       if (data?.rememberMe) {
    //         Cookies.set("AuthLogin", `${res?.data?.result?.accessToken}`, { expires: 30 });
    //         Cookies.set("AuthData", JSON.stringify(data), { expires: 30 });
    //       }
    //       else {
    //         var in30Minutes = 1 / 48;
    //         Cookies.set("AuthLogin", `${res?.data?.result?.accessToken}`, { expires: in30Minutes });
    //         Cookies.set("AuthData", JSON.stringify(data), { expires: in30Minutes });

    //       }
    //       dispatch(setLoginData(data))
    //       Cookies.set("isLogged", `${res?.data?.result?.accessToken}`, { expires: 30 });
    //       Cookies.set("isChecked", JSON.stringify(data), { expires: 30 });
    //       // localStorage.setItem('IsUserLogged', JSON.stringify(data))
    //       // toast.success("Login Successfull")
    //       navigate('/dashboard')
    //     } else if (res?.error) {
    //       toast.error(res?.error?.data?.message || "Internal server error");
    //     }
    //   })
    //   .catch((err) => {
    //     setLoading(false);
    //     toast.error(err.response.data.message || "Internal server error");
    //   });
  };


  return (
    <>
      <Formik
        enableReinitialize
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {(signupProps) => (
          <Form>
            <Container fluid={true} className="p-0 login-page bg-slate-50">
              <Row>
                <Col xs="12">
                  <div className="login-card flex-column">
                    <div className="logo">
                      <Image
                        className="img-fluid for-light mx-auto h-[65px] w-[65px]"
                        src={require("../../Assets/logo/itg_logo.webp")}
                      />
                    </div>
                    <div className="login-main login-tab">
                      <div className="theme-form">
                        <H4 className="text-center font-semibold text-xl"> Sign Up</H4>
                        <P className="text-center">{"Enter your email & password to login"}</P>
                        {/* <Input type="text" placeholder='Enter your email' value={signupProps.values.email} name='email' onChange={signupProps.handleChange} /> */}
                        <div className=' w-full flex flex-col gap-5 pb-2'>

                          <InputComponent type={"text"} value={signupProps.values.email} name='email' onChange={signupProps.handleChange} placeholder={"Enter your email"} />
                          <InputComponent type="text" name='payPalAddress' value={signupProps.values.payPalAddress} placeholder='Enter your paypal address' onChange={signupProps.handleChange} />
                            <hr />
                          <InputComponent type={"text"} value={signupProps.values.city} name='country' onChange={signupProps.handleChange} placeholder={"Enter country name"} />
                          <InputComponent type={"text"} value={signupProps.values.city} name='city' onChange={signupProps.handleChange} placeholder={"Enter city name"} />
                          <InputComponent type={"text"} value={signupProps.values.address} name='address' onChange={signupProps.handleChange} placeholder={"Enter your address"} />
                          <hr />
                          <InputComponent type={"text"} value={signupProps.values.companyName} name='companyName' onChange={signupProps.handleChange} placeholder={"Enter company name"} />
                          <InputComponent type={"text"} value={signupProps.values.companyNumber} name='companyNumber' onChange={signupProps.handleChange} placeholder={"Enter company number"} />

                        </div>
                        <div className="position-relative form-group mb-0">
                          <Btn color="primary" type="submit" className="d-block w-100 mt-2">
                            Register
                          </Btn>
                        </div>
                        <div className='login-social-title'>
                          <H6 className='text-muted or mt-4'>Or Sign up with</H6>
                        </div>
                        <div className='social my-4 '>
                          <FormGroup className='form-group'>
                            <UL className='login-social d-flex flex-row simple-list'>
                              <LI>
                                <a href='https://www.google.com/'>
                                  <Linkedin className=' me-0' />
                                </a>
                              </LI>
                              <LI>
                                <a href='https://twitter.com/'>
                                  <Twitter className='me-0' />
                                </a>
                              </LI>
                              <LI>
                                <a href='https://www.facebook.com/'>
                                  <Facebook className='me-0' />
                                </a>
                              </LI>
                              <LI>
                                <a href='https://www.instagram.com/'>
                                  <Instagram className='me-0' />
                                </a>
                              </LI>
                            </UL>
                          </FormGroup>
                        </div>
                        <P className='text-center mb-0 '>
                          Already have an Account ?
                          <Link className='ms-2' to={`${process.env.PUBLIC_URL}/login`}>
                            Login
                          </Link>
                        </P>
                      </div>

                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </Form>
        )}


      </Formik>
    </>
  )
}

export default SignUp;