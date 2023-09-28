import React, { useState } from "react";

interface MessageTextareaProps {
  onBlur: (value: string) => void;
}

const MessageTextarea: React.FC<MessageTextareaProps> = ({ onBlur }) => {
  const [error, setError] = useState<string | null>(null);

  const handleBlur = (value: string) => {
    if (value.trim() === "") {
      setError("Message is required");
    } else if (value.length > 500) {
      setError("Message is too long (maximum 500 characters)");
    } else {
      setError(null);
      onBlur(value);
    }
  };

  return (
    <div className="mb-4">
      <label
        className={`pl-4 block text-neutral-600 uppercase font-header font-bold mb-1 ${
          error ? "text-red" : ""
        }`}
      >
        Message
      </label>
      <textarea
        className={`resize-none appearance-none border-2 w-full py-2 px-3 text-neutral-600
          leading-tight focus:outline-none focus:shadow-outline ${
            error ? "border-red" : ""
          }`}
        placeholder="Enter your message..."
        onBlur={(e) => handleBlur(e.target.value)}
        rows={4}
      />
      {error && <p className="pl-4 text-red text-body2">{error}</p>}
    </div>
  );
};

export default MessageTextarea;
