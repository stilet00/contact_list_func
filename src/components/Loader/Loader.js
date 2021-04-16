import React from "react";
import "./Loader.css";
function Loader({ loading }) {
  let loader;
  loader = loading ? (
    <div className="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  ) : null;
  return <>{loader}</>;
}

export default Loader;
