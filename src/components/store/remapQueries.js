export const localeHandler = (context, lang) => {
  if (!lang) {
    return;
  }
  // Собираем новые объект
  let state = {};

  for (const key in context) {
    if (context.hasOwnProperty(key)) {
      const element = context[key];
      // Если одиночное значение
      if (!element.nodes) {
        const single = { [key]: element };
        state = Object.assign(state, single);
        continue;
      }
      // Трансформированные Массивы
      const arr = findLanguage(element.nodes, lang);
      const node = { [key]: arr };
      state = Object.assign(state, node);
    }
  }
  // console.log(state);
  return state;
};

// Вспомогательная функция расформации
const findLanguage = (nodes, lang) => {
  if (!nodes || !lang) {
    return;
  }

  // Находим нужный язык и чистим от лишнего
  const value = nodes.find(n => {
    if (lang !== n.locale) {
      return null;
    }
    addIDMenu(n.navigation);
    n.navigation = addIDMenu(n.navigation);
    return n;
  });
  return value;
};

// Вспомогательная функция расформации
const addIDMenu = arr => {
  if (!arr) {
    return;
  }
  const ids = [
    { id: '#intro' },
    { id: '#values' },
    { id: '#plans' },
    { id: '#meetus' },
  ];

  const arrWithId = [];
  arr.forEach((n, idx) => {
    for (const id in ids) {
      if (idx === Number(id)) {
        n = { ...n, ...ids[id] };
        arrWithId.push(n);
      }
    }
  });

  return arrWithId;
};
