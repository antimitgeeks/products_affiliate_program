import React from 'react';
import { FiFileText, FiLogIn, FiMail, FiUser } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { UL, LI } from '../../AbstractElements';
import { Account, Inbox, LogIn, Taskboard } from '../../Constant';
import Cookies from 'js-cookie';

const ProfileboxDropdown = () => {

  const navigate = useNavigate()

  const logout = () => {
    localStorage.clear();
    Cookies.remove("isLogged"); navigate('/')
  };


  return (
    <UL className="profile-dropdown px-3 py-[10px] onhover-show-div border flex flex-col gap-1 shadow-sm">
      <LI className="border-0 border-b-2">
        <Link className=' flex w-full items-center gap-3 p-1' to={`${process.env.PUBLIC_URL}/users/user-profile`}>
          <FiUser />
          <span>{Account}</span>
        </Link>
      </LI>
      <hr />
      <LI className="border-0">
        <Link className=' flex w-full items-center gap-3 p-1' to={`${process.env.PUBLIC_URL}/email/email-inbox`}>
          <FiMail />
          <span>{Inbox}</span>
        </Link>
      </LI>
      <hr />
      <LI className="border-0">
        <Link className=' flex w-full items-center gap-3 p-1' to={`${process.env.PUBLIC_URL}/kanban-board`}>
          <FiFileText />
          <span>{Taskboard}</span>
        </Link>
      </LI>
      <hr />
      <LI className="border-0" onClick={logout}>
        <Link className=' flex w-full items-center gap-3 p-1' >
          <FiLogIn />
          <span>Log Out</span>
        </Link>
      </LI>
    </UL>
  );
};

export default ProfileboxDropdown;
