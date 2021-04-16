import React from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import "./Users.css";
import UserList from "./UserList/UserList";
import Button from "@material-ui/core/Button";
import UserForm from "./UserForm/UserForm";

function Users(props) {
  const { path } = useRouteMatch();
  return (
    <div className={"users"}>
      <div className={"control-buttons"}>
        <Button variant="contained" color="primary">
          <Link to="/" className={"button-inner"}>
            HOME
          </Link>
        </Button>
      </div>
      <Switch>
        <Route path={path + "/"} exact component={UserList} />
        <Route path={path + "/:id"} component={UserForm} />
      </Switch>
    </div>
  );
}

export default Users;
