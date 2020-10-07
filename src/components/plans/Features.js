import React from 'react';

const Feautures = ({ data, toggle }) => {
  const {
    service1,
    service2,
    service3,
    service4,
    service5,
    service6,
    customService,
  } = data;

  return (
    <>
      {customService ? (
        <section
          className={toggle ? 'plan_features show-features' : 'plan_features'}>
          <pre id="plan_features-custom">{customService}</pre>
        </section>
      ) : (
        <section
          className={toggle ? 'plan_features show-features' : 'plan_features'}>
          {service1.startsWith('#') ? (
            <div className="plan_icon-mark" />
          ) : (
            <div className="plan_icon-unmark" />
          )}
          <p>{service1.replace('#', '')}</p>
          {service2.startsWith('#') ? (
            <div className="plan_icon-mark" />
          ) : (
            <div className="plan_icon-unmark" />
          )}
          <p>{service2.replace('#', '')}</p>
          {service3.startsWith('#') ? (
            <div className="plan_icon-mark" />
          ) : (
            <div className="plan_icon-unmark" />
          )}
          <p>{service3.replace('#', '')}</p>
          {service4.startsWith('#') ? (
            <div className="plan_icon-mark" />
          ) : (
            <div className="plan_icon-unmark" />
          )}
          <p>{service4.replace('#', '')}</p>
          {service5.startsWith('#') ? (
            <div className="plan_icon-mark" />
          ) : (
            <div className="plan_icon-unmark" />
          )}
          <p>{service5.replace('#', '')}</p>
          {service6.startsWith('#') ? (
            <div className="plan_icon-mark" />
          ) : (
            <div className="plan_icon-unmark" />
          )}
          <p>{service6.replace('#', '')}</p>
        </section>
      )}
    </>
  );
};

export default Feautures;
