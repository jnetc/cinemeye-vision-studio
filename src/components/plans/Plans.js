import React, { useState, useEffect } from 'react';
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

  const [select, setSelect] = useState(false);

  const selectHandler = refSelect => {
    // Получаем текущий класс плана
    const currentPlanClass = refSelect.current.classList[1];
    // Проверяем соответствие и создаем объект с нужными значениями
    if (refSelect.current.className.includes('select')) {
      setSelect({ plan: currentPlanClass, action: false });
    } else {
      setSelect({ plan: currentPlanClass, action: true });
    }
  };

  useEffect(() => {}, [select]);

  const plans = data?.allDatoCmsPlan.map(plan => {
    return (
      <Plan
        key={plan.name}
        context={plan}
        selectBoolean={select}
        selectHandler={selectHandler}
      />
    );
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
