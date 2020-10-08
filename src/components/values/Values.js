// import Link from 'gatsby';
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
// Styles
import '../../sass/components/values.scss';
// Components
import Image from './Image';
import PlayButton from '../play-button/PlayButton';
// Context
import { useStore } from '../store/Store';
import { localeHandler } from '../store/remapQueries';

const Values = () => {
  // Получаем данные с CMS
  const query = useStaticQuery(ctx);
  // Получаем глобальные переменные
  const { lang } = useStore();
  // Трансформация данных
  const data = localeHandler(query, lang);
  const context = data?.allDatoCmsValue;

  return (
    <section id="values">
      <Image />
      <div id="value-pbt">
        <PlayButton link={context?.videoUrl} />
        <span />
        <span />
        <span />
        <span />
      </div>
      <article>
        <h2>{context?.title}</h2>
        <pre>{context?.context}</pre>
      </article>
    </section>
  );
};

export default Values;

// GrapQL запрос
const ctx = graphql`
  query {
    allDatoCmsValue {
      nodes {
        locale
        title
        context
        videoUrl
      }
    }
  }
`;
