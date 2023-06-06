import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='font-semibold text-3xl m-5'>Counter</h1>
      <p className='font-medium text-2xl'>Current count: {count}</p>
      <button
        className='btn-primary rounded-full p-2 m-3'
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
}

export default App;
