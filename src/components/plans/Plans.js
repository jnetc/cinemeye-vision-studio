import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
// Styles
import '../../sass/components/plans.scss';
// Components
import Plan from './Plan';
// Context
import { useStore } from '../store/Store';
import { localeHandler } from '../store/remapQueries';

const Plans = () => {
  // Получаем данные с CMS
  const query = useStaticQuery(ctx);
  // Получаем глобальные переменные
  const { lang } = useStore();
  // Трансформация данных
  const data = localeHandler(query, lang);

  const plans = data?.allDatoCmsPlan.map(plan => {
    return <Plan key={plan.name} context={plan} />;
  });

  return <section id="plans">{plans}</section>;
};

export default Plans;

// GrapQL запрос
const ctx = graphql`
  query {
    allDatoCmsPlan {
      nodes {
        plan {
          locale
          name
          desc
          from
          price
          service1
          service2
          service3
          service4
          service5
          service6
          popular
          customService
        }
      }
    }
  }
`;
