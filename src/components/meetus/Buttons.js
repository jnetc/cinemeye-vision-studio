import React from 'react';
// import { graphql, useStaticQuery } from 'gatsby';
// Styles
import '../../sass/components/meetus.scss';
// Component
import { Icons } from './buttons/Icons';

const Buttons = () => {
  return (
    <div className="buttons">
      <a
        href="tel:+358453491091"
        role="button"
        title="phone number"
        aria-label="phone number +358453491091"
      >
        <Icons icon="telephone" />
      </a>
      <a
        href="https://t.me/timamih_com"
        role="button"
        title="telegram contact"
        aria-label="telegram contact timamih_com"
      >
        <Icons icon="telegram" />
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=358453491091"
        role="button"
        title="whatsapp contact"
        aria-label="whatsapp contact 358453491091"
      >
        <Icons icon="whatsapp" />
      </a>
    </div>
  );
};
export default Buttons;
