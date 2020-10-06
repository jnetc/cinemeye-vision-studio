import React, { useState, useEffect, useContext } from 'react';

// Параметры состояния по умолчанию
const state = {
  lang: 'fi',
  theme: 'dark',
  modal: { active: false },
};

// CONTEXT
export const Context = React.createContext(state);
// Хук глобального  хранилища
export const useStore = () => {
  return useContext(Context);
};

export const Store = ({ children }) => {
  // Создаем глобальные состояния для Index
  const [lang, setLang] = useState('');
  const [modal, setModal] = useState(state.modal);
  const [theme] = useState(state.theme);

  // Определение языка
  useEffect(() => {
    let langLS = localStorage.getItem('lang');
    // Проверяем хранилище
    if (!langLS) {
      localStorage.setItem('lang', state.lang);
      setLang(state.lang);
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
      }}>
      {children}
    </Context.Provider>
  );
};
