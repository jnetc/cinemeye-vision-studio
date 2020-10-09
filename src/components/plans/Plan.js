import React, { useState, useRef } from 'react';
import Feautures from './Features';

const Plan = ({ context, selectBoolean, selectHandler }) => {
  const {
    name,
    desc,
    from,
    price,
    service1,
    service2,
    service3,
    service4,
    service5,
    service6,
    popular,
    customService,
  } = context;

  const feauters = {
    service1,
    service2,
    service3,
    service4,
    service5,
    service6,
    customService,
  };

  const [features, setFeatures] = useState(false);
  const featureToggle = () => setFeatures(!features);
  const refSelect = useRef(null);

  const { plan, action } = selectBoolean;
  // Проверяем на соответсвие имён
  // Записываем логическое значение
  let select;
  if (plan && refSelect.current.className.includes(plan)) {
    select = action;
  }

  return (
    <div className="plan">
      {popular ? <div id="plan_pop">most popular</div> : null}
      <div
        ref={refSelect}
        className={`${
          popular
            ? select
              ? `plan_bg ${name.toLowerCase()} popular select`
              : `plan_bg ${name.toLowerCase()} popular`
            : select
            ? `plan_bg ${name.toLowerCase()} select`
            : `plan_bg ${name.toLowerCase()}`
        }`}
      />
      <div className="plan_name">{name}</div>
      <h5>{desc}</h5>
      <div className="plan_price">
        {price}€{from && <div className="plan_from">{from}</div>}
      </div>
      <button
        type="button"
        className="plan_btn"
        onClick={() => selectHandler(refSelect)}>
        {select ? 'selected' : 'select'}
      </button>
      <button
        type="button"
        className={features ? 'plan_btn-mob active' : 'plan_btn-mob'}
        onClick={() => featureToggle()}>
        {features ? 'hide features' : 'show features'}
        {/* <div className={features ? 'plan_btn-show active' : 'plan_btn-show'} /> */}
      </button>
      <Feautures data={feauters} toggle={features} />
    </div>
  );
};

export default Plan;
