import React from "react";
import { Card, Button} from "react-bootstrap";
import { Link } from "react-router-dom";

function UserCard({ user }) {
  return (
     <Card>
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>Email: {user.email}</Card.Text>
        <Card.Text>Company: {user.company?.name}</Card.Text>
        <Link to={`/user/${user.id}`}>
          <Button variant="primary">View Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default UserCard;