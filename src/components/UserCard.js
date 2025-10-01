import React from "react";
import { Link } from "react-router-dom";

function UserCard({ user }) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <h3>{user.name}</h3>
 
     <p>Email: {user.email}</p>
      <p>Company: {user.company?.name}</p>
      <Link to={`/user/${user.id}`}>View Details</Link>
    </div>
  );
}

export default UserCard;