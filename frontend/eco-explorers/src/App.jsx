import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Common/Home/home';
import LoginPage from './Common/Login/Login';
import RegisterPage from './Common/Signup/NgoSignup';
import NgoPage from './components/Ngo/HomeScreen';
import './App.css';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/ngo" element={<NgoPage />} />
      </Routes>
    </Router>
  );
};

export default App;
