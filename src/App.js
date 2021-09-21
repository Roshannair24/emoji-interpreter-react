import React, { useState } from "react";

import "./styles.css";

var username = "Roshan";

var emojiDictionary = {
  "🐵": "Monkey",
  "🐶": " Dog",
  "🦊": "Fox",
  "🐯": "Tiger",
  "🐮": "Cow",
  "🐹": "Hamster",
  "🐼": "Panda",
  "🦉": "Owl",
  "🐸": "Frog",
  "🐨": "Koala"
};

var emojiDictionaryARR = Object.keys(emojiDictionary);

export default function App() {
  var [state, setstate] = useState("");

  function changeHandler(event) {
    console.log(event.target.value);

    var meaning = emojiDictionary[event.target.value];

    if (meaning === undefined) {
      setstate("I dont know");
    } else {
      setstate(emojiDictionary[event.target.value]);
    }
  }

  function handleclick(element) {
    console.log("clciked" + element);

    setstate(emojiDictionary[element]);
  }

  return (
    <div className="App">
      <h1>
        Welcome <span style={{ color: "Blue" }}>{username}</span>
      </h1>
      <h2 style={{ color: "grey" }}>
        to inside outttttt-Animal emoji interpreter
      </h2>

      <input onChange={changeHandler}></input>

      <div style={{ padding: "0.5rem" }}>
        {emojiDictionaryARR.map(function (element, index, array) {
          return (
            <span
              onClick={() => handleclick(element)}
              style={{ padding: "0.5rem", fontSize: "2rem", cursor: "pointer" }}
            >
              {element}
            </span>
          );
        })}
      </div>

      <div> {state}</div>
    </div>
  );
}
