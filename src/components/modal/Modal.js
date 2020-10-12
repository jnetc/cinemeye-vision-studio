import React from 'react';

import '../../sass/components/modal.scss';
import { useStore } from '../store/Store';
const Modal = () => {
  const ctx = useStore();
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
        title="promo"
        src={ctx?.modal.data}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen></iframe>
    </template>
  );
};

export default Modal;
