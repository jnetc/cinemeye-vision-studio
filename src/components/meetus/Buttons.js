import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
// Styles
import '../../sass/components/meetus.scss';
// Component
import { Icons } from './buttons/Icons';

const Buttons = () => {
  // Получаем данные с CMS
  const query = useStaticQuery(ctx);
  const context = query?.datoCmsContact;

  return (
    <div className="buttons">
      <a href={`tel:${context.phone}`} role="button" title="phone number" aria-label={`phone number ${context.phone}`}>
        <Icons icon="telephone" />
      </a>
      <a
        href={`https://telegram.me/${context.telegram.split('@')[1]}`}
        role="button"
        title="telegram contact"
        aria-label={`telegram contact ${context.telegram}`}
      >
        <Icons icon="telegram" />
      </a>
      <a
        href={`https://wa.me/${context.phone.split('+')[1]}`}
        role="button"
        title="whatsapp contact"
        aria-label={`whatsapp contact ${context.phone.split('+')[1]}`}
      >
        <Icons icon="whatsapp" />
      </a>
    </div>
  );
};
export default Buttons;

// GrapQL запрос
const ctx = graphql`
  query {
    datoCmsContact {
      phone
      whatsapp
      telegram
    }
  }
`;
