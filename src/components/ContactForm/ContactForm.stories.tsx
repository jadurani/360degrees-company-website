import React from 'react';
import { Meta } from '@storybook/react';
import ContactForm from './ContactForm';

export default {
  component: ContactForm,
  title: 'Components/ContactForm',
} as Meta;

export const Default = () => (
  <ContactForm
    onSubmit={(formData) => {
      // Handle form submission data here
      console.log(formData);
    }}
  />
);
