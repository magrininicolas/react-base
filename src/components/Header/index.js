import React from 'react';
import { FaHome, FaUserAlt, FaSignInAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Nav } from './styled';

export default function Header() {
  const clickButton = useSelector((state) => state.clickButton);

  return (
    <Nav>
      <Link to="/">
        <FaHome size={30} />
      </Link>
      <Link to="/login">
        <FaUserAlt size={30} />
      </Link>
      <Link to="/test">
        <FaSignInAlt size={30} />
      </Link>
      {clickButton ? 'Clicked' : 'Not Clicked'}
    </Nav>
  );
}
