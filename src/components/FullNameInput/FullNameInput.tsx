import React, { useState } from "react";

interface FullNameInputProps {
  onBlur: (value: string) => void;
}

const FullNameInput: React.FC<FullNameInputProps> = ({ onBlur }) => {
  const [error, setError] = useState<string | null>(null);

  const handleBlur = (value: string) => {
    if (value.trim() === "") {
      setError("Full name is required");
    } else if (!/^[a-zA-Z0-9 ]+$/.test(value)) {
      setError("Only alphanumeric characters and spaces are allowed");
    } else {
      setError(null);
      onBlur(value)
    }
  };

  return (
    <div className="pb-6 relative">
      <label
        className={`pl-4 block text-neutral-600 uppercase font-header font-bold mb-1 ${ error ? "text-red" : "" }`}>
        Full Name
      </label>
      <input
        type="text"
        className={`appearance-none border-2 w-full py-2 px-3 text-neutral-600
          leading-tight focus:outline-none focus:shadow-outline ${
            error ? "border-red" : ""
          }`}
        placeholder="John Doe"
        onBlur={(e) => handleBlur(e.target.value)}
      />
      <p className="absolute bottom-1 pl-4 text-red text-body2">{error}</p>
    </div>
  );
};

export default FullNameInput;
