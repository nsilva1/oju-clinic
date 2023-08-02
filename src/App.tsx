// import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/common/NavBar';
import Home from './components/pages/home/Home';
import Footer from './components/common/Footer';
import { AuthForm } from './components/pages/auth/AuthForm';
import BookingForm from './components/pages/booking/BookingForm';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/form' element={<AuthForm />} />
        <Route path='/booking-form' element={<BookingForm />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
