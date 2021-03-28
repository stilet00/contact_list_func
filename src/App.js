import './App.css';
import React from 'react'
import Contacts from "./components/Contacts/Contacts";
import {themeContext, useThemeContext} from "./themes/theme-context";

const UserContext = themeContext


function App() {
    const {contextValue} = useThemeContext()
  return (
            <UserContext.Provider value={contextValue}>
              <Contacts />
            </UserContext.Provider>

  );
}

export default App;
