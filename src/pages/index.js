import React from 'react';
// SEO Component
import SEO from '../components/seo';
import { useStore } from '../components/store/Store';

// Components
import Header from '../components/navigation/Header';
import Intro from '../components/intro/Intro';
import Values from '../components/values/Values';
import Plans from '../components/plans/Plans';
import Meetus from '../components/meetus/Meetus';
import Credits from '../components/credits/Credits';
import Youtube from '../components/modals/Youtube';
import Mailform from '../components/modals/Mailform';

// const Intro = lazy(() => import('../components/intro'));
// const Header = lazy(() => import('../components/header'));
// const Values = lazy(() => import('../components/values/Values'));
// const Plans = lazy(() => import('../components/plans/Plans'));
// const Meetus = lazy(() => import('../components/meetus/Meetus'));
// const Credits = lazy(() => import('../components/credits/Credits'));
// const Youtube = lazy(() => import('../components/modals/Youtube'));
// const Mailform = lazy(() => import('../components/modals/Mailform'));

const IndexPage = () => {
  const data = useStore();
  const helmet = {
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
        menu={data?.menu.active}
        select={data?.select.action}
        meta={helmet.meta}
      />
      <Youtube />
      <Mailform />
      <Header />
      <Intro />
      <Values />
      <Plans />
      <Meetus />
      <Credits />
    </>
  );
};

export default IndexPage;
