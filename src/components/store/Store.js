import React, { useState, useEffect, useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { localeHandler } from './remapQueries';

// Параметры состояния по умолчанию
const state = {
  language: 'fi',
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
  // Получаем данные с CMS
  const data = useStaticQuery(ctx);
  // Создаем глобальные состояния для Index
  const [lang, setLang] = useState('');
  const [modal, setModal] = useState(state.modal);
  const [theme] = useState(state.theme);
  // const [context] = useState(data);

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
  // console.log(data);
  return (
    <Context.Provider
      value={{
        lang,
        langHandler: value => setLang(value),
        theme,
        modal,
        modalHandler: obj => setModal(obj),
        videoUrl: state.videoUrl,
        ctx: localeHandler(data, lang),
      }}>
      {children}
    </Context.Provider>
  );
};

// GrapQL запрос
const ctx = graphql`
  query {
    allDatoCmsIntro {
      nodes {
        subtitle
        title
        locale
      }
    }
    datoCmsIntro {
      videoUrl
    }
    allDatoCmsNav {
      nodes {
        locale
        navigation {
          link
        }
      }
    }
    allDatoCmsValue {
      nodes {
        locale
        title
        context
      }
    }
    datoCmsValue {
      videoUrl
    }
  }
`;
