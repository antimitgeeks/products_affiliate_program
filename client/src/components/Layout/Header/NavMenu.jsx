import React from 'react';

import Maximize from './Maximize';
import ProfileBox from './ProfileBox';
import ChatDropdown from './ChatDropdown';
import ProfileBoxDropdown from './ProfileboxDropdown';
import NotificationDropdown from './NotificationDropdown';
import { UL, LI, Badges } from '../../AbstractElements';
import DarkButton from './DarkButton';
import Bookmarks from './Bookmark';

const NavMenu = () => {
  return (
    <UL className='nav-menus'>
      {/* <Bookmarks/> */}
      {/* <LI className='onhover-dropdown'>
        <div className='notification-box'>
          <i className='fa fa-bell-o m-0' />
          <Badges pill={true} color='primary'>
            4
          </Badges>
        </div>
        <NotificationDropdown />
      </LI> */}
      {/* <LI className='onhover-dropdown'>
        <i className='fa fa-comment-o m-0' />
        <ChatDropdown />
      </LI> */}
      {/* <DarkButton /> */}
      <div className=' flex gap-6 items-center'>
        <LI className='maximize border-0 rounded cursor-pointer h-fit p-2 w-fit bg-[#F6F8FC]'>
          <Maximize />
        </LI>
        <LI className='border-0 flex flex-col gap-0 profile-nav onhover-dropdown p-0 me-0'>
          <ProfileBox />
          <ProfileBoxDropdown />
        </LI>
      </div>
    </UL>
  );
};

export default NavMenu;
