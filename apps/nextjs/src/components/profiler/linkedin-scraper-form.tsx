// components/LinkedInScraperForm.js

import React, { useState } from 'react';
import axios from 'axios';

const LinkedInScraperForm = () => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/linkedin-scraper', { name, company });
      setResult(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
        <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Company" />
        <button type="submit">Scrape LinkedIn</button>
      </form>
      <div>{result}</div>
    </div>
  );
};

export default LinkedInScraperForm;
