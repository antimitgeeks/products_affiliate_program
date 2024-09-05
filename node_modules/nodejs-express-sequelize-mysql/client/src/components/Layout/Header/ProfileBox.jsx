import React from 'react';
// import Avatar from '../../assets/images/dashboard/profile.jpg';

import { Admin, EmayWalter } from '../../Constant';
import { Image, P } from '../../AbstractElements';
const ProfileBox = () => {
  return (
    <div className='d-flex profile-media'>
      <Image className='b-r-50' src="" alt='avatar' />
      <div className='flex-grow-1'>
        <span>{EmayWalter}</span>
        <P className='mb-0 font-roboto'>
          {Admin} <i className='middle fa fa-angle-down' />
        </P>
      </div>
    </div>
  );
};

export default ProfileBox;
