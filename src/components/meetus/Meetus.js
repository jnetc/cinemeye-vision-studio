import React from 'react';
// import { graphql, useStaticQuery } from 'gatsby';
// Styles
import '../../sass/components/meetus.scss';
// Components
import Slider from './Slider';
// Context
// import { useStore } from '../store/Store';
// import { localeHandler } from '../store/remapQueries';

const Meetus = () => {
  // Получаем данные с CMS
  // const query = useStaticQuery(ctx);
  // Получаем глобальные переменные
  // const { lang } = useStore();
  // Трансформация данных
  // const data = localeHandler(query, lang);

  // console.log(query);

  return (
    <section id="meetus">
      <Slider />
    </section>
  );
};

export default Meetus;

// GrapQL запрос
// const ctx = graphql`
//   query {
//     allDatoCmsSlider {
//       nodes {
//         slide {
//           skill
//           name
//           locale
//           about
//           foto {
//             fluid(
//               maxWidth: 250
//               forceBlurhash: false
//               imgixParams: { fm: "jpg", auto: "compress" }
//             ) {
//               ...GatsbyDatoCmsFluid
//             }
//           }
//         }
//       }
//     }
//   }
// `;
