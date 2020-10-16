const language = lang => {
  if (lang.startsWith('sv')) {
    return 'sv';
  }
  if (lang.startsWith('no')) {
    return 'no';
  }
  if (lang.startsWith('en')) {
    return 'en';
  }
  return 'fi';
};

export default language;
