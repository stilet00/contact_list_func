import React from "react";
import { Link } from "react-router-dom";
import "./Users.css";
import Button from "@material-ui/core/Button";
import SingleUser from "./SingleUser/SingleUser";
import { USERS_URL } from "../../constants/constants";
import { useData } from "../../common/hooks";

function Users(props) {
  const { data } = useData(USERS_URL);
  return (
    <div className={'users'}>
      <Button variant="contained" color="primary" className={'back-button'}>
        <Link to="/" className={"button-inner"}>
          Back
        </Link>
      </Button>
      <div className={"users-container"}>
        {data.map((item) => {
          return (
            <SingleUser
              user={item}
              key={item.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Users;
