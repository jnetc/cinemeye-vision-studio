import React, { useState, useRef, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { graphql, useStaticQuery } from 'gatsby';
// Styles
import '../../sass/components/modals.scss';
import '../../sass/components/mailform.scss';
// Context
import { useStore } from '../store/Store';
import { localeHandler } from '../store/remapQueries';

const Mailform = () => {
  // Получаем данные с CMS
  const query = useStaticQuery(ctx);
  // Получаем глобальные переменные
  const { lang, select, selectHandler } = useStore();
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
    tel: '',
    message: '',
  });

  const ref = useRef(null);

  useEffect(() => {
    const clickOutModal = ev => {
      ev.preventDefault();
      if (ev.target.id !== 'modal-plan') return;
      selectHandler({ action: false });
    };

    ref.current.addEventListener('click', clickOutModal);
  }, [selectHandler]);

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
        tel: '',
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
      subject: `Сообщение с cinemeye.fi о ${select.plan.toUpperCase()} плане`,
      plan: select.plan.toUpperCase(),
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
      process.env.GATSBY_EMAILJS_TEMPLATE_ID_PLAN,
      inputs,
      process.env.GATSBY_EMAILJS_USER_ID
    );
    handleResponse(res.status);
  };

  return (
    <template id="modal-plan" className={select.action ? 'show' : ''} ref={ref}>
      <section className="plan-form">
        <button
          id="modal-plan-close"
          aria-label="close"
          onKeyDown={() => selectHandler({ plan: select.plan, action: false })}
          onClick={() => selectHandler({ plan: select.plan, action: false })}
        />
        <span id="modal-plan-title">
          <span>{context?.title}</span>
          <b>{`${select.plan}`}</b>
        </span>
        <p>{context?.desc}</p>
        <form method="POST" onSubmit={handleOnSubmit}>
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
          <label className="form-input">
            {context?.tel}
            <input
              type="tel"
              name="tel"
              placeholder="+358 454556789"
              onChange={handleOnChange}
              value={inputs.tel}
            />
          </label>
          <label className="form-input">
            {context?.message}
            <textarea
              name="message"
              rows="3"
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
          <button type="submit" className="btn" disabled={status.submitting}>
            {!status.submitting
              ? !status.submitted
                ? context?.submit.split(',')[0]
                : context?.submit.split(',')[2]
              : context?.submit.split(',')[1]}
          </button>
        </form>
      </section>
    </template>
  );
};

export default Mailform;

// GrapQL запрос
const ctx = graphql`
  query {
    allDatoCmsPlanFrom {
      nodes {
        locale
        email
        desc
        title
        tel
        submit
        name
        message
        success
        error
      }
    }
  }
`;
