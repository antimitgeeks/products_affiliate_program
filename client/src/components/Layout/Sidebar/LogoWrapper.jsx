import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Image } from '../../AbstractElements';
// import logo from '../../assets/images/logo/logo.png';
import CustomizerContext from '../../../Context/Customizer';
import { IoSettingsSharp } from "react-icons/io5";

const LogoWrapper = () => {
  const { togglSidebar, setTogglSidebar } = useContext(CustomizerContext)

  return (
    <div className='logo-wrapper'>
      <Link to={`${process.env.PUBLIC_URL}/dashboard/`}>
        <Image className='img-fluid for-light' src="" alt='logo' />
      </Link>
      <div onClick={() => setTogglSidebar(!togglSidebar)} className='back-btn'>
        S
      </div>
      <div onClick={() => setTogglSidebar(!togglSidebar)} className=' text-[24px] toggle-sidebar hover:none text-white'>
        <IoSettingsSharp color='white' stroke='white' size={24} />
      </div>
    </div>
  );
};

export default LogoWrapper;