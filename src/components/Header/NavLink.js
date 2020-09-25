import { Link } from 'gatsby';
import React from 'react';

const NavLink = ({ data, location, children }) => {
  const link = data.toLowerCase().split(' ').join('');
  return (
    <Link
      className={location === `#${link}` ? 'nav-link act-link' : 'nav-link'}
      activeClassName="act-link"
      to={`/#${link}`}>
      {children}
    </Link>
  );
};

export default NavLink;
