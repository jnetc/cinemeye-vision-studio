import React, { useState, useEffect } from 'react';

// import Image from '../components/image';
// SEO Component
import SEO from '../components/seo';
// Components
import Modal from '../components/Modal';
import Header from '../components/Header';
import Intro from '../components/Intro';
import Values from '../components/Values';
// Initial Context
export const Context = React.createContext();

const IndexPage = () => {
  const [language, setLanguage] = useState('');
  const [modal, setModal] = useState(false);

  useEffect(() => {
    let ls = localStorage.getItem('lang');
    // Проверяем хранилище
    if (!ls) {
      localStorage.setItem('lang', 'en');
      setLanguage('en');
      return;
    }
    setLanguage(ls);
  }, []);

  // Проверяем предыдущее состояние
  useEffect(
    prev => {
      if (prev !== language) localStorage.setItem('lang', language);
    },
    [language]
  );
  // ОБработчик для смены языка
  const changeLanguageHandler = value => setLanguage(value);

  const helmet = {
    lang: language,
    theme: 'dark',
    modal,
    title: 'Cinemeye Vision Studio | Helsinki',
    description: 'Cinematography & Media Production',
    meta: {
      url: 'https://cinemeye.com',
      image: 'https://cinemeye.com/images/og.png',
    },
  };

  return (
    <Context.Provider value={language} modal={modal}>
      <SEO
        lang={helmet.lang}
        theme={helmet.theme}
        title={helmet.title}
        description={helmet.description}
        meta={helmet.meta}
      />
      {/* <Modal /> */}
      <Header langHandler={changeLanguageHandler} />
      <Intro />
      <Values />
    </Context.Provider>
  );
};

export default IndexPage;
