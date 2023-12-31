import React, { useState } from "react";

interface EmailInputProps {
  onBlur: (value: string) => void;
}

const EmailInput: React.FC<EmailInputProps> = ({ onBlur }) => {
  const [error, setError] = useState<string | null>(null);

  const handleBlur = (value: string) => {
    if (value.trim() === "") {
      setError("Email is required");
    } else if (!/^\S+@\S+\.\S+$/.test(value)) {
      setError("Invalid email format");
    } else {
      setError(null);
      onBlur(value);
    }
  };

  return (
    <div className="pb-6 relative">
      <label
        className={`pl-4 block text-neutral-600 uppercase font-header font-bold mb-1 ${
          error ? "text-red" : ""
        }`}
      >
        Email
      </label>
      <input
        type="email"
        className={`appearance-none border-2 w-full py-2 px-3 text-neutral-600
          leading-tight focus:outline-none focus:shadow-outline ${
            error ? "border-red" : ""
          }`}
        placeholder="email@address.com"
        onBlur={(e) => handleBlur(e.target.value)}
      />
      <p className="absolute bottom-1 pl-4 text-red text-body2">{error}</p>
    </div>
  );
};

export default EmailInput;
