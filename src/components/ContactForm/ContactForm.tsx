'use client'

import React, { useState } from 'react';
import FullNameInput from '@components/FullNameInput/FullNameInput';
import EmailInput from '@components/EmailInput/EmailInput';
import MobileNumberInput from '@components/MobileNumberInput/MobileNumberInput';
import MessageTextarea from '@components/MessageTextarea/MessageTextarea';

export type ContactFormData = {
  fullName: string;
  email: string;
  mobileNumber: string;
  message: string;
}

interface ContactFormProps {
  onSubmit: (formData: ContactFormData) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    mobileNumber: '',
    message: '',
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Check if any of the form fields are empty or null
    const { fullName, email, mobileNumber, message } = formData;
    if (!fullName || !email || !mobileNumber || !message) {
      // You can display an error message or handle it as needed
      console.error('Please fill in all fields');
      return;
    }

    onSubmit(formData);
  };

  return (
    <form onSubmit={handleFormSubmit} className="max-w-md mx-auto">
      <header className='text-h5 lg:text-h4 font-bold text-neutral-800 font-header mb-6 text-center'>
        Want to have work done?
      </header>

      <FullNameInput
        onBlur={(value) => setFormData({ ...formData, fullName: value })}
      />
      <EmailInput
        onBlur={(value) => setFormData({ ...formData, email: value })}
      />
      <MobileNumberInput
        onBlur={(value) => setFormData({ ...formData, mobileNumber: value })}
      />
      <MessageTextarea
        onBlur={(value) => setFormData({ ...formData, message: value })}
      />
      <button
        type="submit"
        className="bg-primary-500 hover:bg-primary-200 active:bg-primary-300 transition-colors text-neutral-50 font-bold text-center py-2 px-4 mt-4 w-full"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
