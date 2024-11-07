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
    <div className="w-full max-w-sm p-8 mx-auto shadow-md bg-gradient-to-b from-blue-500 to-blue-800 border rounded-xl">
      <div className='flex flex-col mb-1 ml-20'>
        <Input label="Email" type="email" onChange={ (event) => handleInputChange('email', event.target.value) }  value={enteredEmail} Error={emailNotValid}/>
        <Input label="Password" type="password" onChange={ (event) => handleInputChange('password', event.target.value)}  value={enteredPassword} Error={passwordNotValid}/>
      </div>
      <div className="flex gap-4 justify-end mt-10">
        <Button variant="createAccount">Create Account</Button>
        <Button variant="signIn" onClick={handleLogin}>Sign In</Button>
      </div>
    </div>
  );
}
