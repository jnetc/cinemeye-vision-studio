import React, { useContext } from 'react';
// Context
import { Context } from '../../pages/index';

const Languages = ({ langHandler }) => {
  const ctx = useContext(Context);

  const langs = [
    { name: 'en', lang: 'English' },
    { name: 'no', lang: 'Norsk' },
    { name: 'fi', lang: 'Suomi' },
    { name: 'sv', lang: 'Svenska' },
  ];

  const languages = langs.map(lang => {
    return (
      <button
        type="button"
        key={lang.name}
        className={ctx === lang.name ? 'lang act-lang' : 'lang'}
        onClick={() => langHandler(lang.name)}>
        {lang.lang}
      </button>
    );
  });
  return (
    <div id="lang-btn">
      {ctx?.toUpperCase()}
      <div id="langs">{languages}</div>
    </div>
  );
};

export default Languages;
