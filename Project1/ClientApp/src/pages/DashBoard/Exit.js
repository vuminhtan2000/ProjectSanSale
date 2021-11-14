import React from "react";
import "./Dashboard.css";
import { removeUserSession } from "../../Utils/Common";

function Exit(props) {
  const handleLogout = () => {
    removeUserSession();
    props.history.push("/login");
  };
  return (
    // 1.  div hiển thị NAV bar
    <div>
      <input type="button" onClick={handleLogout} value="Logout" />
      <h1> Thoát !</h1>
    </div>
  );
}

export default Exit;
