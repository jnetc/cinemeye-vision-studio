import React from 'react';
// SEO Component
import Seo from '../components/seo';
import { useStore } from '../components/store/Store';

// Components
import Header from '../components/navigation/Header';
import Intro from '../components/intro/Intro';
import Values from '../components/values/Values';
import Plans from '../components/plans/Plans';
import Meetus from '../components/meetus/Meetus';
import Credits from '../components/credits/Credits';
import Youtube from '../components/modals/Youtube';
import MobContact from '../components/mob-contact/MobContact';

const IndexPage = () => {
  const data = useStore();
  const helmet = {
    meta: {
      url: 'https://cinemeye.com',
      image: 'https://cinemeye.com/images/og.png',
    },
  };
  // https://www.gatsbyjs.com/docs/using-client-side-only-packages/#workaround-4-use-reactlazy-and-suspense-on-client-side-only

  return (
    <>
      <Seo
        lang={data?.lang}
        modal={data?.modal.active}
        menu={data?.menu.active}
        select={data?.select.action}
        meta={helmet.meta}
      />
      <Youtube />
      <Header />
      <Intro />
      <Values />
      <Plans />
      <Meetus />
      <Credits />
      <MobContact />
    </>
  );
};

export default IndexPage;
