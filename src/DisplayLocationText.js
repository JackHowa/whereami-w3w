import React from "react";
import useThreeWordLocation from "./useThreeWordLocation";

function DisplayLocationText() {
  return <p>{useThreeWordLocation()}</p>;
}

export default DisplayLocationText;
