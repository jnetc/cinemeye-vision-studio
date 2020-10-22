import React from 'react';
// Styles
import '../../sass/components/meetus.scss';
// Components
import Slider from './Slider';
import Meetform from './Meetform';
import Info from './Info';

const Meetus = () => {
  return (
    <section id="meetus">
      <Slider />
      <span id="meetus-title">Let's talk</span>
      <Meetform />
      <Info />
    </section>
  );
};

export default Meetus;
