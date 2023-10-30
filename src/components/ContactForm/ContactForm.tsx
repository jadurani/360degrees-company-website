"use client";

import React, { useState } from "react";
import Image from "next/image";
import successCheckMark from "@assets/icons/icon-checkmark-success.svg";
import FullNameInput from "@components/FullNameInput/FullNameInput";
import EmailInput from "@components/EmailInput/EmailInput";
import MobileNumberInput from "@components/MobileNumberInput/MobileNumberInput";
import MessageTextarea from "@components/MessageTextarea/MessageTextarea";
import { saveToSpreadsheet } from "@lib/actions";

export type ContactFormData = {
  fullName: string;
  email: string;
  mobileNumber: string;
  message: string;
};


const ContactForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    email: "",
    mobileNumber: "",
    message: "",
  });

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Check if any of the form fields are empty or null
    const { fullName, email, mobileNumber, message } = formData;
    if (!fullName || !email || !mobileNumber || !message) {
      // You can display an error message or handle it as needed
      console.error("Please fill in all fields");
      setLoading(false);
      return;
    }

    const rowData = [
      formData.fullName,
      formData.email,
      formData.mobileNumber,
      formData.message,
    ];
    const result = await saveToSpreadsheet(rowData);
    setSuccess(result.success);
    setLoading(false);
  };

  return (
    <div className="bg-neutral-0 px-8 md:w-[450px] h-[640px] py-6">
      {/* SENDING */}
      {loading && (
        <div className="h-full w-full font-header font-bold text-neutral-800 flex flex-col items-center justify-center gap-1 text-center">
          <div className="text-h4 my-1">Sending...</div>
        </div>
      )}

      {/* ACTUAL FORM */}
      {!loading && !success && (
        <form onSubmit={handleFormSubmit} className="max-w-md mx-auto">
          <header className="text-h5 lg:text-h4 font-bold text-neutral-800 font-header mb-6 text-center">
            Want to have work done?
          </header>

          <FullNameInput
            onBlur={(value) => setFormData({ ...formData, fullName: value })}
          />
          <EmailInput
            onBlur={(value) => setFormData({ ...formData, email: value })}
          />
          <MobileNumberInput
            onBlur={(value) =>
              setFormData({ ...formData, mobileNumber: value })
            }
          />
          <MessageTextarea
            onBlur={(value) => setFormData({ ...formData, message: value })}
          />
          <button
            type="submit"
            className="bg-primary-500 hover:bg-primary-200 active:bg-primary-300 transition-colors text-neutral-50 font-bold text-center py-2 px-4 mt-4 w-full">
            Submit
          </button>
        </form>
      )}

      {!loading && success && (
        <div className="h-full w-full font-header font-bold text-neutral-800 flex flex-col items-center justify-center gap-1 text-center">
          <Image src={successCheckMark} alt="Success" />
          <div className="text-h4 my-1">Message sent!</div>
          <div className="text-h6">
            Our team will contact you as soon as possible.
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
