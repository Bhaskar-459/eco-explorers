import React from 'react';
import { useEffect,useState } from 'react';
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
import CompanyHome from './components/Company/CompanyHome';
import PeopleHome from './components/people/PeopleHome';
import axios from 'axios';

// import Frontend from './Common/WebSocket/DividedComponent';
import { SocketContext, socket } from './Socket';
import { ValueContext} from './Value';
const base_url = import.meta.env.VITE_REACT_APP_API_BASE_URL;

const App = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const fetchInitialData = async () => {
      try {
          const response = await axios.get(`${base_url}/api/greenCredits/get/getValue`);
          // console.log(response)
          setValue(response.data.value);
          // console.log(value)
      } catch (error) {
          console.error("Error fetching initial green credit history: ", error);
      }
    }
    fetchInitialData();
    
  }, []);
  useEffect(()=>
  {
    socket.connect();
    socket.on('connect', () => {
      console.log('connected ', socket.id)
    });
    socket.on('creditHistoryChange', ({data,time}) => {
      setValue(data[-1]);
    });
    return () => {
      socket.disconnect();
    }
  },[socket])


  return (
    <SocketContext.Provider value={socket}>
      <ValueContext.Provider value={{value,setValue}}>
    <Router>
      <Routes>
      
        <Route path="/*" element={<HomePage />} />
        <Route path="/loginNgo" element={<LoginNgo />} />
        <Route path="/loginCompany" element={<LoginCompany />} />
        <Route path="/loginPeople" element={<LoginPeople />} />
        <Route path="/registerNgo" element={<SignupNgo />} />
        <Route path="/registerCompany" element={<SignupCompany />} />
        <Route path="/registerPeople" element={<SignupPeople />} />
        <Route path="/ngo/*" element={<NgoHome />} />
        <Route path="/company/*" element={<CompanyHome />} />
        <Route path="/people/*" element={<PeopleHome />} />
        {/* <Route path="/websocket" element={<Frontend />} /> */}
        
      </Routes>
    </Router>
    </ValueContext.Provider>
    </SocketContext.Provider>
  );
};

export default App;
