import { Link } from 'gatsby';
import React from 'react';

const NavLink = ({ link, children }) => {
  // После обновление страницы
  // Определяем хеш ссылки и автоскролит к нему
  // ?????
  // useEffect(() => {
  // const positionHash = window.location.hash;
  // window.location.assign(positionHash);
  // }, []);

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
