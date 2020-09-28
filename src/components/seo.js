import React from 'react';
import { Helmet } from 'react-helmet';
// import { useStaticQuery, graphql } from 'gatsby';

function SEO({ description, meta, lang, title, theme, modal }) {
  // const { site } = useStaticQuery(
  //   graphql`
  //     query {
  //       site {
  //         siteMetadata {
  //           title
  //           description
  //           author
  //         }
  //       }
  //     }
  //   `
  // );

  return (
    <Helmet>
      <html lang={lang} amp />
      <body className={modal ? `${theme} modal-show` : theme} />
      <title>{title}</title>
      {/* Primary Meta Tags */}
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
      />
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={meta?.url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={meta?.image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={meta?.url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={meta?.image} />

      <meta name="robots" content="index, follow" />
      <meta name="revisit-after" content="7 days" />
      <link
        rel="stylesheet preload prefetch"
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
        as="style"
        type="text/css"></link>
    </Helmet>
  );
}

export default SEO;
