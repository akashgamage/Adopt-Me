//import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";
//import Pet from "./Pet";


// Template liike thsi ================================================================
/*
const Pet = () => {
    return React.createElement("div", {}, [
        React.createElement("h2", {}, "Luna"),
        React.createElement("h3", {}, "Dog"),
        React.createElement("h3", {}, "Havanese"),
    ])
}

const App = () => {
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h1", {}, "Abut Me!"),
            ...[1,2,3,4].map((i) => React.createElement("h2", {}, i)),
            React.createElement(Pet),
            React.createElement(Pet),
            React.createElement(Pet),
        ]
    );
};

ReactDOM.render(React.createElement(App), document.getElementById('root'));
*/

//============================================================================================

// 1st way====================================================================================
/*
const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { id: "my-brand" }, "Abut Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "Bird",
      breed: "Cockatiel",
    }),
    React.createElement(Pet, {
      name: "Sudo",
      animal: "Dog",
      breed: "Wheaten Terrier",
    }),
  ]);
};
*/

// Upper code in JSX==============================================================================
/*
const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Luna" animal="dog" breed="Havanese" />
      <Pet name="Pepper" animal="bird" breed="Cockatiel" />
      <Pet name="Doink" animal="cat" breed="Mix" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
*/

// SearchPaarams =======================================

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};

render(<App />, document.getElementById("root"));