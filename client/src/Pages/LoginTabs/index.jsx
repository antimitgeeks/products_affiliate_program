import { useNavigate } from "react-router-dom";
import { FormGroup, Input, Label } from "reactstrap";
// import { Btn, H4, P } from "../../../AbstractElements";
// import { ForgotPassword, RememberPassword } from "../../../Constant";
// import OtherWay from "./OtherWay";
import { useState } from "react";
// import { toast } from "react-toastify";
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import feather from 'feather-icons';

const LoginTab = () => {
  const history = useNavigate();
  const [email, setEmail] = useState("test123@gmail.com");
  const [password, setPassword] = useState("Test@123");

  // const SimpleLoginHandle = (e) => {
  //   e.preventDefault()
  //   if (email === "test123@gmail.com" && password === "Test@123") {
  //     toast.success("Login Success...!");
  //     history(`${process.env.PUBLIC_URL}/dashboard/default`);
  //     localStorage.setItem("login", JSON.stringify(true));
  //   } else {
  //     toast.error("Please Enter valid email or password...!");
  //   }
  // };

  return (
    <form onSubmit={()=>{}} className="theme-form">
      <span className="text-center"> Sign In With Simple Login</span>
      <span className="text-center">{"Enter your email & password to login"}</span>
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
          <Input id="checkbox1" type="checkbox" />
          <Label className="text-muted" for="checkbox1">
            {/* {RememberPassword} */}
            rememberPassword
          </Label>
        </div>
        <a className="link" href="#javascript">
          {/* {ForgotPassword} */}
          forgotPassword
        </a>
        <span color="primary" type="submit" className="d-block w-100 mt-2">
          Login
        </span>
      </div>
      {/* <OtherWay /> */}
    </form>
  );
};

export default LoginTab;
