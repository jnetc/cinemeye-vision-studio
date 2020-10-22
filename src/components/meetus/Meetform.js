import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { graphql, useStaticQuery } from 'gatsby';
// Styles
import '../../sass/components/mailform.scss';
// Context
import { useStore } from '../store/Store';
import { localeHandler } from '../store/remapQueries';

const Meetform = () => {
  // Получаем данные с CMS
  const query = useStaticQuery(ctx);
  // Получаем глобальные переменные
  const { lang } = useStore();
  // Трансформация данных
  const data = localeHandler(query, lang);
  const context = data?.allDatoCmsPlanFrom;

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleResponse = status => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: context?.success },
      });
      setInputs({
        name: '',
        email: '',
        message: '',
      });
    } else {
      setStatus({
        info: { error: true, msg: context?.error },
      });
    }
  };

  const handleOnChange = e => {
    e.persist();
    setInputs(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
      subject: `Сообщение с cinemeye.fi`,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };

  const handleOnSubmit = async e => {
    e.preventDefault();
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }));

    // EMAILJS - не нужно делать под функцию в netlify
    const res = await emailjs.send(
      process.env.GATSBY_EMAILJS_SERVICE_ID,
      process.env.GATSBY_EMAILJS_TEMPLATE_ID_MEET,
      inputs,
      process.env.GATSBY_EMAILJS_USER_ID
    );
    handleResponse(res.status);
    console.log(res.status, res.text);
  };

  return (
    <form method="POST" onSubmit={handleOnSubmit} id="meet-form">
      <label className="form-input">
        {context?.name} *
        <input
          type="text"
          name="name"
          placeholder="John Doe"
          onChange={handleOnChange}
          value={inputs.name}
          required
        />
      </label>
      <label className="form-input">
        {context?.email} *
        <input
          type="email"
          name="email"
          placeholder="example@mail.com"
          onChange={handleOnChange}
          value={inputs.email}
          required
        />
      </label>
      <label className="form-input" id="#meet-form-textarea">
        {context?.message}
        <textarea
          name="message"
          // rows="3"
          onChange={handleOnChange}
          value={inputs.message}
        />
      </label>
      {status.info.error && (
        <div className="error">Error: {status.info.msg}</div>
      )}
      {!status.info.error && status.info.msg && (
        <div className="success">{status.info.msg}</div>
      )}
      <button type="submit" className="form_btn" disabled={status.submitting}>
        {!status.submitting
          ? !status.submitted
            ? context?.submit.split(',')[0]
            : context?.submit.split(',')[2]
          : context?.submit.split(',')[1]}
      </button>
    </form>
  );
};

export default Meetform;

// GrapQL запрос
const ctx = graphql`
  query {
    allDatoCmsPlanFrom {
      nodes {
        locale
        email
        submit
        name
        message
        success
        error
      }
    }
  }
`;
