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

// Header Component
const Header = () => {
  // Получаем данные с CMS
  const query = useStaticQuery(ctx);
  // Получаем глобальные переменные
  const { lang } = useStore();
  // Трансформация данных
  const data = localeHandler(query, lang);

  const defaultNavNames = [
    { link: 'Intro' },
    { link: 'Values' },
    { link: 'Plans' },
    { link: `Meet us` },
  ];
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
    <header>
      <nav className="navigation">
        <Logo />
        <ul>{links}</ul>
        <Languages />
      </nav>
    </header>
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

///////###############
/// До делать потом
// useEffect(() => {
//   const sections = document.querySelectorAll('section');
//   const animScroll = () => {
//     sections.forEach(el => {
//       // Верхняя точка элемента
//       // const top = el.getBoundingClientRect().top;
//       // Значения при прокрутке относительно верхней части окна
//       const scrollValues = window.pageYOffset;
//       // const animItemOffset = top + scrollValues;
//       // Выстота элемента
//       const elementHeight = el.offsetHeight + 100;
//       // Видимая часть окна (размер по высоте)
//       // const winSize = window.innerHeight;
//       const animationPoint = 2; // Коэфициент

//       let actionPoint = elementHeight / animationPoint;

//       if (scrollValues > actionPoint) {
//         // console.log('start');
//       }
//       // console.log(scrollValues, elementHeight, actionPoint);
//     });
//   };
//   window.addEventListener('scroll', animScroll);
// }, []);
///////###############
