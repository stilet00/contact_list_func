import React from "react";
import "./SingleUser.css";
function SingleUser({ user }) {
  return (
    <div class={"user-card"}>
      <p>{user.name}</p>
      <p>{user.username}</p>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <p>{user.website}</p>
    </div>
  );
}

export default SingleUser;
