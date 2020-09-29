import React, { useState, useEffect } from 'react';
// Styles
import '../../sass/components/header.scss';
// Components
import Logo from './Logo';
import NavLink from './NavLink';
import Languages from './Languages';

// Header Component
const Header = () => {
  // All Links
  const [location, setLocation] = useState('');
  useEffect(() => {
    setLocation(window.location.hash); // Get location name
  }, [location]);

  const names = ['Intro', 'Values', 'Plans', `Meet us`];

  const linkHandler = value => {
    setLocation(value);
  };

  const links = names.map(link => {
    if (location === '') setLocation('#intro');
    return (
      <li key={link}>
        <NavLink data={link} location={location} linkHandler={linkHandler}>
          {link}
        </NavLink>
      </li>
    );
  });

  return (
    <header>
      <nav className="navigation">
        <Logo linkHandler={linkHandler} />
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
