import React, { useState, useEffect } from "react";
import './styles.css';

function App() {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");


  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((response) => response.json())
      .then((data) => setUsers(data.data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);


  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  
  const filteredUsers = users.filter((user) =>
    `${user.first_name} ${user.last_name}`
      .toLowerCase()
      .includes(filter.toLowerCase())
  );

  return (
    <div className="app">
      <h1>User Directory</h1>


      <input
        type="text"
        className="filter-box"
        placeholder="Filter by name..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />


      <div className="user-list">
        {filteredUsers.map((user) => (
          <div key={user.id} className="user-card">
            <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
            <h3>{`${user.first_name} ${user.last_name}`}</h3>
            <p>{user.email}</p>
            <button
              className="delete-button"
              onClick={() => deleteUser(user.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
