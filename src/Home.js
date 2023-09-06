import React from 'react';
import axios from 'axios';
import { useState } from 'react';
export default function Home() {
  const [conection, setConection] = useState('Not Connected');
  const connectToDB = () => {
    axios
      .get('http://localhost:5000/connectdb')
      .then((response) => {
        console.log(response);
        setConection(response.data);
      })
      .catch((error) => {
        // Handle the error here
        console.error('An error occurred:', error);
      });
  };
  return (
    <div>
      <h1>HOME PAGE</h1>
      <button onClick={connectToDB}>Connect to DB</button>
      <p>Database status: {conection}</p>
    </div>
  );
}
