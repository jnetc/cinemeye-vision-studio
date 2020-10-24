import React, { useState, useEffect, useContext } from 'react';
import language from '../../utils/user-lang';

// Параметры состояния по умолчанию
const state = {
  lang: 'fi',
  modal: { active: false },
  menu: { active: false },
  select: { plan: '', action: false },
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
  const [menu, setMenu] = useState(state.menu);
  const [select, setSelect] = useState(state.select);

  // Plan selection
  const selectHandler = refSelect => {
    // Получаем текущий класс плана
    const currentPlanClass = refSelect.current?.classList[1];
    if (currentPlanClass) {
      // Проверяем соответствие и создаем объект с нужными значениями
      if (refSelect.current.className.includes('select')) {
        setSelect({ plan: currentPlanClass, action: false });
      } else {
        setSelect({ plan: currentPlanClass, action: true });
      }
    } else {
      // Модальное окно
      setSelect({ plan: refSelect.plan, action: refSelect.action });
    }
  };

  useEffect(() => {
    // Определяем цветовую тему
    // Определение языка
    const userLang = window.navigator.language;
    let langLS = localStorage.getItem('lang');

    // Проверяем хранилище
    if (!langLS) {
      localStorage.setItem('lang', language(userLang));
      setLang(language(userLang));
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
        modal,
        modalHandler: obj => setModal(obj),
        menu,
        menuHandler: obj => setMenu(obj),
        select,
        selectHandler,
      }}>
      {children}
    </Context.Provider>
  );
};
