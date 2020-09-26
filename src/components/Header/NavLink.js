import { Link } from 'gatsby';
import React from 'react';

const NavLink = ({ data, location, linkHandler, children }) => {
  const link = data.toLowerCase().split(' ').join('');
  return (
    <Link
      onClick={() => linkHandler(`#${link}`)}
      className={location === `#${link}` ? 'nav-link act-link' : 'nav-link'}
      to={`/#${link}`}>
      {children}
    </Link>
  );
};

export default NavLink;
