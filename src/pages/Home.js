import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import UserCard from "../components/UserCard";
import SearchBar from "../components/SearchBar";
import AddUserForm from "../components/AddUserForm";
import UserList from "../components/UserList";

function Home() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
   const [sortBy, setSortBy] = useState("name");

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

  const filteredUsers = users
    .filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "email") return a.email.localeCompare(b.email);
      return 0;
    });

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
