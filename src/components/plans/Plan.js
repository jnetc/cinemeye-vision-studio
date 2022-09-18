import React, { useState, useRef } from 'react';
import Feautures from './Features';
// Context
import { useStore } from '../store/Store';

const Plan = ({ context }) => {
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

  const { select, selectHandler } = useStore();

  const [features, setFeatures] = useState(false);
  const featureToggle = () => setFeatures(!features);
  const refSelect = useRef(null);

  const { plan, action } = select;
  // Проверяем на соответсвие имён
  // Записываем логическое значение
  let selected;
  if (plan && refSelect.current.className.includes(plan)) {
    selected = action;
  }

  return (
    <div className="plan">
      {popular ? <div id="plan_pop"></div> : null}

      <div className="plan_name">{name}</div>
      <div className="plan_desc">{desc}</div>
      <div className="plan_price">
        {price}€{from && <div className="plan_from">{from}</div>}
      </div>
      {/* <button type="button" className="btn" onClick={() => selectHandler(refSelect)}>
        {selected ? 'selected' : service1 ? 'select' : `let's talk`}
      </button> */}
      <button
        type="button"
        className={features ? 'plan_btn-mob active' : 'plan_btn-mob'}
        onClick={() => featureToggle()}
      >
        <div className={features ? 'plan_btn-show active' : 'plan_btn-show'} />
        {features ? 'hide features' : 'show features'}
      </button>
      <Feautures data={feauters} toggle={features} />
      <div
        ref={refSelect}
        className={`${
          popular
            ? selected
              ? `plan_bg ${name.toLowerCase()} popular select`
              : `plan_bg ${name.toLowerCase()} popular`
            : selected
            ? `plan_bg ${name.toLowerCase()} select`
            : `plan_bg ${name.toLowerCase()}`
        }`}
      />
    </div>
  );
};

export default Plan;
