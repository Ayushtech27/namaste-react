import React from "react";
import ReactDOM from "react-dom/client";

//React Element
const title = (
  <h1 className="head" tabIndex="1">
    Namaste React using JSX 🚀
  </h1>
);

//Component Composition
const HeadingComponent = () => (
  <div id="container">
    {title}
    <h1 className="heading">Namaste React Functional Component.</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
