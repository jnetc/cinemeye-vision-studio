import React from 'react';

// import Image from '../components/image';
// SEO Component
import SEO from '../components/seo';
// Components
import Modal from '../components/Modal';
import Header from '../components/Header';
import Intro from '../components/Intro';
import Values from '../components/Values';

import { useStore } from '../components/Store';

const IndexPage = () => {
  const ctx = useStore();
  const helmet = {
    lang: 'fi',
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
        lang={ctx?.lang}
        theme={ctx?.theme}
        modal={ctx?.modal}
        title={helmet.title}
        description={helmet.description}
        meta={helmet.meta}
      />
      <Modal />
      <Header />
      <Intro />
      <Values />
    </>
  );
};

export default IndexPage;
