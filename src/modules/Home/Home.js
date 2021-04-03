import "./Home.css";
import React, { useContext } from "react";
import { Route, Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
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
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/albums">Albums</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
