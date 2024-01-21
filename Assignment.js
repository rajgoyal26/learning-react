import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./logo.jpg";
import "./Assignment.css";

const HeaderComponent = () => {
    return (
      <div id="container">
        <div className="row">
          <div className="rowval">
            <img src={logo} className="img" />
          </div>
          <div className="rowval">
            <input id="searchbox" type="text" placeholder="Search.." />
          </div>
          <div className="rowval">
            <i className="fa fa-user" />
          </div>
        </div>
      </div>
    );
  };


const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxheading);
root.render(<HeaderComponent />);