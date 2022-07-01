import React from 'react';
import { Telephone } from './Telephone';
import { Telegram } from './Telegram';
import { WhatsApp } from './WhatsApp';

export const Icons = ({ icon }) => {
  const svg = {
    telephone: <Telephone />,
    telegram: <Telegram />,
    whatsapp: <WhatsApp />,
  };
  return svg[icon];
};
