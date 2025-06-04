import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);      
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    console.log("🔵 Component mounted - Fetching data");

    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);      
        setLoading(false);           
        console.log("Data loaded");
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });

    return () => {
      console.log("Component will unmount");
    };
  }, []); // Empty dependency array means this runs only once

  return (
    <div>
      <h2>User List</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name} ({user.email})</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
