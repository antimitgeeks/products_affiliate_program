import React from 'react';
import { FiFileText, FiLogIn, FiMail, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { UL, LI } from '../../AbstractElements';
import { Account, Inbox, LogIn, Taskboard } from '../../Constant';

const ProfileboxDropdown = () => {
   
  const logout = () => {
    localStorage.clear();

  }

  return (
    <UL className="profile-dropdown onhover-show-div border-0">
      <LI>
        <Link to={`${process.env.PUBLIC_URL}/users/user-profile`}>
          <FiUser />
          <span>{Account}</span>
        </Link>
      </LI>
      <LI>
        <Link to={`${process.env.PUBLIC_URL}/email/email-inbox`}>
          <FiMail />
          <span>{Inbox}</span>
        </Link>
      </LI>
      <LI>
        <Link to={`${process.env.PUBLIC_URL}/kanban-board`}>
          <FiFileText />
          <span>{Taskboard}</span>
        </Link>
      </LI>
      <LI onClick={logout}>
        <Link to={`${process.env.PUBLIC_URL}/login`}>
          <FiLogIn />
          <span>{LogIn}</span>
        </Link>
      </LI>
    </UL>
  );
};

export default ProfileboxDropdown;
