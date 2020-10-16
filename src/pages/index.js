import React, { Suspense } from 'react';
// SEO Component
import SEO from '../components/seo';
import { useStore } from '../components/store/Store';

// Components
import Header from '../components/navigation/Header';
import Intro from '../components/intro/Intro';
import Values from '../components/values/Values';
import Plans from '../components/plans/Plans';
import Youtube from '../components/modals/Youtube';
import Mailform from '../components/modals/Mailform';

// const Intro = lazy(() => import('../components/intro'));
// const Header = lazy(() => import('../components/header'));
// const Values = lazy(() => import('../components/values'));
// const Modal = lazy(() => import('../components/modal'));

const IndexPage = props => {
  const data = useStore();
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

  return (
    <>
      <SEO
        lang={data?.lang}
        theme={data?.theme}
        modal={data?.modal.active}
        select={data?.select.action}
        title={helmet.title}
        description={helmet.description}
        meta={helmet.meta}
      />
      {!isSSR && (
        <Suspense fallback={<div>Loading</div>}>
          <Youtube />
          <Mailform />
        </Suspense>
      )}
      <Header />
      <Intro />
      {!isSSR && (
        <Suspense fallback={<div>Loading</div>}>
          <Values />
          <Plans />
        </Suspense>
      )}
    </>
  );
};

export default IndexPage;
