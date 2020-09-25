import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { Context } from '../../pages/index';

const Languages = ({ langs, langHandler }) => {
  const ctx = useContext(Context);

  const languages = langs.map(lang => {
    console.log({ lang: ctx }, lang.name);
    return (
      <Link
        to="/"
        key={lang.name}
        className={ctx === lang.name ? 'lang act-lang' : 'lang'}
        onClick={() => langHandler(lang.name)}>
        {lang.lang}
      </Link>
    );
  });

  return <ul id="langs">{languages}</ul>;
};
export default Languages;
