import React, { useState } from "react";
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

export default App;
