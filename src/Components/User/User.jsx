import React, { useEffect, useState } from "react";
import { getUser } from "../User/UserService";

function User() {
  const [users, setUsers] = useState([]);
  const [emailSearch, setEmailSearch] = useState(""); // search by email

  // Fetch user data
  const fetchUser = async () => {
    try {
      const data = await getUser();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching User:", error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  // Handle input changes for email search
  const handleEmailSearch = (e) => setEmailSearch(e.target.value);

  // Filter users based on email search query only
  const filteredUsers = users.filter((user) =>
    user.email.toLowerCase().includes(emailSearch.toLowerCase())
  );

  return (
    <div>
      {/* Search Input */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by Email"
          value={emailSearch}
          onChange={handleEmailSearch}
          style={{ padding: "5px", marginRight: "10px", width: "200px" }}
        />
      </div>
      
      <table className="table table-bordered" style={{ marginTop: "20px" }}>
        <thead>
          <tr>
            <th>Age</th>
            <th>Phone No</th>
            <th>Email</th>
            <th>First Name</th>
            <th>Gender</th>
            <th>Last Name</th>
            <th>User Name</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.age}</td>
              <td>{user.phoneNo}</td>
              <td>{user.email}</td>
              <td>{user.firstName}</td>
              <td>{user.genders}</td>
              <td>{user.lastName}</td>
              <td>{user.userName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default User;
