import React from 'react';
import { FaHome, FaUserAlt, FaSignInAlt } from 'react-icons/fa';

import { Nav } from './styled';

export default function Header() {
  return (
    <Nav>
      <a href="">
        <FaHome size={30} />
      </a>
      <a className="icon1" href="">
        <FaUserAlt size={30} />
      </a>
      <a className="icon1" href="">
        <FaSignInAlt size={30} />
      </a>
    </Nav>
  );
}
