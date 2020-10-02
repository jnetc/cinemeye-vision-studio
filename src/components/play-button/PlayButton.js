import React from 'react';
import PlayButtonIcon from '../icons/Play';

// Context
import { useStore } from '../store/Store';

const PlayButton = ({ link }) => {
  const data = useStore();
  const youtubeFilter = `?autoplay=1&rel=0&controls=2&showinfo=0`;
  let url = link + youtubeFilter;
  return (
    <button
      type="button"
      className="play-btn"
      aria-label="Play"
      onClick={() =>
        data.modalHandler({
          active: true,
          data: url,
        })
      }>
      <PlayButtonIcon />
    </button>
  );
};
export default PlayButton;
