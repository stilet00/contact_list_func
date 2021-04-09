import React, { useContext } from "react";
import "./SingleUser.css";
import { themeContext } from "../../../themes/theme-context";
import Button from "@material-ui/core/Button";
import { Link, useRouteMatch } from "react-router-dom";
function SingleUser({ user, onDelete }) {
  const { theme } = useContext(themeContext);
  const { path } = useRouteMatch()
  return (
    <div className={"user-card"} style={theme}>
        <Link to={path + user.id} >
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.phone}</p>
        </Link>
      <Button variant="contained" color="primary" onClick={() => onDelete(user.id)}>DELETE</Button>

    </div>

  );
}

export default SingleUser;
