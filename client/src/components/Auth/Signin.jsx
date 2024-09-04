import { Container, Row, Col } from "reactstrap";
import { Image } from "../AbstractElements";
import LoginTab from "./Tabs/LoginTab";

const Logins = () => {

  return (
    <Container fluid={true} className="p-0 login-page">
      <Row>
        <Col xs="12">
          <div className="login-card flex-column">
            <div className="logo">
              <Image
                className="img-fluid for-light mx-auto"
                src={require("../../Assets/logo/login.png")}
              />
            </div>
            <div className="login-main login-tab">
              <LoginTab />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Logins;
