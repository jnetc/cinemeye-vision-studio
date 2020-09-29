import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

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
      file(relativePath: { eq: "regular/intro-regular.jpg" }) {
        childImageSharp {
          fluid(fit: COVER, jpegQuality: 75, webpQuality: 75, maxWidth: 3840) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  console.log(data);
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
