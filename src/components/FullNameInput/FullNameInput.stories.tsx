import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import FullNameInput from './FullNameInput';

export default {
  component: FullNameInput,
  title: 'Components/FullNameInput',
} as Meta;

export const Default = () => {
  const [fullName, setFullName] = useState<string>('');
  return <FullNameInput onBlur={(value) => setFullName(value)} />;
};
