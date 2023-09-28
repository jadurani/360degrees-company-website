import React from "react";
import FullNameInput from "./FullNameInput";

export default {
  title: "Input/Full Name",
  component: FullNameInput,
};

export const Default = () => (
  <FullNameInput value="" onChange={(value) => console.log(value)} />
);

export const WithError = () => (
  <FullNameInput
    value="John Doe"
    onChange={(value) => console.log(value)}
    error="Invalid characters"
  />
);
