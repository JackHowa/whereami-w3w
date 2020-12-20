import React, { useState } from "react";
import DisplayLocationArea from "./DisplayLocationArea";
import AskToShowLocation from "./AskToShowLocation";
import ShowLocationContext from "./ShowLocationContext";
import styles from './Container.module.css'; // Import css modules stylesheet as styles

function App() {
  const showLocation = useState(false);

  return (
    <ShowLocationContext.Provider value={showLocation}>
    <div className={styles.appContainer}>
      <div className={styles.innerContainer}>
        <AskToShowLocation />
        <DisplayLocationArea />
      </div>
    </div>
    </ShowLocationContext.Provider>
  );
}

export default App;
