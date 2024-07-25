import React, { useState } from 'react';
import axios from 'axios';
import './VerifyGCP.css';

const RegiterGCP = () => {
    const [GcpPlatformId, setGcpPlatformId] = useState('');
    const [message, setMessage] = useState('');
    const base_url = import.meta.env.VITE_REACT_APP_API_BASE_URL;

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let companyDetails = JSON.parse(localStorage.getItem("companyDetails"));
            const emailId = companyDetails.companyMail;
            // console.log(emailId);
            const response = await axios.post(`${base_url}/api/company/post/gcpRegister`, { emailId, gcpPlatformId:GcpPlatformId });
            if (response.data !== undefined) {
                console.log(response.data);
                alert('GCP ID registered successfully');
                companyDetails.isRegisteredOnGCP = true;
                localStorage.setItem("companyDetails", JSON.stringify(companyDetails));
                window.location.href = '/company';
            } else {
                setMessage(response.data);
            }
        } catch (error) {
            setMessage('An error occurred while updating credits.');
        }
    };

    return (
        <div className="verify-company-gcp">
            <h2 className="verify-title">Register with GCP ID</h2>
            <form onSubmit={handleSubmit} className="verify-form">
                <div className="form-group">
                    <label>GCP ID:</label>
                    <input
                        type="text"
                        value={GcpPlatformId}
                        onChange={(e) => setGcpPlatformId(e.target.value)}
                        required
                        className="input-field"
                    />
                </div>
                <button type="submit" className="submit-button">Register</button>
            </form>
            {message && <p className="message">{message}</p>}
        </div>
    );
};
export default RegiterGCP;