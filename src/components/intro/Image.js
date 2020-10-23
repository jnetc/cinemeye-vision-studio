import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

// Фрагмент       ...GatsbyImageSharpFluid
// Значения       aspectRatioб base64 sizes src
// ДРУГИЕ ФРАГМЕНТЫ
// https://www.gatsbyjs.com/docs/gatsby-image/#common-fragments-with-gatsby-transformer-sharp

//                 ВНИМАНИЕ!!!
// Это значение по умолчанию без которых будет выдавать ошибку
// Остально добавляем по надобности опционально

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "bg/bg-intro.jpg" }) {
        childImageSharp {
          fluid(
            fit: COVER
            quality: 75
            background: "#000"
            sizes: "(max-width: 3840px) calc(100vw - 40px), 3840px"
          ) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  if (!data?.file?.childImageSharp?.fluid) {
    return <div>Picture not found</div>;
  }
  return (
    <Img
      fluid={data.file.childImageSharp.fluid}
      style={{ position: 'absolute' }}
    />
  );
};

export default Image;
