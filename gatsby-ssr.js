// Исправляет ошибку
// The resource https://cinemeye.netlify.app/page-data/offline-plugin-app-shell-fallback/page-data.json was preloaded using link preload but not used within a few seconds from the window's load event. Please make sure it has an appropriate `as` value and it is preloaded intentionally.

// export const onPreRenderHTML = ({
//   getHeadComponents,
//   pathname,
//   replaceHeadComponents,
// }) => {
//   if (pathname !== `/offline-plugin-app-shell-fallback/`) return;

//   const headComponents = getHeadComponents();

//   const filteredHeadComponents = headComponents.filter(
//     ({ type, props }) =>
//       !(
//         type === `link` &&
//         props.as === `fetch` &&
//         props.rel === `preload` &&
//         props.href.startsWith(`/static/d/`)
//       )
//   );

//   replaceHeadComponents(filteredHeadComponents);
// };
