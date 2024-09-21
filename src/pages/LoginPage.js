// src/pages/LoginPage.js
import React, { useState } from 'react';
import Card from '../components/Card';
import InputField from '../components/InputField';
import Button from '../components/Button';

const LoginPage = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log(form);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Card>
        <h2 className="text-2xl mb-4 text-center">Masuk</h2>
        <InputField
          label="Email"
          type="email"
          value={form.email}
          onChange={handleChange}
          name="email"
        />
        <InputField
          label="Kata Sandi"
          type="password"
          value={form.password}
          onChange={handleChange}
          name="password"
        />
        <Button label="Masuk" onClick={handleSubmit} className="w-full mt-4" />
      </Card>
    </div>
  );
};

export default LoginPage;
