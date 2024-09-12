import React, { Fragment, useEffect, useState } from 'react';
import { H6 } from '../../AbstractElements';
import { MENU } from './Menu';
import { AdminMenu } from './AdminMenu';
import SidebarSubMenu from './SidebarSubMenu';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

const SideBarNav = () => {
  const [isOpen, setIsOpen] = useState([]);
  const [role, setRole] = useState('');

  const TokenData = Cookies.get('isLogged');

  useEffect(() => {
    if (TokenData?.length > 1) {
      const decodingToken = jwtDecode(TokenData);
      console.log(decodingToken?.role, 'decodedToken');
      setRole(decodingToken?.role)
    }
    console.log('')
  }, [TokenData])


  return (
    <ul className='sidebar-links' id='simple-bar'>
      {
        role == 'admin' ?
          AdminMenu?.map((item, i) => (
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
          ))
          :

          MENU.map((item, i) => (
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

