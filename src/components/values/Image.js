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
      file(relativePath: { eq: "bg/bg-values.jpg" }) {
        childImageSharp {
          fluid(fit: COVER, jpegQuality: 75, webpQuality: 75, maxWidth: 3840) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  // console.log(data);
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
