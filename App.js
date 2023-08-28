import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./logo.jpeg";

//React Element
const jsxheading = (
  <h1 className="heading" tabIndex="5">
    Learn React using jsx
  </h1>
);

//Functional Component

const TitleComponent = () => (
  <h1>Title for learning react through component</h1>
);

const HeadingComponent = () => {
  return (
    <div id="container">
      <TitleComponent />
      {jsxheading}
      {TitleComponent()} {/* can call TitleComponent as it is a function */}
      <h1 className="heading">Learn React using heading component</h1>
    </div>
  );
};

// assignment 3:

const HeaderComponent = () => {
  return (
    <div id="container" class="row">
      <img src={logo} height="50px" />
      <input type="text" placeholder="Search.." />
      <i class="fa fa-user" />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxheading);
root.render(<HeaderComponent />);
