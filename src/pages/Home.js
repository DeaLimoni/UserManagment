import React, { useEffect, useState } from "react";
import UserCard from "../components/UserCard";
import SearchBar from "../components/SearchBar";
import AddUserForm from "../components/AddUserForm";

function Home() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
   const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleAddUser = (user) => {
    setUsers([user, ...users]);
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container className="mt-4">
      <h1 className="text-center text-primary mb-4">User Management App</h1>
      <AddUserForm onAddUser={handleAddUser} />
      <SearchBar onSearch={handleSearch} />
      <Row>
        {filteredUsers.map((user) => (
          <Col md={4} key={user.id} className="mb-4">
            <UserCard user={user} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Home;
