import React, { useState } from 'react';
import '../css/newsletter.css';

const NewsLetter = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setMessage('Please enter a valid email address.');
      return;
    }

    

    const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSeK2QCeh3BZUO1CJZHta5D7iwGPp7Nj387azr0CL4qTzYw_xw/formResponse';
    const formData = new FormData();
    formData.append('entry.290889839', email); // Use the correct entry ID

    try {
      const response = await fetch(formUrl, {
        method: 'POST',
        body: formData,
        mode: 'no-cors', // Use no-cors to bypass CORS policy
      });

      // The response will be opaque and we cannot access its contents
      alert('Subscription successful! Thank you.');
      setEmail(''); // Clear the email field
      setMessage(''); // Clear any existing messages
    } catch (error) {
      setMessage('An error occurred. Please try again.');
      console.error('Error:', error);
    }
  };

  return (
    <section className="newsletter-section">
      <div className="newsletter-container">
        <h2>
          <i className="fa-solid fa-envelope"></i> Subscribe To Our News Letter
        </h2>
        <p>Subscribe for the latest updates, offers, and exclusive Deals straight to your inbox.</p>
        <br />
        <div className="newsletter-input-button">
          <input
            type="text"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleSubmit}>Subscribe</button>
        </div>
        {/* Show message only for error */}
        {message && <p>{message}</p>}
      </div>
    </section>
  );
};

export default NewsLetter;
