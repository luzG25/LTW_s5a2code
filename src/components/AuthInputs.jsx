import { useState } from 'react';
import Input from './Input';
import Button from './Button';

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div className=" w-full max-w-sm p-8 mx-auto shadow-md bg-gradient-to-b from-stone-200 to-stone-800 ">
      <div className='flex flex-col mb-8'>
        <Input label="Email" type="email" onChange={ (event) => handleInputChange('email', event.target.value) }/>
        <Input label="Password" type="password" onChange={ (event) => handleInputChange('password', event.target.value)} />
      </div>
      <div className="flex gap-4 justify-end">
        
        <Button type="button">
          Create a new account
        </Button>
        <Button  onClick={handleLogin}>Sign In</Button>
      </div>
    </div>
  );
}
