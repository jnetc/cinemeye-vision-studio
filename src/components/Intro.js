// import Link from 'gatsby';
import React, { useEffect, useState } from 'react';

import '../sass/components/intro.scss';
import bg from '../images/regular/intro-regular.jpg';
import PlayButton from './icons/Play';

const Intro = () => {
  const [exist, setExist] = useState(false);
  const [addClass, setAddClass] = useState('intro-title');

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
      <div
        role="button"
        tabIndex={0}
        className="play-btn"
        onMouseEnter={() => setExist(true)}
        onMouseLeave={() => setExist(false)}>
        <PlayButton />
      </div>
    </section>
  );
};

export default Intro;
