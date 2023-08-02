import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';

const AuthForm = () => {
  const [currentForm, setCurrentForm] = useState('login');
  const toggleForm = (formName: React.SetStateAction<string>) => {
    setCurrentForm(formName);
  };

  return (
    <div className='Form bg-white '>
      <div>
        {currentForm === 'login' ? (
          <Login onFormSwitch={toggleForm} />
        ) : (
          <Register onFormSwitch={toggleForm} />
        )}
      </div>
    </div>
  );
}

export { AuthForm }
