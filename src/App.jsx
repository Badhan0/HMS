// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import BookAppointment from './components/BookAppointment';
import BookHealthCheck from './components/BookHealthCheck';
import BookLabTest from './components/BookLabTest';
import ContactUs from './components/ContactUs';

import Cardiology from './components/Cardiology';
import './styles.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
        <Route path="/book-health-check" element={<BookHealthCheck />} />
        <Route path="/book-lab-test" element={<BookLabTest />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/cardiology" element={Cardiology} />
      </Routes>
    </Router>
  );
}

export default App;