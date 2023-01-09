import React from "react";
import ReactDOM from "react-dom/client";

// JSX >> React.createElement >>> object>>> html DOM

// Composition of Component (Add a component inside another)

// Component can be called in many ways inside JSX.
// <Author />
// {Author()}
// <Author></Author>

// Child functional component.
const Author = () => {
  return (
    <p>
      This it called composition of components, which is component inside
      another component
    </p>
  );
};

// Parent Funcitonal component
const Title = () => {
  return (
    <div className="title">
      <h1 id="heading1">Functional Compoent Heading 11111</h1>
      <h2 id="heading2">Functional Compoent Heading 2222</h2>
      <h3 id="heading3">Functional Compoent Heading 33333</h3>
      {console.log(Author)}
      {/* 1st way to call a component */}
      <Author />
      {/* 2nd way to call a component */}
      {Author()}
      {/* 3rd way to call a component */}
      <Author></Author>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Title />);
