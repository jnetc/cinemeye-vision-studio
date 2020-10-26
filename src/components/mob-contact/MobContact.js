import React, { useState, useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
//Style
import '../../sass/components/mobcontact.scss';
// Components
import PhoneIcon from '../icons/Phone';
import WappIcon from '../icons/Wapp';
import EmailIcon from '../icons/Email';
import InfoIcon from '../icons/Info';

const MobContact = () => {
  // Получаем данные с CMS
  const query = useStaticQuery(ctx);
  const context = query?.datoCmsContact;

  const [action, setAction] = useState(false);

  const toggle = () => setAction(!action);

  useEffect(() => {
    const body = document.body;
    const eventOutOfEl = e => {
      const boxes = e.target.closest('.boxes');
      if (!boxes) {
        setAction(false);
      }
    };
    body.addEventListener('click', eventOutOfEl);
  }, []);

  return (
    <>
      <div className={action ? 'boxes action' : 'boxes'}>
        <div
          id="info"
          role="button"
          aria-label="button"
          tabIndex={0}
          className={action ? 'box action' : 'box'}
          onKeyPress={toggle}
          onClick={toggle}>
          <InfoIcon />
        </div>
        <a href={`tel:${context?.phone}`} className="box" id="phone">
          <span>Phone number</span>
          <PhoneIcon />
        </a>
        <a href={`mailto:${context?.email}`} className="box" id="email">
          <span>Email</span>
          <EmailIcon />
        </a>
        <a href={`${context?.whatsapp}`} className="box" id="wapp">
          <span>Whatapp</span>
          <WappIcon />
        </a>
      </div>
      <svg id="svg">
        <defs>
          <filter id="filter">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
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
const ctx = graphql`
  query {
    datoCmsContact {
      phone
      whatsapp
      email
    }
  }
`;
