import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "bg/bg-intro.jpg" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `);

  if (!data?.file?.childImageSharp?.gatsbyImageData) {
    return <div>Picture not found</div>;
  }

  return (
    <GatsbyImage
      image={data.file.childImageSharp.gatsbyImageData}
      style={{ position: 'absolute' }}
      alt={'alt'}
    />
  );
};

export default Image;
