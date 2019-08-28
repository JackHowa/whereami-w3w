import React, { useState } from "react";
import ReactDOM from "react-dom";
import DisplayLocationArea from "./DisplayLocationArea";
import AskToShowLocation from "./AskToShowLocation";
import ShowLocationContext from "./ShowLocationContext";

function App() {
  const showLocation = useState(false);

  return (
    <ShowLocationContext.Provider value={showLocation}>
      <AskToShowLocation />
      <DisplayLocationArea />
    </ShowLocationContext.Provider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
