import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "This is Namaste React 🚀"),
    React.createElement("h2", {}, "I'm an h2 Tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm an h1 Tag"),
    React.createElement("h2", {}, "I'm an h2 Tag"),
  ]),
]);

//Creating root
const root = ReactDOM.createRoot(document.getElementById("root"));
//Rendering inside the root
root.render(parent);
