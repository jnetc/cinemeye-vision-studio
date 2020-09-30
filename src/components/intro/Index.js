import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
// Styles
import '../../sass/components/intro.scss';
// Components

import Image from './Image';
import PlayButton from './PlayButton';
import Title from './Title';

const ctx = graphql`
  query {
    allDatoCmsIntro {
      nodes {
        locale
        title
        subtitle
        navigation {
          link
        }
      }
    }
  }
`;

const Intro = () => {
  const data = StaticQuery(ctx);

  console.log('refresh intro', data);
  return (
    <section id="intro">
      <Image />
      <PlayButton />
      <Title />
      <div id="scroll-icon" />
    </section>
  );
};

// const background = graphql`
//   query {
//     datoCmsIntro {
//       background {
//         fluid {
//           srcSet
//           src
//           sizes
//           base64
//           aspectRatio
//         }
//       }
//       logo {
//         url
//       }
//     }
//   }
// `;

export default Intro;
