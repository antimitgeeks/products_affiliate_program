import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Image } from '../../AbstractElements';
// import logo from '../../assets/images/logo/logo.png';
import CustomizerContext from '../../../Context/Customizer';

const LogoWrapper = () => {
  const { togglSidebar, setTogglSidebar } = useContext(CustomizerContext)

  return (
    <div className='logo-wrapper'>
      <Link to={`${process.env.PUBLIC_URL}/dashboard/`}>
        <Image className='img-fluid for-light' src="" alt='logo' />
      </Link>
      <div onClick={() => setTogglSidebar(!togglSidebar)} className='back-btn'>
        <i className='fa fa-angle-left' />
      </div>
      <div onClick={() => setTogglSidebar(!togglSidebar)} className='toggle-sidebar'>
        <i className='fa fa-cog status_toggle middle sidebar-toggle' />
      </div>
    </div>
  );
};

export default LogoWrapper;
  