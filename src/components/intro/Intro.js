import React from 'react';
// Styles
import '../../sass/components/intro.scss';
// Components
import Image from './Image';
import PlayButton from '../play-button/PlayButton';
import Title from './Title';

// Context
import { useStore } from '../store/Store';

const Intro = () => {
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
    </section>
  );
};

export default Intro;
