import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
// Styles
import '../../sass/components/header.scss';
// Components
import Logo from './Logo';
import NavLink from './NavLink';
import Languages from './Languages';
// Context
import { useStore } from '../store/Store';
import { localeHandler } from '../store/remapQueries';

const defaultNavNames = [
  { link: 'Intro' },
  { link: 'Values' },
  { link: 'Plans' },
  { link: `Meet us` },
];

// Header Component
const Header = () => {
  // Получаем данные с CMS
  const query = useStaticQuery(ctx);
  // Получаем глобальные переменные
  const { lang, menu, menuHandler } = useStore();
  // Трансформация данных
  const data = localeHandler(query, lang);

  let context = data?.allDatoCmsNav;
  if (!context) {
    context = defaultNavNames;
  }

  const links = context.map(name => {
    return (
      <li key={name.link}>
        <NavLink link={name.id}>{name.link}</NavLink>
      </li>
    );
  });

  return (
    <>
      <header>
        <nav className="navigation">
          <Logo />
          <button
            type="button"
            id="nav-mob"
            aria-label="button"
            onClick={() => menuHandler({ active: true })}>
            <span />
          </button>
          <ul>{links}</ul>
          <Languages />
        </nav>
      </header>
      <template id="nav-mob-menu" className={menu.active ? 'show' : ''}>
        <span
          id="close"
          role="button"
          aria-label="close"
          tabIndex={0}
          onKeyDown={() => menuHandler({ active: false })}
          onClick={() => menuHandler({ active: false })}
        />
        <ul>{links}</ul>
      </template>
    </>
  );
};

export default Header;

// GrapQL запрос
const ctx = graphql`
  query {
    allDatoCmsNav {
      nodes {
        navigation {
          locale
          link
        }
      }
    }
  }
`;
