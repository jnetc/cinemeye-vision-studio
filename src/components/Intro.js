import React, { useEffect, useState } from 'react';
// Styles
import '../sass/components/intro.scss';
// Components
import bg from '../images/regular/intro-regular.jpg';
import PlayButtonIcon from './icons/Play';

// Context
import { useStore } from '../components/Store';

const Intro = () => {
  const [exist, setExist] = useState(false);
  const [addClass, setAddClass] = useState('intro-title');
  const ctx = useStore();

  useEffect(() => {
    if (exist) {
      setAddClass('intro-title anim-ttl');
    } else {
      setAddClass('intro-title');
    }
  }, [exist]);

  return (
    <section id="intro">
      <figure>
        <img src={bg} alt="intro" />
      </figure>
      <div className={addClass}>
        <h1>We make</h1>
        <h2>Cinematography & Media Production</h2>
      </div>
      <button
        type="button"
        className="play-btn"
        onMouseEnter={() => setExist(true)}
        onMouseLeave={() => setExist(false)}
        onClick={() => ctx.modalHandler({ active: true, data: ctx.videoUrl })}>
        <PlayButtonIcon />
      </button>
      <div id="scroll-icon" />
    </section>
  );
};

export default Intro;
