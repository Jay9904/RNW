import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ApiFatch = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://moviesdatabase.p.rapidapi.com/titles', {

        
        });

        setWeatherData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h1>Weather Information</h1>
      <pre>{JSON.stringify(weatherData, null, 2)}</pre>
    </div>
  );
};

export default ApiFatch;
