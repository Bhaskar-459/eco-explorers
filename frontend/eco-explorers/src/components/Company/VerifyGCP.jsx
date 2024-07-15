import React from 'react'
import { useState } from 'react';
import Nav from '../../Common/Home/nav';
import Dashboard from './Dashboard';
import axios from 'axios';



const VerifyGCP = props => {
    let [companyDetails, setCompanyDetails] = useState(JSON.parse(localStorage.getItem("companyDetails")));
    let [verifyStatus, setVerifyStatus] = useState(localStorage.getItem("companyDetails.isRegisteredOnGCP"));
    let [gcpPlatformId, setGcpPlatformId] = useState(0);
    let [emailId, setEmailId] = useState('');
    const handleGcpChange = (e) => {
        setGcpPlatformId(e.target.value);
    };
    const handleEmailChange = (e) => {
        setEmailId(e.target.value);
    };
    const handleVerify = async () => {

        const response = await axios.post('http://localhost:5000/api/company/post/gcpRegister',
            {
                emailId,
                gcpPlatformId
            }
        )
        if (response.status === 200) {
            setVerifyStatus(true);
            companyDetails.isRegisteredOnGCP = true;
            localStorage.setItem("companyDetails",JSON.stringify(companyDetails));
        }
        else{
            alert('Verification Unsuccessful');
        }
    }
    return (
        <div className="App" >
            <Nav />
            <div className="main-content">
                <Dashboard className="dashboard" />
                <div className="content">
                    <div className='verifyGcpContent'>
                        {!verifyStatus && (
                        <div className='verifyDetails'>
                            <label >Email:<input type='text' value={emailId}
                                onChange={handleEmailChange}
                                required /></label>
                            <label >Gcp Platform Id:<input type="number"
                                value={gcpPlatformId}
                                onChange={handleGcpChange}
                                required /></label>
                        </div>)}
                        { verifyStatus && (
                            <div className='verifyDetails'>
                                <label >Email:{emailId}</label>
                                <label >Gcp Platform Id:{gcpPlatformId}</label>
                            </div>
                        )}
                        <div className='verifyButtons'>
                            <button>Edit Details</button>
                            {!verifyStatus && (
                            <button onClick={handleVerify}>Verify</button>
                        )} 
                        </div>
                        {verifyStatus && (
                            <div className='verifyStatusDisplay'>
                                <span>Gcp Platform Id Verified</span>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </div>
    )
}



export default VerifyGCP