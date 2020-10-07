import React, { useState } from 'react';
import Feautures from './Features';

const Plan = ({ context }) => {
  const {
    name,
    desc,
    from,
    price,
    button,
    buttonMob,
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

  const [show, setShow] = useState(false);
  const toggle = () => setShow(!show);

  return (
    <div
      className={`${popular ? 'plan popular' : 'plan'}`}
      role="button"
      tabIndex={0}>
      {popular ? <div id="plan_pop">most popular</div> : null}
      <div className="plan_name">{name}</div>
      <h5>{desc}</h5>

      <div className="plan_price">
        {price}€{from && <div className="plan_from">{from}</div>}
      </div>
      <button type="button" className="plan_btn">
        {button}
      </button>
      <button type="button" className="plan_btn-mob" onClick={() => toggle()}>
        <div className={show ? 'plan_btn-show active' : 'plan_btn-show'} />
        {buttonMob}
      </button>
      <Feautures data={feauters} toggle={show} />
    </div>
  );
};

export default Plan;
