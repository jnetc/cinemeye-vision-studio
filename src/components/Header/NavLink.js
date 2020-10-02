import { Link } from 'gatsby';
import React from 'react';

const NavLink = ({ link, children }) => {
  // const link = data.toLowerCase().split(' ').join('');

  const isActive = ({ location }) => {
    if (location.hash === '') location.hash = '#intro';

    return location.hash === `${link}`
      ? { className: 'nav-link act-link' }
      : { className: 'nav-link' };
  };

  return (
    <Link getProps={isActive} to={`/${link}`}>
      {children}
    </Link>
  );
};

export default NavLink;
