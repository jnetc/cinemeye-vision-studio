import React, { useState, useEffect, useRef } from 'react';
// import { graphql, useStaticQuery } from 'gatsby';
//Style
import '../../sass/components/mobcontact.scss';
// Components
import InfoIcon from '../icons/Info';
import { Icons } from '../meetus/buttons/Icons';

const MobContact = () => {
  // Получаем данные с CMS
  // const query = useStaticQuery(ctx);
  // const context = query?.datoCmsContact;
  const refStart = useRef(null);
  const refEnd = useRef(null);

  const [action, setAction] = useState(false);

  const toggle = () => setAction(!action);

  useEffect(() => {
    refStart.current.addEventListener('transitionstart', event => {
      event.target.closest('.boxes').classList.add('filter');
    });
    refEnd.current.addEventListener('transitionend', event => {
      event.target.closest('.boxes').classList.remove('filter');
    });
    const body = document.body;
    const eventOutOfEl = e => {
      const boxes = e.target.closest('.boxes');
      if (!boxes) {
        setAction(false);
      }
    };
    body.addEventListener('click', eventOutOfEl);
    return () => {
      refStart.current.removeEventListener('transitionstart', () => {});
      refEnd.current.addEventListener('transitionend', () => {});
      refStart.current = null;
      refEnd.current = null;
      body.removeEventListener('click', eventOutOfEl);
    };
  }, []);

  return (
    <>
      <div className={action ? 'boxes action ' : 'boxes '}>
        <div
          id="info"
          role="button"
          aria-label="button"
          tabIndex={0}
          className={action ? 'box action' : 'box'}
          onKeyPress={toggle}
          onClick={toggle}
        >
          <InfoIcon />
        </div>
        <div className="box" id="info-anim" />

        <a
          href="tel:+358453491091"
          role="button"
          title="phone number"
          aria-label="phone number +358453491091"
          className="box"
          id="phone"
          ref={refStart}
        >
          <Icons icon="telephone" />
        </a>
        <a
          href="https://telegram.me/timamih_com"
          role="button"
          title="telegram contact"
          aria-label="telegram contact timamih_com"
          className="box"
          id="telega"
        >
          <Icons icon="telegram" />
        </a>
        <a
          href="https://wa.me/358453491091"
          role="button"
          title="whatsapp contact"
          aria-label="whatsapp contact 358453491091"
          className="box"
          id="wapp"
          ref={refEnd}
        >
          <Icons icon="whatsapp" />
        </a>
      </div>
      <svg id="svg">
        <defs>
          <filter id="filter">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="filter"
            />
            <feBlend in="SourceGraphic" in2="filter" />
          </filter>
        </defs>
      </svg>
    </>
  );
};
export default MobContact;

// GrapQL запрос
// const ctx = graphql`
//   query {
//     datoCmsContact {
//       phone
//       whatsapp
//       email
//     }
//   }
// `;
