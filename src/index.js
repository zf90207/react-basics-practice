import React from "react";
import ReactDom from "react-dom";

// function Greeting() {
//   return (
//     <div>
//       <h4>Hello World</h4>
//     </div>
//   );
// }

// const Greeting = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, "hello world")
//   );
// };

function Greeting() {
  return (
    <div className="greeting ">
      <h3>hello people</h3>
      <ul>
        <li>
          <a href="#">hello world</a>
        </li>
      </ul>
    </div>
  );
}

ReactDom.render(<Greeting />, document.getElementById("root"));
