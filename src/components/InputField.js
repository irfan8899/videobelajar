// src/components/InputField.js
import React from 'react';

const InputField = ({ label, type, value, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="w-full p-2 border border-gray-300 rounded mt-1"
      />
    </div>
  );
};

export default InputField;
