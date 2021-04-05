import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { themeContext } from "../../themes/theme-context";
import Button from "@material-ui/core/Button";

function Dashboard(props) {
  const { theme } = useContext(themeContext);
  return (
    <div className="home-container" style={{ background: theme.background }}>
      <nav>
        <ul>
          <li>
            <Link to="/albums" style={{ color: theme.color }}>
              Albums
            </Link>
          </li>
          <li>
            <Link to="/users" style={{ color: theme.color }}>
              Users
            </Link>
          </li>
          <li>
            <Button variant="contained" color="primary">
              <Link to="/" className={"button-inner"}>
                Back
              </Link>
            </Button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Dashboard;
