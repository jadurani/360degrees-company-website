import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import EmailInput from './EmailInput';

export default {
  component: EmailInput,
  title: 'Components/EmailInput',
} as Meta;

export const Default = () => {
  const [email, setEmail] = useState<string>('');
  return <EmailInput onBlur={(value) => setEmail(value)} />;
};
