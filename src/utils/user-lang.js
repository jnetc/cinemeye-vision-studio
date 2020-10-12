const language = () => {
  const userLang = window.navigator.language;
  if (userLang.startsWith('sv')) {
    return 'sv';
  }
  if (userLang.startsWith('no')) {
    return 'no';
  }
  if (userLang.startsWith('en')) {
    return 'en';
  }
  return 'fi';
};

export default language();
