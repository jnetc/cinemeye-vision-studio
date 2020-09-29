import React, { lazy, Suspense } from 'react';
// SEO Component
import SEO from '../components/seo';
import { useStore } from '../components/store/Store';

// Components
import Header from '../components/header';
import Intro from '../components/intro';
// import Values from '../components/values';
// import Modal from '../components/modal';
// const Intro = lazy(() => import('../components/intro'));
// const Header = lazy(() => import('../components/header'));
const Values = lazy(() => import('../components/values'));
const Modal = lazy(() => import('../components/modal'));

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
  const isSSR = typeof window === 'undefined';
  return (
    <>
      <SEO
        lang={ctx?.lang}
        theme={ctx?.theme}
        modal={ctx?.modal.active}
        title={helmet.title}
        description={helmet.description}
        meta={helmet.meta}
      />
      <Header />
      <Intro />
      {!isSSR && (
        <Suspense fallback={<div>Loading</div>}>
          <Modal />
          <Values />
        </Suspense>
      )}
    </>
  );
};

export default IndexPage;
