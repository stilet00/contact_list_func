import './App.css';
import React from 'react'
import Contacts from "./components/Contacts/Contacts";
import {ThemeContext, themes} from "./themes/theme-context";




function App() {

  return (
              <ThemeContext.Provider value={themes.light}>
                <Contacts />
              </ThemeContext.Provider>

  );
}

export default App;
