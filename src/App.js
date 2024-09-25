import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard'; // Default import
import BookingForm from './components/BookingForm'; // Default import
import NavBar from './components/NavBar'; // Default import
import { getSampleBookings } from './Data/data';
import './App.css';

const App = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const sampleData = getSampleBookings();
    setBookings(sampleData);
  }, []);

  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Dashboard bookings={bookings} />} />
          <Route path="/add" element={<BookingForm bookings={bookings} setBookings={setBookings} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
