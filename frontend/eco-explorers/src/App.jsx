import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Common/Home/home';
import LoginNgo from './Common/Login/NgoLogin';
import LoginCompany from './Common/Login/CompanyLogin';
import LoginPeople from './Common/Login/PeopleLogin';
import SignupNgo from './Common/Signup/NgoSignup';
import SignupCompany from './Common/Signup/CompanySignup';
import SignupPeople from './Common/Signup/PeopleSignup';
// import NgoPage from './components/Ngo/HomeScreen';
import './App.css';
import NgoHome from './components/Ngo/NgoHome';
import NgoProfile from './components/Ngo/NgoProfile';
import CompanyHome from './components/Company/CompanyHome';
import VerifyNgoCredits from './components/Ngo/NgoVerify';
import VerifyGCP from './components/Company/VerifyGCP';
import PeopleHome from './components/people/PeopleHome';
import CompanyProfile from './components/Company/CompanyProfile';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/loginNgo" element={<LoginNgo />} />
        <Route path="/loginCompany" element={<LoginCompany />} />
        <Route path="/loginPeople" element={<LoginPeople />} />
        <Route path="/registerNgo" element={<SignupNgo />} />
        <Route path="/registerCompany" element={<SignupCompany />} />
        <Route path="/registerPeople" element={<SignupPeople />} />
        <Route path="/ngo/*" element={<NgoHome />} />
        <Route path="/company/*" element={<CompanyHome />} />
        <Route path="/people/*" element={<PeopleHome />} />
        {/* <Route path="/my-profile" element={<NgoProfile />} />
        <Route path="/verify-ngo-credits" element={<VerifyNgoCredits />} /> */}
        {/* <Route path="/company-profile" element={<CompanyProfile />} /> */}
        {/* <Route path='/company-verify-gcp' element={<VerifyGCP />} /> */}

      </Routes>
    </Router>
  );
};

export default App;
