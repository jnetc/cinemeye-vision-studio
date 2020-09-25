import { Link } from 'gatsby';
import React, { useState, useEffect, useContext } from 'react';

import '../sass/components/header.scss';
import logo from '../images/svg/logo.svg';
import NavLink from './Header/NavLink';
import Languages from './Header/Languages';
import { Context } from '../pages/index';

// Header Component
const Header = ({ langHandler }) => {
  const [location, setLocation] = useState('');
  // Languages
  const language = useContext(Context);
  const langs = [
    { name: 'en', lang: 'English' },
    { name: 'no', lang: 'Norsk' },
    { name: 'fi', lang: 'Suomi' },
    { name: 'sv', lang: 'Svenska' },
  ];
  // All Links
  useEffect(() => {
    setLocation(window.location.hash); // Get location name
  }, [location]);
  const names = ['Intro', 'Values', 'Plans', `Meet us`];
  const links = names.map(link => {
    if (location === '') setLocation('#intro');

    return (
      <li key={link}>
        <NavLink data={link} location={location}>
          {link}
        </NavLink>
      </li>
    );
  });

  return (
    <header>
      <nav className="navigation">
        <Link id="logo" to="/">
          <img src={logo} alt="logo" />
        </Link>
        <ul>{links}</ul>
        <div id="lang-btn">
          {language.toUpperCase()}

          <Languages langs={langs} langHandler={langHandler} />
        </div>
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
