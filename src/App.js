import "./App.css";
import React from "react";
import Contacts from "./modules/Contacts/Contacts/Contacts";
import { themeContext, useThemeContext } from "./themes/theme-context";
import Home from "./modules/Home/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./modules/Dashboard/Dashboard";
import Albums from "./modules/Albums/Albums";
import Users from "./modules/Users/Users";

const UserContext = themeContext;

function App() {
  const { contextValue } = useThemeContext();
  return (
    <UserContext.Provider value={contextValue}>
      <BrowserRouter>
        <Switch>
          <Route path={"/"} exact component={Home} />
          <Route path={"/Dashboard"} component={Dashboard} />
          <Route path={"/Albums"} component={Albums} />
          <Route path={"/Users"} component={Users} />
          <Route path={"/contacts"} component={Contacts} />
        </Switch>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
