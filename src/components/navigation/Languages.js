import React, { useState, useEffect, useCallback } from 'react';
// Global Storage
import { useStore } from '../store/Store';

const Languages = () => {
  // Toggle to open lang menu
  const [langMenu, setLangMenu] = useState(false);
  const toggle = useCallback(() => setLangMenu(!langMenu), [langMenu]);

  useEffect(() => {
    if (langMenu) {
      // Одноразовое событие на клик элемента
      document.addEventListener('click', toggle, { once: true });
    }
  }, [langMenu, toggle]);

  const ctx = useStore();
  // Existing langs
  const langs = [
    { name: 'en', lang: 'English' },
    { name: 'no', lang: 'Norsk' },
    { name: 'fi', lang: 'Suomi' },
    { name: 'sv', lang: 'Svenska' },
    // { name: 'ru', lang: 'Русский' },
  ];

  const languages = langs.map(l => {
    return (
      <button
        type="button"
        key={l.name}
        className="lang"
        // className={ctx?.lang === l.name ? 'lang act-lang' : 'lang'}
        onClick={() => {
          ctx.langHandler(l.name);
        }}>
        {l.lang}
      </button>
    );
  });
  return (
    <div
      id="lang-btn"
      className={langMenu ? 'langs-show' : ''}
      role="button"
      tabIndex={0}
      onKeyPress={() => toggle()}
      onClick={() => toggle()}>
      {ctx?.lang}
      <div id="langs">{languages}</div>
    </div>
  );
};

export default Languages;
