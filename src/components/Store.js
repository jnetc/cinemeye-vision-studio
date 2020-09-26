import React, { useState, useEffect, useContext } from 'react';

export const Context = React.createContext();

// Языковый хук
export const useStore = () => {
  return useContext(Context);
};

// Создаем глобальные состояния для Index
export const Store = ({ children }) => {
  const [language, setLanguage] = useState('');
  // const [modal, setModal] = useState(false);

  // Определение языка
  useEffect(() => {
    let ls = localStorage.getItem('lang');
    // Проверяем хранилище
    if (!ls) {
      localStorage.setItem('lang', 'en');
      setLanguage('en');
      return;
    }
    setLanguage(ls);
  }, []);

  // Проверяем предыдущее состояние
  useEffect(
    prev => {
      if (prev !== language) localStorage.setItem('lang', language);
    },
    [language]
  );

  return (
    <Context.Provider
      value={{
        lang: language,
        langHandler: value => setLanguage(value),
      }}>
      {children}
    </Context.Provider>
  );
};
