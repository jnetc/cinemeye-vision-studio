import React from 'react';

import '../sass/components/modal.scss';
import { useStore } from '../components/Store';

const Modal = () => {
  const ctx = useStore();
  console.log(ctx);
  return (
    <template id="modal" className={ctx?.modal.active ? 'show' : ''}>
      <span
        id="close"
        role="button"
        aria-label="close"
        tabIndex={0}
        onKeyDown={() => ctx.modalHandler({ active: false })}
        onClick={() => ctx.modalHandler({ active: false })}
      />
      <iframe
        // width="560"
        // height="315"
        title="promo"
        src={ctx?.modal.data}
        frameBorder="0"
        // rel="0"
        // showinfo="0"
        // iv_load_policy="3"
        // autoPlay="1"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen></iframe>
    </template>
  );
};

export default Modal;
