// src/pages/RegisterPage.js
import React, { useState } from 'react';
import Card from '../components/Card';
import InputField from '../components/InputField';
import Button from '../components/Button';

const RegisterPage = () => {
  const [form, setForm] = useState({
    nama: '',
    email: '',
    noHp: '',
    password: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    // Simpan data atau kirim request API
    console.log(form);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Card>
        <h2 className="text-2xl mb-4 text-center">Daftar Akun</h2>
        <InputField
          label="Nama"
          type="text"
          value={form.nama}
          onChange={handleChange}
          name="nama"
        />
        <InputField
          label="Email"
          type="email"
          value={form.email}
          onChange={handleChange}
          name="email"
        />
        <InputField
          label="No HP"
          type="tel"
          value={form.noHp}
          onChange={handleChange}
          name="noHp"
        />
        <InputField
          label="Kata Sandi"
          type="password"
          value={form.password}
          onChange={handleChange}
          name="password"
        />
        <Button label="Daftar" onClick={handleSubmit} className="w-full mt-4" />
      </Card>
    </div>
  );
};

export default RegisterPage;
