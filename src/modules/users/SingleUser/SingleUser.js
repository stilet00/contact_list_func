import React, { useContext } from "react";
import "./SingleUser.css";
import { themeContext } from "../../../themes/theme-context";
function SingleUser({ user }) {
  const { theme } = useContext(themeContext);
  return (
    <div className={"user-card"} style={theme}>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.phone}</p>
    </div>
  );
}

export default SingleUser;
