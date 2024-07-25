import React from 'react';
import arrow from "../assets/arrow.svg";
import user from "../assets/user.svg";

interface ConfirmRegistrationProps {
  prevStep: () => void;
}

function ConfirmRegistration({ prevStep }: ConfirmRegistrationProps) {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Adicione a lógica de submissão aqui, se necessário.
    alert('Terms accepted. Proceeding to the next step.');
  };

  return (
    <div className="bg-woodsmoke-950 font-roboto flex flex-col items-center pt-9 h-screen w-full">
      <div className="w-[84%]">
        <img className="w-4 h-auto" src={arrow} alt="arrow button" />
      </div>
      <main className="text-white flex flex-col items-center justify-between mt-9 flex-grow w-[84%]">
        <div className="flex flex-col items-center">
          <div className="bg-silver-300 h-[8.625rem] w-[8.625rem] mb-16 flex justify-center rounded-full">
            <img src={user} alt="user icon" />
          </div>
          <div className="mb-24">
            <p className="text-xl">
              By tapping the button below, you agree to Uber's Terms of Use and
              acknowledge that you have read the Privacy Policy
            </p>
          </div>
          <div>
            <p className="text-sm">Check the box to indicate that you are atleast 18 years of age, agree to the <span className="text-blue-ribbon-500">Terms & Conditions</span> and acknowledge the <span className="text-blue-ribbon-500">Privacy Policy</span>.</p>
          </div>
        </div>
        <button className="bg-black w-full h-[3.63rem] text-xl font-bold mb-[4.875rem]" onClick={handleSubmit} type="submit">Next</button>
        <button className="bg-gray-500 w-full h-[3.63rem] text-xl font-bold mb-[4.875rem]" onClick={prevStep}>Back</button>
      </main>
    </div>
  );
}

export default ConfirmRegistration;
