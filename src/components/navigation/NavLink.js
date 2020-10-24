import { Link } from 'gatsby';
import React from 'react';

// Context
import { useStore } from '../store/Store';

const NavLink = ({ link, children }) => {
  // Получаем глобальные переменные
  const { menuHandler } = useStore();
  return (
    <Link
      className="nav-link"
      to={`/${link}`}
      onKeyDown={() => menuHandler({ active: false })}
      onClick={() => menuHandler({ active: false })}>
      {children}
    </Link>
  );
};

export default NavLink;
