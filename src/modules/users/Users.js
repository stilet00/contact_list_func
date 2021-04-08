import React from "react";
import { Link } from "react-router-dom";
import "./Users.css";
import Button from "@material-ui/core/Button";
import SingleUser from "./SingleUser/SingleUser";
import { USERS_URL } from "../../constants/constants";
import { useData, useShowMore } from "../../common/hooks";

function Users(props) {
  const { data, loader } = useData(USERS_URL);
  const { renderedItems, button } = useShowMore(data);
  return (
    <div className={"users"}>
      <Button variant="contained" color="primary" className={"back-button"}>
        <Link to="/" className={"button-inner"}>
          Back
        </Link>
      </Button>
      <div className={"users-container"}>
          {loader}
        {data.slice(0, renderedItems).map((item) => {
          return <SingleUser user={item} key={item.id} />;
        })}
      </div>
        {button}
    </div>
  );
}

export default Users;
