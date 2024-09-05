import { Container, Row, Col } from "reactstrap";
import { Image } from "../AbstractElements";
import LoginTab from "./Tabs/LoginTab";

const Logins = (props) => {

  return (
    <Container fluid={true} className="p-0 m-0 login-page w-full bg-slate-50">
      <Row>
        <Col xs="12">
          <div className="login-card flex-column">
            <div className="logo">
              <Image
                className="img-fluid for-light mx-auto h-[65px] w-[65px]"
                src={require("../../Assets/logo/itg_logo.webp")}
              />
            </div>
            <div className="login-main login-tab w-full">
              <LoginTab props={props} />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Logins;
