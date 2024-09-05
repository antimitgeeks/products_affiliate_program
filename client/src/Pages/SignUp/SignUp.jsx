import React, { useEffect, useMemo, useState } from 'react';
import { Container, Row, Col } from "reactstrap";
import { FormGroup, Input, Label } from "reactstrap";
import { Btn, H4, H6, P, Image } from "../../components/AbstractElements";
import { Facebook, Instagram, Linkedin, Twitter } from 'react-feather';
import { Link, useNavigate } from 'react-router-dom';
import { H, UL, LI } from '../../components/AbstractElements';
import * as yup from 'yup';
import { ErrorMessage, Form, Formik } from 'formik';
import InputComponent from '../../components/InputComponent';
import countryList from 'react-select-country-list';
// import { Select } from '../../components/Constant';
import Select from 'react-select'
import { useRegisterMutation } from '../../services/AuthServices';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';

function SignUp() {

  const [value, setValue] = useState('')
  const options = useMemo(() => countryList().getData(), []);
  const [Register] = useRegisterMutation();
  let isLogged = Cookies.get("isLogged");
  const navigate = useNavigate();


  const changeHandler = value => {
    console.log(value, 'country')
    setValue(value)
  }

  const [loading, setLoading] = useState(false)



  useEffect(() => {
    if (isLogged) {
      navigate('/dashboard/default');
    }
  }, [isLogged]);

  const initialValues = {
    email: '',
    payPalAddress: '',
    country: null,
    city: '',
    address: '',
    companyName: '',
    companyNumber: '',
    password: '',
    confirmPassword: ''
  };

  const validationSchema = yup.object().shape({
    email: yup.string().trim("Enter valid email").required("email is required").email(),
    payPalAddress: yup.string().trim("Enter valid address").required("address is required").strict(),
    // country: yup.string().trim("Enter valid country").required("country is required").strict(),
    country: yup.object().shape({
      label: yup.string().required("Country is required"),
      value: yup.string().required("Country is required")
    }).nullable().required("Country is required"),
    city: yup.string().trim("Enter valid city").required("city is required").strict(),
    address: yup.string().trim("Enter valid address").required("address is required").strict(),
    companyName: yup.string().trim("Enter valid companyName").required("company name is required").strict(),
    companyNumber: yup.string().trim("Enter valid number").min(10, "Enter valid number").max(10, "Enter valid number").required("number is required"),
    password: yup.string().trim("Enter valid password").required("password is required").strict(),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'Passwords must match').trim("Enter valid confirm password").required("confirm password is required").strict(),
  });

  const handleSubmit = (data, { resetForm }) => {
    setLoading(true);
    console.log(data, 'register data');
    let registerData = {
      "email": data?.email,
      "paypalAddress": data?.payPalAddress,
      "country": data?.country.label,
      "city": data?.city,
      "address": data?.address,
      "companyName": data?.companyName,
      "companyNumber": data?.companyNumber,
      "password": data?.password,
      // "role":"admin"
    }
    Register({ data: registerData })
      .then((res) => {
        if (res.error) {
          console.log(res.error, 'register err')
          toast.error(res.error?.data?.message);
        }
        else {
          resetForm();
          toast.success("User Created Successfully");
          navigate('/login')
          console.log(res.data?.result, 'register res')
        }
      })
      .catch((err) => {
        console.log(err, 'catch err')
      })
    // const loginData = { email: data?.email, password: data?.password };

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
                        <P className="text-center">{"Enter your details to Sign up"}</P>
                        {/* <Input type="text" placeholder='Enter your email' value={signupProps.values.email} name='email' onChange={signupProps.handleChange} /> */}
                        <div className=' w-full flex flex-col gap-6 pb-4'>

                          <InputComponent type={"text"} value={signupProps.values.email} name='email' onChange={signupProps.handleChange} placeholder={"Enter your email"} />
                          <InputComponent type="text" name='payPalAddress' value={signupProps.values.payPalAddress} placeholder='Enter your paypal address' onChange={signupProps.handleChange} />
                          <hr />
                          {/* <Select options={options} name='country' value={value} onChange={changeHandler} /> */}
                          <div className=' relative'>
                            <Select
                              options={options}
                              name="country"
                              value={signupProps.values.country}
                              onChange={value => signupProps.setFieldValue('country', value)}
                            />
                            <ErrorMessage className='text-red-400 absolute text-[14px] pl-[4px]  mt-0' name={"country"} component='div' />
                          </div>



                          {/* <InputComponent type={"text"} value={signupProps.values.country} name='country' onChange={signupProps.handleChange} placeholder={"Enter country name"} /> */}
                          <InputComponent type={"text"} value={signupProps.values.city} name='city' onChange={signupProps.handleChange} placeholder={"Enter city name"} />
                          <InputComponent type={"text"} value={signupProps.values.address} name='address' onChange={signupProps.handleChange} placeholder={"Enter your address"} />
                          <hr />
                          <InputComponent type={"text"} value={signupProps.values.companyName} name='companyName' onChange={signupProps.handleChange} placeholder={"Enter company name"} />
                          <InputComponent type={"text"} value={signupProps.values.companyNumber} name='companyNumber' onChange={signupProps.handleChange} placeholder={"Enter company number"} />
                          <hr />
                          <InputComponent type={"password"} value={signupProps.values.password} name='password' onChange={signupProps.handleChange} placeholder={"Enter your password"} />
                          <InputComponent type={"password"} value={signupProps.values.confirmPassword} name='confirmPassword' onChange={signupProps.handleChange} placeholder={"Enter confirm password"} />

                        </div>
                        <div className="position-relative form-group mb-0">
                          <Btn color="primary" type="submit" className="d-block w-100 mt-2 rounded-full">
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
                          <Link className='ms-2 text-[#3E5FCE]' to={`${process.env.PUBLIC_URL}/login`}>
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