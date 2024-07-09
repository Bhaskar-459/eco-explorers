import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Common/Home/home';
import LoginNgo from './Common/Login/NgoLogin';
import LoginCompany from './Common/Login/CompanyLogin';
import LoginPeople from './Common/Login/PeopleLogin';
import RegisterPage from './Common/Signup/NgoSignup';
import NgoPage from './components/Ngo/HomeScreen';
import './App.css';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/loginNgo" element={<LoginNgo />} />
        <Route path="/loginCompany" element={<LoginCompany />} />
        <Route path="/loginPeople" element={<LoginPeople />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/ngo" element={<NgoPage />} />
      </Routes>
    </Router>
  );
};

export default App;
