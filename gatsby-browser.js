import React from 'react';
// Глобальные стили
// Также прописываются в тэге head строчно
import './src/sass/global.scss';

// Инициализируем глобальное хранилище под Context или Redux
// Page/index.js может принимать props
// См. ссылку на инструкции по Gatsby
// https://www.gatsbyjs.com/blog/2019-01-31-using-react-context-api-with-gatsby/
import { Store } from './src/components/store/Store';
export const wrapRootElement = ({ element }) => <Store>{element}</Store>;

export const onServiceWorkerUpdateFound = ({ serviceWorker }) => {
  if (
    window.confirm(
      'This site has been updated with new data. Do you wish to reload the site to get the new data?'
    )
  ) {
    console.log(serviceWorker, 'Need update');
  }
};
