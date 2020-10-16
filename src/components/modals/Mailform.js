import React, { useState } from 'react';
import emailjs from 'emailjs-com';

import '../../sass/components/modals.scss';
import '../../sass/components/mailform.scss';

import { useStore } from '../store/Store';

const Mailform = () => {
  const { select, selectHandler } = useStore();

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

  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: 'Message sent successfully.' },
      });
      setInputs({
        name: '',
        email: '',
        tel: '',
        message: '',
      });
    } else {
      setStatus({
        info: { error: true, msg: 'Message not sent.' },
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
      process.env.GATSBY_EMAILJS_TEMPLATE_ID,
      inputs,
      process.env.GATSBY_EMAILJS_USER_ID
    );
    handleResponse(res.status);
    console.log(res.status, res.text);
  };

  return (
    <template id="modal-plan" className={select.action ? 'show' : ''}>
      <section className="plan-form">
        <button
          id="modal-plan-close"
          aria-label="close"
          onKeyDown={() => selectHandler({ plan: select.plan, action: false })}
          onClick={() => selectHandler({ plan: select.plan, action: false })}
        />
        <span id="modal-plan-title">
          <span>You have chosen a plan</span>
          <b>{`${select.plan}`}</b>
        </span>
        <p>
          Scale up a content platform to power one — or hundreds of — digital
          experiences. Grows with your needs, from one team or business unit to
          your whole organization.
        </p>
        <form method="POST" onSubmit={handleOnSubmit}>
          <label className="plan-input">
            Your name *
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              onChange={handleOnChange}
              value={inputs.name}
              required
            />
          </label>
          <label className="plan-input">
            Your email *
            <input
              type="email"
              name="email"
              placeholder="example@mail.com"
              onChange={handleOnChange}
              value={inputs.email}
              required
            />
          </label>
          <label className="plan-input">
            Your phone number
            <input
              type="tel"
              name="tel"
              placeholder="+358 454556789"
              onChange={handleOnChange}
              value={inputs.tel}
            />
          </label>
          <label className="plan-input">
            Talk us
            <textarea
              name="message"
              rows="3"
              placeholder="Fill field if you need"
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
          <button
            type="submit"
            className="form_btn"
            disabled={status.submitting}>
            {!status.submitting
              ? !status.submitted
                ? 'Submit'
                : 'Submitted'
              : 'Submitting...'}
          </button>
        </form>
      </section>
    </template>
  );
};

export default Mailform;
