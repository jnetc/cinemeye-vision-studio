import React, { useState, useEffect } from 'react';
// import { Link } from 'gatsby';
// import '../sass/styles.scss';

// import Image from '../components/image';
import SEO from '../components/seo';

import Header from '../components/Header';
import Intro from '../components/Intro';
import Values from '../components/Values';

export const Context = React.createContext();

const IndexPage = () => {
  const [language, setLanguage] = useState('en');

  useEffect(
    prev => {
      // Проверяем хранилище
      if (!language) {
        localStorage.setItem('lang', language);
      }
      // Меняем язык если не совпадают значения
      if (prev !== language) {
        localStorage.setItem('lang', language);
      }
    },
    [language]
  );

  const changeLanguageHadler = value => {
    setLanguage(value);
  };

  const helmet = {
    lang: language,
    theme: 'dark',
    title: 'Cinemeye Vision Studio | Helsinki',
    description: 'Cinematography & Media Production',
    meta: {
      url: 'https://cinemeye.com',
      image: 'https://cinemeye.com/images/og.png',
    },
  };

  return (
    <Context.Provider value={language}>
      <SEO
        lang={helmet.lang}
        theme={helmet.theme}
        title={helmet.title}
        description={helmet.description}
        meta={helmet.meta}
      />
      <Header langHandler={changeLanguageHadler} />
      <Intro />
      <Values />
    </Context.Provider>
  );
};

export default IndexPage;
