import './App.css';
import React from 'react'
import Contacts from "./modules/Contacts/Contacts/Contacts";
import {themeContext, useThemeContext} from "./themes/theme-context";
import Home from "./modules/Home/Home";

const UserContext = themeContext


function App() {
    const {contextValue} = useThemeContext()
  return (
            <UserContext.Provider value={contextValue}>
              <Home />
            </UserContext.Provider>

  );
}

export default App;
