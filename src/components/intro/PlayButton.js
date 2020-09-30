import React from 'react';
import PlayButtonIcon from '../icons/Play';

// Context
import { useStore } from '../store/Store';

const PlayButton = () => {
  const ctx = useStore();

  return (
    <button
      type="button"
      className="play-btn"
      aria-label="Play"
      onClick={() => ctx.modalHandler({ active: true, data: ctx.videoUrl })}>
      <PlayButtonIcon />
    </button>
  );
};
export default PlayButton;
