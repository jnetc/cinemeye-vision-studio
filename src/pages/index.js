import React, { Suspense } from 'react';
// SEO Component
import SEO from '../components/seo';
import { useStore } from '../components/store/Store';

// Components
// import Header from '../components/header/Header';
import Intro from '../components/intro/Intro';
import Values from '../components/values/Values';
import Modal from '../components/modal/Modal';

// const Intro = lazy(() => import('../components/intro'));
// const Header = lazy(() => import('../components/header'));
// const Values = lazy(() => import('../components/values'));
// const Modal = lazy(() => import('../components/modal'));

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
  // https://www.gatsbyjs.com/docs/using-client-side-only-packages/#workaround-4-use-reactlazy-and-suspense-on-client-side-only
  const isSSR = typeof window === 'undefined';

  // console.log('refresh index page', ctx?.lang);
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
      {!isSSR && (
        <Suspense fallback={<div>Loading</div>}>
          <Modal />
        </Suspense>
      )}
      {/* <Header /> */}
      <Intro />
      {!isSSR && (
        <Suspense fallback={<div>Loading</div>}>
          <Values />
        </Suspense>
      )}
    </>
  );
};

export default IndexPage;
