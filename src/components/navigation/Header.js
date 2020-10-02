import React from 'react';
// Styles
import '../../sass/components/header.scss';
// Components
import Logo from './Logo';
import NavLink from './NavLink';
import Languages from './Languages';

import { useStore } from '../store/Store';

// Header Component
const Header = () => {
  const data = useStore();

  const defaultNavNames = [
    { link: 'Intro' },
    { link: 'Values' },
    { link: 'Plans' },
    { link: `Meet us` },
  ];
  let navNames = data?.ctx?.allDatoCmsNav?.navigation;
  if (!navNames) {
    navNames = defaultNavNames;
  }

  const links = navNames.map(name => {
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
