import axios from 'axios';
import React, { useState } from 'react';
import word from './word.docx';
export default function Read() {
  const [data, setData] = useState([]);
  const [file, setFile] = useState('');
  const fetchUsers = () => {
    axios
      .get('http://localhost:5000/users')
      .then((response) => {
        // Handle the response here (response.data contains the fetched data)
        const users = response.data;
        console.log(users);
        console.log(users[18].file.filename);
        setData(users);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });

    // axios
    //   .get(`http://localhost:5000/users`, { responseType: 'blob' })
    //   .then((response) => {
    //     // Create a Blob from the response data with the appropriate content type
    //     const blob = new Blob([response.data], {
    //       type: response.headers['content-type'],
    //     });
    //     console.log(blob);
    //     // Create a URL for the Blob
    //     const objectURL = URL.createObjectURL(blob);
    //     console.log(objectURL);
    //     setFile(blob);
    //     const fileDownloadUrl = URL.createObjectURL(blob);
    //     console.log(fileDownloadUrl);

    //     // Set the Blob URL in the state to display the Word file
    //     //   setFileData(objectURL);
    //   })
    //   .catch((error) => {
    //     console.error('Error fetching Word file:', error);
    //   });
  };
  return (
    <div className="read-cont">
      <h1>READ PAGE</h1>
      <h3>Records: {data.length}</h3>
      {data.map((user) => (
        <div key={user._id}>
          <div className="user">
            <div className="column">
              <span>
                <strong>Id: </strong>
              </span>
              <span>{user._id}</span>
            </div>
            <div className="column">
              <span>
                <strong>Name: </strong>
              </span>
              <span>{user.name}</span>
            </div>
            <div className="column">
              <span>
                <strong>Email: </strong>
              </span>
              <span>{user.email}</span>
            </div>
            <div className="column">
              <span>
                <strong>File: </strong>
              </span>
              {/* <span>{Object(user.file.filename)}</span> */}
              <iframe src={file} title="description"></iframe>
            </div>
          </div>
        </div>
      ))}
      <button onClick={fetchUsers}>Fetch data</button>
    </div>
  );
}
