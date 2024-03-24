import React from 'react';
import { Telephone } from './Telephone';
import { Telegram } from './Telegram';
import { WhatsApp } from './WhatsApp';
import { Instagram } from './Instagram';

export const Icons = ({ icon }) => {
  const svg = {
    telephone: <Telephone />,
    telegram: <Telegram />,
    instagram: <Instagram />,
    whatsapp: <WhatsApp />,
  };
  return svg[icon];
};
