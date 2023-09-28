import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import MobileNumberInput from './MobileNumberInput';

export default {
  component: MobileNumberInput,
  title: 'Components/MobileNumberInput',
} as Meta;

export const Default = () => {
  const [mobileNumber, setMobileNumber] = useState<string>('');
  return <MobileNumberInput onBlur={(value) => setMobileNumber(value)} />;
};
