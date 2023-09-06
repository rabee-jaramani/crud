import axios from 'axios';
import React from 'react';

export default function Read() {
  const fetchData = () => {
    axios
      .get('http://localhost:5000/users/get_users')
      .then((response) => {
        // Handle the response here (response.data contains the fetched data)
        const users = response.data;
        console.log(users);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };
  return (
    <div className="read-cont">
      <h1>READ PAGE</h1>
      <button onClick={fetchData}>Fetch data</button>
    </div>
  );
}
