import "./Home.css";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { themeContext } from "../../themes/theme-context";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { IOSSwitch } from "../../components/IOSSwitch/IOSSwitch";
import FormGroup from "@material-ui/core/FormGroup";

function Home(props) {
  const { theme, handleChange, isLight } = useContext(themeContext);
  return (
    <div className="home-container" style={{ background: theme.background }}>
      <nav>
        <FormGroup style={{ marginLeft: 1 + "em" }}>
          <FormControlLabel
            control={
              <IOSSwitch
                checked={isLight}
                onChange={(event) => handleChange(event.target.checked)}
                name="themeSwitcher"
              />
            }
          />
        </FormGroup>
        <ul>
          <li>
            <Link to="/dashboard" style={{color: theme.color}}>Dashboard</Link>
          </li>
          <li>
            <Link to="/albums" style={{color: theme.color}}>Albums</Link>
          </li>
          <li>
            <Link to="/users" style={{color: theme.color}}>Users</Link>
          </li>
          <li>
            <Link to="/contacts" style={{color: theme.color}}>Contacts</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
