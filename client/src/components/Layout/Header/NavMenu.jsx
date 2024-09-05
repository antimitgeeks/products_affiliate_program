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
    <Bookmarks/>
      <LI className='onhover-dropdown'>
        <div className='notification-box'>
          <i className='fa fa-bell-o m-0' />
          <Badges pill={true} color='primary'>
            4
          </Badges>
        </div>
        <NotificationDropdown />
      </LI>
      <LI className='onhover-dropdown'>
        <i className='fa fa-comment-o m-0' />
        <ChatDropdown />
      </LI>
      <DarkButton />
      <LI className='maximize'>
        <Maximize />
      </LI>
      <LI className='border-0 profile-nav onhover-dropdown p-0 me-0'>
        <ProfileBox />
        <ProfileBoxDropdown />
      </LI>
    </UL>
  );
};

export default NavMenu;
