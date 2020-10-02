import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

// Styles
import '../../sass/components/intro.scss';
// Components
import Image from './Image';
import PlayButton from '../play-button/PlayButton';
import Title from './Title';

// Context
import { useStore } from '../store/Store';

const Intro = () => {
  // const xxx = useStaticQuery(graphql`
  //   query {
  //     allDatoCmsIntro {
  //       nodes {
  //         subtitle
  //         title
  //         locale
  //       }
  //     }
  //   }
  // `);

  // if (!xxx) {
  //   return null;
  // }

  // console.log(xxx);

  const data = useStore();
  const video = data?.ctx?.datoCmsIntro;
  const context = data?.ctx?.allDatoCmsIntro;
  if (!video || !context) {
    return null;
  }

  return (
    <section id="intro">
      <Image />
      <PlayButton link={video.videoUrl} />
      <Title context={context} />
      <div id="scroll-icon" />
      {/* <div>{xxx?.allDatoCmsIntro?.nodes[0]?.title}</div> */}
    </section>
  );
};

export default Intro;
