import React, { useContext } from 'react';
import { Col, Row } from 'reactstrap';
import { Image } from '../../AbstractElements';
import { Link } from 'react-router-dom';
import { FiAlignCenter } from 'react-icons/fi';
import NavMenu from './NavMenu';
import SearchWrapper from './SearchWrapper';
import CustomizerContext from '../../../Context/Customizer';
// import login from "../../assets/images/logo/login.png"
const Header = () => {
  const { togglSidebar, setTogglSidebar } = useContext(CustomizerContext);

  return (
    <>
      <div className={`page-header  ${togglSidebar ? "close_icon" : ""}`}>
        <Row className='header-wrapper row m-0'>
          <Col xs='auto' className='header-logo-wrapper p-0'>
            <div className='logo-wrapper'>
              <Link to={`${process.env.PUBLIC_URL}/dashboard/default`}>
                <Image className='img-fluid' src="" alt='' />
              </Link>
            </div>
            <div className="toggle-sidebar" onClick={() => setTogglSidebar(!togglSidebar)}>
              <FiAlignCenter className='status_toggle middle sidebar-toggle' />
            </div>
          </Col>
          <SearchWrapper />
          <Col xs='8' className='nav-right pull-right right-header p-0'>
            <NavMenu />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Header;
