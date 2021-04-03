import "./App.css";
import React from "react";
import Contacts from "./modules/Contacts/Contacts/Contacts";
import { themeContext, useThemeContext } from "./themes/theme-context";
import Home from "./modules/Home/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./modules/dashboard/Dashboard";
import Albums from "./modules/albums/Albums";
import Users from "./modules/users/Users";
import Typography from "@material-ui/core/Typography";

const UserContext = themeContext;

function App() {
  const { contextValue } = useThemeContext();
  return (
    <UserContext.Provider value={contextValue}>
      <BrowserRouter>
        <Switch>
          <Route path={"/"} exact component={Home} />
          <Route path={"/dashboard"} component={Dashboard} />
          <Route path={"/albums"} component={Albums} />
          <Route path={"/users"} component={Users} />
          <Route path={"/contacts"} component={Contacts} />
        </Switch>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
