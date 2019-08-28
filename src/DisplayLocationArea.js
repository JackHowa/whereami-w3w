import React, { useContext } from "react";
import ShowLocationContext from "./ShowLocationContext";
import DisplayLocationText from "./DisplayLocationText";

function DisplayLocationArea() {
  const [showLocation] = useContext(ShowLocationContext);
  return (
    <>
      {showLocation ? (
        <DisplayLocationText />
      ) : (
        <p>Click above to find your three word location</p>
      )}
    </>
  );
}

export default DisplayLocationArea;
