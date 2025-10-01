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
  