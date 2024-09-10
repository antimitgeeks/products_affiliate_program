import React, { Fragment, useState } from 'react';
import { H6 } from '../../AbstractElements';
import { MENU } from './Menu';
import SidebarSubMenu from './SidebarSubMenu';

const SideBarNav = () => {
  const [isOpen, setIsOpen] = useState([]);

  return (
    <ul className='sidebar-links'  id='simple-bar'>
      {MENU.map((item, i) => (
        <Fragment className=" " key={i}>
          {item.title && (
            <li className='sidebar-main-title'>
              <H6>{item.title}</H6>
            </li>
          )}
          <li className='menu-box'>
            <SidebarSubMenu menu={item.menu} isOpen={isOpen} setIsOpen={setIsOpen} level={0} />
          </li>
        </Fragment>
      ))}
    </ul>
  );
};

export default SideBarNav;

