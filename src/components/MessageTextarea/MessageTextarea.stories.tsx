import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import MessageTextarea from './MessageTextarea';

export default {
  component: MessageTextarea,
  title: 'Components/MessageTextarea',
} as Meta;

export const Default = () => {
  const [message, setMessage] = useState<string>('');
  return <MessageTextarea onBlur={(value) => setMessage(value)} />;
};
