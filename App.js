
import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", {"id": "heading"}, "Hello Raj from React");

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am from h1 tag"),
    React.createElement("h2", {}, "I am from h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am from h1 tag"),
    React.createElement("h2", {}, "I am from h2 tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
