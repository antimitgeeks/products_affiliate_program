import { useNavigate } from "react-router-dom";
import { FormGroup, Input, Label } from "reactstrap";
import { Btn, H4, P } from "../../../AbstractElements";
import { ForgotPassword, RememberPassword } from "../../../Constant";
import OtherWay from "./OtherWay";
import { useState } from "react";
import { toast } from "react-toastify";
import Cookies from 'js-cookie';
import { useEffect } from 'react';

const LoginTab = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("test123@gmail.com");
  const [password, setPassword] = useState("Test@123");
  const [rememberMe, setRememberMe] = useState(false);
  let isLogged = Cookies.get("isLogged");


  useEffect(() => {
    if (isLogged) {
      navigate('/dashboard/default');
    }
  }, [isLogged]);



  const SimpleLoginHandle = (e) => {
    e.preventDefault();

    if (email === "test123@gmail.com" && password === "Test@123") {
      toast.success("Login Success...!");
      let data = { email: email, password: password };

      Cookies.set("isLogged", `${data}`, { expires: 30 });
      props.props.auth(true);
      navigate(`${process.env.PUBLIC_URL}/dashboard/default`);

    } else {
      toast.error("Please Enter valid email or password...!");
    }

  };

  return (
    <form onSubmit={SimpleLoginHandle} className="theme-form">
      <H4 className="text-center font-semibold text-xl"> Sign In</H4>
      <P className="text-center">{"Enter your email & password to login"}</P>
      <FormGroup>
        <Input type="text" defaultValue={email} onChange={(event) => setEmail(event.target.value)} />
      </FormGroup>
      <FormGroup className="position-relative">
        <div className="position-relative">
          <Input type="password" defaultValue={password} onChange={(event) => setPassword(event.target.value)} />
        </div>
      </FormGroup>
      <div className="position-relative form-group mb-0">
        <div className="checkbox">
          <Input id="checkbox1" type="checkbox" onChange={(e) => setRememberMe(e.target.checked)} />
          <Label className="text-muted" for="checkbox1">
            {RememberPassword}
          </Label>
        </div>
        <a className="link" href="/reset-password/user">
          {ForgotPassword}
        </a>
        <Btn color="primary" type="submit" className="d-block w-100 mt-2">
          Login
        </Btn>
      </div>
      <OtherWay />
    </form>
  );
};

export default LoginTab;
