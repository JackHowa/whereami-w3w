import React from "react";
import useThreeWordLocation from "./useThreeWordLocation";

function DisplayLocationText() {
  return <h1>{useThreeWordLocation()}</h1>;
}

export default DisplayLocationText;
