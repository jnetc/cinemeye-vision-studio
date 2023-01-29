import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
// Context
import { useStore } from '../store/Store';
import { localeHandler } from '../store/remapQueries';

const Meetform = () => {
  // Получаем данные с CMS
  const query = useStaticQuery(ctx);
  // Получаем глобальные переменные
  const { lang } = useStore();
  // Трансформация данных
  const data = localeHandler(query, lang);
  const context = data?.allDatoCmsMeet?.contact;

  return <pre id="meetus-info">{context}</pre>;
};

export default Meetform;

// GrapQL запрос
const ctx = graphql`
  query {
    allDatoCmsMeet {
      nodes {
        locale
        contact
      }
    }
  }
`;
