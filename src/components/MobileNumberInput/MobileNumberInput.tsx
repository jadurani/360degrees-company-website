import React, { useState } from "react";

interface MobileNumberInputProps {
  onBlur: (value: string) => void;
}

const MobileNumberInput: React.FC<MobileNumberInputProps> = ({ onBlur }) => {
  const [error, setError] = useState<string | null>(null);

  const handleBlur = (value: string) => {
    if (value.trim() === "") {
      setError("Mobile number is required");
    } else if (!/^\d{10,11}$/.test(value)) {
      setError("Invalid mobile number format");
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
        Mobile Number
      </label>
      <input
        type="text"
        className={`appearance-none border-2 w-full py-2 px-3 text-neutral-600
          leading-tight focus:outline-none focus:shadow-outline ${
            error ? "border-red" : ""
          }`}
        placeholder="1234567890"
        onBlur={(e) => handleBlur(e.target.value)}
      />
      <p className="absolute bottom-1 pl-4 text-red text-body2">{error}</p>
    </div>
  );
};

export default MobileNumberInput;
