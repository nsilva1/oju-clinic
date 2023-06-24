import React, {useState} from 'react'
import Login from './components/common/Login';
import Register from './components/common/Register';


function Form() {
  const[currentForm, setCurrentForm] = useState('login')
  const toggleForm = (formName: React.SetStateAction<string>) => {
    setCurrentForm(formName);
  }

  return (
    <div className='Form bg-white '>
      <div>
      {
        currentForm === 'login' ? <Login onFormSwitch ={toggleForm} /> :<Register onFormSwitch ={toggleForm} />
      }
      </div>
    </div>
  );
};

export default Form;  