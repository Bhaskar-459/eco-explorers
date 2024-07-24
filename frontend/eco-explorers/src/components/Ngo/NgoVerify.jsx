// VerifyNgoCredits.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './NgoVerify.css';

const VerifyNgoCredits = () => {
    const [certificateId, setCertificateId] = useState('');
    const [message, setMessage] = useState('');
    const [credits, setCredits] = useState(null);
    const base_url = import.meta.env.VITE_REACT_APP_API_BASE_URL;

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let ngoDetails = JSON.parse(localStorage.getItem("ngoDetails"));
            const email = ngoDetails.email;
            const response = await axios.post(`${base_url}/api/ngo/post/verify`, { email });
            if (response.data.ngoCredits !== undefined) {
                console.log(response.data.ngoCredits);
                alert('Credits updated successfully!\n 100 Credits added to your account');
                window.location.href = '/ngo';
            } else {
                setMessage(response.data.message);
            }
        } catch (error) {
            setMessage('An error occurred while updating credits.');
        }
    };

    return (
        <div className="verify-ngo-credits">
            <h2 className="verify-title">Verify and Update NGO Credits</h2>
            <form className="verify-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Certificate ID:</label>
                    <input 
                        type="text" 
                        className="input-field"
                        value={certificateId} 
                        onChange={(e) => setCertificateId(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit" className="submit-button">Verify and Update Credits</button>
            </form>
            
            {message && <p className="message">{message}</p>}
            {credits !== null && <p className="message">Updated Credits: {credits}</p>}
        </div>
    );
};

export default VerifyNgoCredits;
