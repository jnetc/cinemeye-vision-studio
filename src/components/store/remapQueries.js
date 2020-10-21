const navigationLinks = [
  { id: '#intro' },
  { id: '#values' },
  { id: '#plans' },
  { id: '#meetus' },
];

// Вспомогательная функция расформации
const findLanguage = (nodes, lang, nav) => {
  const currentLangArr = [];

  nodes.forEach(n => {
    let arr;
    // Деструкция объекта с массивами
    let { plan } = n;
    let { slide } = n;
    let { navigation } = n;

    // Проверка
    if (plan) arr = plan;
    if (slide) arr = slide;
    if (navigation) arr = navigation;

    arr.forEach((p, i) => {
      if (p.locale !== lang) {
        return;
      }
      // Дополнительный ключ для навигации по хешам
      if (nav) {
        nav.forEach((l, id) => {
          if (i === id) currentLangArr.push({ ...p, ...l });
        });
        return;
      }
      currentLangArr.push(p);
    });
  });
  return currentLangArr;
};

// REMAP FUNCTION
export const localeHandler = (context, lang) => {
  if (!lang || !context) {
    return;
  }
  // Переменные
  let obj = {};
  let arr = [];

  for (const key in context) {
    if (context.hasOwnProperty(key)) {
      const element = context[key];
      // Находим нужный язык
      // Intro & Values
      if (element.nodes[0].locale) {
        arr = element.nodes.find(n => {
          if (lang !== n.locale) return null;
          return n;
        });
      }
      // Navigation
      if (element.nodes[0].navigation) {
        arr = findLanguage(element.nodes, lang, navigationLinks);
      }
      // Plans
      if (element.nodes[0].plan) {
        arr = findLanguage(element.nodes, lang, undefined);
      }
      // Slides
      if (element.nodes[0].slide) {
        arr = findLanguage(element.nodes, lang, undefined);
      }

      // Склеиваем объект
      const node = { [key]: arr };
      obj = { ...node };
    }
  }
  // console.log(obj);
  return obj;
};
