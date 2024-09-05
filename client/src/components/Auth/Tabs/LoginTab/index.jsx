import { Link, useNavigate } from "react-router-dom";
import { FormGroup, Input, Label } from "reactstrap";
import { Btn, H4, P } from "../../../AbstractElements";
import { ForgotPassword, RememberPassword } from "../../../Constant";
import OtherWay from "./OtherWay";
import { useState } from "react";
import { toast } from "react-toastify";
import Cookies from 'js-cookie';
import { useEffect } from 'react';
import InputComponent from "../../../InputComponent";
import { useLoginMutation } from "../../../../services/AuthServices";
import * as yup from 'yup';
import { Form, Formik } from "formik";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";

const LoginTab = (props) => {
  const navigate = useNavigate();

  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState('password');

  let isLogged = Cookies.get("isLogged");
  const [Login] = useLoginMutation();

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = yup.object().shape({
    email: yup.string().trim("Enter valid email").required("email is required").email(),
    password: yup.string().trim("Enter valid password").required("password is required").strict(),
  });

  useEffect(() => {
    if (isLogged) {
      navigate('/dashboard/default');
    }
  }, [isLogged]);



  const SimpleLoginHandle = (data, { resetForm }) => {

    Login({ data: data })
      .then((res) => {
        if (res.error) {
          console.log(res.error?.data?.message, 'err')
          toast.error(res.error?.data?.message);
        }
        else {
          toast.success("Login Success...!");
          Cookies.set("isLogged", `${res?.data?.result?.accessToken}`, { expires: 30 });
          props.props.auth(true);
          resetForm();
          navigate(`${process.env.PUBLIC_URL}/dashboard/default`);
        }

      })
      .catch((err) => {
        console.log(err, 'err')
        toast.error("Please Enter valid email or password...!");
      })

  };

  return (
    <div className=" w-full p-0 m-0">
      <Formik
        enableReinitialize
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={SimpleLoginHandle}
      >
        {(loginProps) =>
        (
          <Form>

            <div className="theme-form flex flex-col gap-3 p-3  w-full">
              <H4 className="text-center font-semibold text-2xl"> Sign In</H4>
              <P className="text-center">{"Enter your email & password to SignIn"}</P>
              <FormGroup className=" flex flex-col gap-5">
                <InputComponent label={"Email"} placeholder={"Enter your Email"} value={loginProps.values.email} name={"email"} type="text" onChange={loginProps.handleChange} />
                <div className=" relative flex gap-1 justify-between">
                  <InputComponent label={"Password"} placeholder={"Enter your Password"} value={loginProps.values.password} name={"password"} type={ showPassword=="password"?"password":"text"} onChange={loginProps.handleChange} />
                  <span onClick={()=>showPassword=='password'?setShowPassword('text'):setShowPassword('password')} className=" cursor-pointer absolute right-3 bottom-3">
                    {
                      showPassword=="password"?
                      <FiEyeOff className=" cursor-pointer"/>
                      :
                      <FiEye className=" cursor-pointer" />
                    }
                  </span>
                </div>
                <div className=" w-full float-end flex justify-end">
                  <a className=" text-[#3E5FCE] text-[15px]" href="/reset-password/user">
                    Forgot password ?
                  </a>
                </div>
              </FormGroup>
              <Btn color="primary" type="submit" className="d-block w-100 mt-2 rounded-full">
                Sign In
              </Btn>
              <div className=" pt-3 w-full flex items-center justify-center">
                <hr />
                Don't have account?
                <Link className='ms-2 text-[#3E5FCE]' to={`${process.env.PUBLIC_URL}/register`}>
                  Create Account
                </Link>
              </div>
            </div >
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginTab;
