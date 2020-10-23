import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
// Styles
import '../../sass/components/intro.scss';
// Components
import Image from './Image';
import PlayButton from '../play-button/PlayButton';
// import FingerPrint from '../icons/FingerPrint';
import Title from './Title';
// Context
import { useStore } from '../store/Store';
import { localeHandler } from '../store/remapQueries';

const Intro = () => {
  // Получаем данные с CMS
  const query = useStaticQuery(ctx);
  // Получаем глобальные переменные
  const { lang } = useStore();
  // Трансформация данных
  const data = localeHandler(query, lang);
  const context = data?.allDatoCmsIntro;

  return (
    <section id="intro">
      <Image />
      <PlayButton link={context?.videoUrl} />
      <Title context={context} />
      <div id="scroll-icon" />
      {/* <div id="scroll-mob-icon">
        <FingerPrint />
      </div> */}
    </section>
  );
};

export default Intro;

// GrapQL запрос
const ctx = graphql`
  query {
    allDatoCmsIntro {
      nodes {
        locale
        title
        subtitle
        videoUrl
      }
    }
  }
`;
