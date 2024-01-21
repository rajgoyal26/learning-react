import React from "react";
import ReactDOM from "react-dom/client";

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
      {/* <TitleComponent />
      {jsxheading} */}
      {/* {TitleComponent()} can call TitleComponent as it is a function */}
      <h1 className="heading">Learn React using heading component</h1>
    </div>
  );
};



const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxheading);
root.render(<HeadingComponent />);
