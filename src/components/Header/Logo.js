import React from 'react';
import { Link } from 'gatsby';

// Components
import logo from '../../images/svg/logo.svg';

const Logo = () => {
  return (
    <Link id="logo" to="/">
      <img src={logo} alt="logo" />
    </Link>
  );
};

export default Logo;
