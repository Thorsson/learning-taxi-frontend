import React, { useState } from 'react';
import ConfirmRegistration from './pages/ConfirmRegistration';
import FormRegistration from './pages/FormRegistration';
import './styles.scss';

function App() {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <>
      {step === 1 && <FormRegistration nextStep={nextStep} />}
      {step === 2 && <ConfirmRegistration prevStep={prevStep} />}
    </>
  );
}

export default App;
