import React from 'react';
// Global Storage
import { useStore } from '../Store';

const Languages = () => {
  const store = useStore();

  console.log(store);
  const langs = [
    { name: 'en', lang: 'English' },
    { name: 'no', lang: 'Norsk' },
    { name: 'fi', lang: 'Suomi' },
    { name: 'sv', lang: 'Svenska' },
  ];

  const languages = langs.map(l => {
    return (
      <button
        type="button"
        key={l.name}
        className={store?.lang === l.name ? 'lang act-lang' : 'lang'}
        onClick={() => {
          store.langHandler(l.name);
        }}>
        {l.lang}
      </button>
    );
  });
  return (
    <div id="lang-btn">
      {store?.lang.toUpperCase()}
      <div id="langs">{languages}</div>
    </div>
  );
};

export default Languages;
