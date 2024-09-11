
import React, { useContext } from 'react';
import { Col, Row } from 'reactstrap';
import { Image } from '../../AbstractElements';
import { Link } from 'react-router-dom';
import { FiAlignCenter } from 'react-icons/fi';
import NavMenu from './NavMenu';
import SearchWrapper from './SearchWrapper';
import CustomizerContext from '../../../Context/Customizer';
import  login from "../../../Assets/logo/login.png";

const Header = () => {
  const { togglSidebar, setTogglSidebar } = useContext(CustomizerContext);

  return (
    <>
     <div className={`page-header w-full jub ${togglSidebar ? "close_icon" : ""}`}>
        <Row className=' row m-0 py-4 px-5 w-full justify-between'>
          <div className='header-logo-wrapper p-0 w-2/5'>
            {/* <div className=' logo-wrapper absolute z-[10000] left-2'>
              <Link to={`${process.env.PUBLIC_URL}/dashboard/default`}>
                <Image className='img-fluid' src={login} alt='' />
              </Link>
            </div>
            <div className="toggle-sidebar" onClick={() => setTogglSidebar(!togglSidebar)}>
              <FiAlignCenter className='status_toggle middle sidebar-toggle' />
            </div> */}
          <SearchWrapper />
          </div>
          <div className='nav-right pull-right right-header p-0'>
            <NavMenu />
          </div>
        </Row>
      </div>
    </>
  );
};

export default Header;
