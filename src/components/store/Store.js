import React, { useState, useEffect, useContext } from 'react';

// Параметры состояния по умолчанию
const youtubeFilter = `autoplay=1&rel=0&controls=2&showinfo=0`;

const state = {
  language: 'fi',
  theme: 'dark',
  modal: { active: false },
  fetchData: lang => ({ data: lang }),
  videoUrl: `https://www.youtube.com/embed/VV9xSx4danU?${youtubeFilter}`,
};

export const Context = React.createContext();

// Языковый хук
export const useStore = () => {
  return useContext(Context);
};

// Создаем глобальные состояния для Index
export const Store = ({ children }) => {
  const [lang, setLang] = useState('');
  const [modal, setModal] = useState(state.modal);
  const [theme] = useState(state.theme);

  // Определение языка
  useEffect(() => {
    let langLS = localStorage.getItem('lang');
    // Проверяем хранилище
    if (!langLS) {
      localStorage.setItem('lang', state.language);
      setLang(state.language);
      return;
    }
    setLang(langLS);
  }, []);

  // Проверяем предыдущее состояние
  useEffect(
    prev => {
      if (prev !== lang) localStorage.setItem('lang', lang);
    },
    [lang]
  );

  return (
    <Context.Provider
      value={{
        lang,
        langHandler: value => setLang(value),
        theme,
        modal,
        modalHandler: obj => setModal(obj),
        videoUrl: state.videoUrl,
      }}>
      {children}
    </Context.Provider>
  );
};
