import React, { useState } from 'react';
import arrow from "../assets/arrow.svg";

interface FormRegistrationProps {
  nextStep: () => void;
}

function FormRegistration({ nextStep }: FormRegistrationProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validação básica
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password) {
      setError('All fields are required');
      return;
    }

    try {
      const res = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.status !== 200) {
        setError(data.msg);
      } else {
        alert(data.msg);
        nextStep(); // Navega para a próxima etapa após o sucesso
      }
    } catch (err) {
      if (err instanceof Error) {
        setError('Error: ' + err.message);
      } else {
        setError('Unknown error occurred');
      }
    }
  };

  return (
    <div className="bg-woodsmoke-950 font-roboto flex flex-col items-center pt-9 h-screen w-full">
      <div className="w-[84%]">
        <img className="w-4 h-auto" src={arrow} alt="arrow button" />
      </div>
      <main className="text-white w-full flex flex-col items-center mt-8 flex-grow">
        <form className="flex flex-col w-[84%] h-full" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-y-24 flex-grow ">
            <fieldset>
              <div className="flex flex-col gap-y-6">
                <legend className="text-2xl font-medium">What's your name?</legend>
                <div className="flex flex-row gap-x-6">
                  <input
                    type="text"
                    id="first-name"
                    name="firstName"
                    placeholder="First"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    aria-label="Enter your first name"
                    className="bg-transparent border-b-2 border-gray-300 w-1/2 text-xl pb-1"
                  />
                  <input
                    type="text"
                    id="last-name"
                    name="lastName"
                    placeholder="Last"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    aria-label="Enter your last name"
                    className="bg-transparent border-b-2 border-gray-300 w-1/2 text-xl pb-1"
                  />
                </div>
              </div>
            </fieldset>
            <div className="flex flex-col gap-y-6">
              <label className="text-2xl font-medium" htmlFor="email">What's your e-mail?</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                aria-label="Enter your email"
                className="bg-transparent border-b-2 border-gray-300 text-xl pb-1"
              />
            </div>
            <div className="flex flex-col gap-y-6">
              <label className="text-2xl font-medium" htmlFor="password">Enter your password:</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                aria-label="Enter your password"
                className="bg-transparent border-b-2 border-gray-300 text-xl pb-1"
              />
            </div>
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <button className="bg-black w-full h-[3.63rem] text-xl font-bold mb-[4.875rem]" type="submit">Next</button>
        </form>
      </main>
    </div>
  );
}

export default FormRegistration;
