import React, { useContext } from "react";
import ShowLocationContext from "./ShowLocationContext";

function AskToShowLocation() {
  const [showLocation, toggleShowLocation] = useContext(ShowLocationContext);

  return (
    <div>
      <label>
        Show Location
        <input
          type="checkbox"
          onChange={() => toggleShowLocation(!showLocation)}
          checked={showLocation}
        />
      </label>
    </div>
  );
}

export default AskToShowLocation;
