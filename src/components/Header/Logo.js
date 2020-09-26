import React from 'react';
import { Link } from 'gatsby';

// Components
import logo from '../../images/svg/logo.svg';

const Logo = ({ linkHandler }) => {
  return (
    <Link id="logo" to="/" onClick={() => linkHandler('')}>
      <img src={logo} alt="logo" />
    </Link>
  );
};

export default Logo;
