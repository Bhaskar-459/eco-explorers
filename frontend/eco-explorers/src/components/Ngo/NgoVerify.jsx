import React, { useState } from 'react';
import axios from 'axios';

const VerifyNgoCredits = () => {
    const [certificateId, setCertificateId] = useState('');
    const [message, setMessage] = useState('');
    const [credits, setCredits] = useState(null);
    const base_url = import.meta.env.VITE_REACT_APP_API_BASE_URL;
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let ngoDetails=JSON.parse(localStorage.getItem("ngoDetails"));
            const email = ngoDetails.email;
            const response = await axios.post(`${base_url}/api/ngo/post/verify`, {email});
            if (response.data.ngoCredits !== undefined) {
                // setCredits(response.data.ngoCredits);
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
        <div>
            <h2>Verify and Update NGO Credits</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Certificate ID:</label>
                    <input 
                        type="text" 
                        value={certificateId} 
                        onChange={(e) => setCertificateId(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit" >Verify and Update Credits</button>
            </form>
            
            {message && <p>{message}</p>}
            {credits !== null && <p>Updated Credits: {credits}</p>}
        </div>
    );
};

export default VerifyNgoCredits;
