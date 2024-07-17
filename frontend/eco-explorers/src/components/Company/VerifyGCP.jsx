import React, { useState } from 'react';
import axios from 'axios';
import './VerifyGCP.css';

const VerifyGCP = () => {
    const [certificateId, setCertificateId] = useState('');
    const [message, setMessage] = useState('');
    const base_url = import.meta.env.VITE_REACT_APP_API_BASE_URL;

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let companyDetails = JSON.parse(localStorage.getItem("companyDetails"));
            const email = companyDetails.emailId;
            console.log(email);
            const response = await axios.post(`${base_url}/api/company/post/verify`, { email });
            if (response.data.GeneratedCredits !== undefined) {
                console.log(response.data.GeneratedCredits);
                alert('Credits updated successfully!\n 100 Credits added to your account');
                window.location.href = '/company';
            } else {
                setMessage(response.data.message);
            }
        } catch (error) {
            setMessage('An error occurred while updating credits.');
        }
    };

    return (
        <div className="verify-company-gcp">
            <h2 className="verify-title">Verify and Update Company GCP Credits</h2>
            <form onSubmit={handleSubmit} className="verify-form">
                <div className="form-group">
                    <label>Certificate ID:</label>
                    <input
                        type="text"
                        value={certificateId}
                        onChange={(e) => setCertificateId(e.target.value)}
                        required
                        className="input-field"
                    />
                </div>
                <button type="submit" className="submit-button">Verify and Update Credits</button>
            </form>
            {message && <p className="message">{message}</p>}
        </div>
    );
};
export default VerifyGCP;
