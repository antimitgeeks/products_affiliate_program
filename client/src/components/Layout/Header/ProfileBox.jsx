import React from 'react';
import Avatar from '../../../Assets/images/dashboard/profile.jpg';
import { Admin, EmayWalter } from '../../Constant';
import { Image, P } from '../../AbstractElements';
import { FaAngleDown } from "react-icons/fa6";

const ProfileBox = () => {
  return (
    <div className='d-flex flex gap-3'>
      <Image className=' rounded-full' src={Avatar} alt='avatar' />
      <div className=' flex flex-col gap-0'>
        <span className=' m-0 p-0'>{EmayWalter}</span>
        <p className='m-0 p-0 text-slate-500 flex gap-1 items-center font-roboto'>
          Admin 
          <FaAngleDown/>
        </p>
      </div>
    </div>
  );
};

export default ProfileBox;