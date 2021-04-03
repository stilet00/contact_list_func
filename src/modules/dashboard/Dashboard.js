import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Albums from "../albums/Albums";
import Users from "../users/Users";
import Home from "../Home/Home";

function Dashboard(props) {
  return (
    <div>
      Dashboard
      <Link to="/albums">Albums</Link>
      <Link to="/users">Users</Link>
      <Link to="/">Back</Link>
      <Switch>
        <Route path={"/albums"} component={Albums} />
        <Route path={"/users"} component={Users} />
        <Route path={"/"} exact component={Home} />
      </Switch>
    </div>
  );
}

export default Dashboard;
