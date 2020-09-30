import React from 'react';
// Styles
import '../../sass/components/header.scss';
// Components
import Logo from './Logo';
import NavLink from './NavLink';
import Languages from './Languages';

// Header Component
const Header = () => {
  const names = ['Intro', 'Values', 'Plans', `Meet us`];

  const links = names.map(link => {
    return (
      <li key={link}>
        <NavLink data={link}>{link}</NavLink>
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
