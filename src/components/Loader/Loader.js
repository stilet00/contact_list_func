import React from "react";
import "./Loader.css";

function Loader(props) {
  return (
    <tr>
      <td>
        <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </td>
    </tr>
  );
}

export default Loader;
