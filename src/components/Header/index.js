import React from 'react';
import { FaHome, FaUserAlt, FaSignInAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { Nav } from './styled';

export default function Header() {
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
    </Nav>
  );
}
