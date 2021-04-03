import React from "react";
import { Link } from "react-router-dom";
import { useUsers } from "./hooks";
import "./Users.css";
import Button from "@material-ui/core/Button";
import SingleUser from "./SingleUser/SingleUser";
function Users(props) {
  const { users } = useUsers();
  return (
    <>
      <Button variant="contained" color="primary">
        <Link to="/" className={"button-inner"}>
          Back
        </Link>
      </Button>
      <div className={"users-container"}>
        {users.map((item) => {
          return (
            <SingleUser
              // deleteCont={deleteOne}
              user={item}
              // onEdit={onEdit}
              key={item.id}
            />
          );
        })}
      </div>
    </>
  );
}

export default Users;
