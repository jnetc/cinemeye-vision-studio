import React from 'react';
// Глобальные стили
// Также прописываются в тэге head строчно
import './src/sass/global.scss';

// Инициализируем глобальное хранилище под Context или Redux
// Page/index.js может принимать props
// См. ссылку на инструкции по Gatsby
// https://www.gatsbyjs.com/blog/2019-01-31-using-react-context-api-with-gatsby/
import { Store } from './src/components/Store';

export const wrapRootElement = ({ element }) => <Store>{element}</Store>;
