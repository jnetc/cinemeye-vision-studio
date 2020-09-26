import React from 'react';

// import Image from '../components/image';
// SEO Component
import SEO from '../components/seo';
// Components
// import { Store } from '../components/Store';
// import Modal from '../components/Modal';
import Header from '../components/Header';
import Intro from '../components/Intro';
import Values from '../components/Values';
// Initial Context
// export const Context = React.createContext();
// import { useStore } from '../components/Store';

const IndexPage = ({ lang }) => {
  // const { lang } = useStore();
  // console.log(lang);
  // console.log(GlobalContext);
  // const [language, setLanguage] = useState('');
  // const [modal, setModal] = useState(false);

  // useEffect(() => {
  //   let ls = localStorage.getItem('lang');
  //   // Проверяем хранилище
  //   if (!ls) {
  //     localStorage.setItem('lang', 'en');
  //     setLanguage('en');
  //     return;
  //   }
  //   setLanguage(ls);
  // }, []);

  // // Проверяем предыдущее состояние
  // useEffect(
  //   prev => {
  //     if (prev !== language) localStorage.setItem('lang', language);
  //   },
  //   [language]
  // );
  // ОБработчик для смены языка
  // const changeLanguageHandler = value => setLanguage(value);

  const helmet = {
    lang: lang,
    theme: 'dark',
    title: 'Cinemeye Vision Studio | Helsinki',
    description: 'Cinematography & Media Production',
    meta: {
      url: 'https://cinemeye.com',
      image: 'https://cinemeye.com/images/og.png',
    },
  };

  return (
    <>
      <SEO
        lang={helmet.lang}
        theme={helmet.theme}
        title={helmet.title}
        description={helmet.description}
        meta={helmet.meta}
      />
      {/* <Modal /> */}
      <Header />
      <Intro />
      <Values />
    </>
  );
};

export default IndexPage;
