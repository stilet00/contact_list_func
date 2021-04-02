import React from 'react';
import { Link, Route, Switch } from "react-router-dom";
import Home from "../Home/Home";

function Users (props) {
    return (
        <div>
            Users
            <Switch>
                <Link to="/">Back</Link>
                <Route path={'/'} component={Home} />
            </Switch>
        </div>
    );
}

export default Users;