import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

// Context
import { localeHandler } from './store/remapQueries';

function SEO({ meta, lang, modal, select, menu }) {
  // Получаем данные с CMS
  const query = useStaticQuery(ctx);
  // Трансформация данных
  const data = localeHandler(query, lang);
  const context = data?.allDatoCmsSite?.globalSeo;

  let active;
  if (modal) {
    active = true;
  } else if (select) {
    active = true;
  } else if (menu) {
    active = true;
  } else {
    active = false;
  }

  return (
    <Helmet>
      <html lang={lang} amp />
      <body className={active ? `modal-show` : ''} />
      <title>{context?.siteName}</title>
      {/* Primary Meta Tags */}
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
      />
      <meta name="title" content={context?.siteName} />
      <meta name="description" content={context?.fallbackSeo?.description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={meta?.url} />
      <meta property="og:title" content={context?.siteName} />
      <meta
        property="og:description"
        content={context?.fallbackSeo?.description}
      />
      <meta property="og:image" content={meta?.image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={meta?.url} />
      <meta property="twitter:title" content={context?.siteName} />
      <meta
        property="twitter:description"
        content={context?.fallbackSeo?.description}
      />
      <meta property="twitter:image" content={meta?.image} />

      <meta name="robots" content="index, follow" />
      <meta name="revisit-after" content="7 days" />
      <link
        rel="stylesheet preload prefetch preconnect dns-prefetch"
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
        as="style"
        type="text/css"></link>
    </Helmet>
  );
}

export default SEO;

// GrapQL запрос
const ctx = graphql`
  query {
    allDatoCmsSite {
      nodes {
        locale
        globalSeo {
          fallbackSeo {
            description
          }
          siteName
        }
      }
    }
  }
`;
