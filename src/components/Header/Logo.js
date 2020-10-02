import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "logo" }) {
        publicURL
      }
    }
  `);
  if (!data?.file?.publicURL) {
    return null;
  }

  return (
    <Link id="logo" to="/">
      <img src={data.file.publicURL} alt="logo" />
    </Link>
  );
};

export default Logo;
