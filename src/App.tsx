import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/common/NavBar';
import Home from './components/pages/home/Home';
import Footer from './components/common/Footer';
import Form from './Form';

function Layout() {
  return (
    <div className='bg-white'>
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
