import { useState, useEffect } from "react";

/*
  coordinates: {lng: -87.721576, lat: 41.945491}
  country: "US"
  language: "en"
  map: "https://w3w.co/pose.works.long"
  nearestPlace: "Lincolnwood, Illinois"
  square: {southwest: {…}, northeast: {…}}
  words: "pose.works.long"
*/

function useThreeWordLocation() {
  const [threeWordLocation, setThreeWordLocation] = useState("");

  useEffect(() =>
    navigator.geolocation.getCurrentPosition(position =>
      findWhat3Words(position)
        .then(threeWordLocationResponse =>
          setThreeWordLocation(threeWordLocationResponse)
        )
        .catch(() => {})
    )
  );

  return threeWordLocation;
}

export default useThreeWordLocation;

async function findWhat3Words(position) {
  try {
    const threeWordLocationResponse = await fetch(
      `https://api.what3words.com/v3/convert-to-3wa?coordinates=${position.coords.latitude}%2C${position.coords.longitude}&key=${process.env.SERVICE_KEY}`
    );

    const data = await threeWordLocationResponse.json();
    return data.words;
  } catch (err) {
    // console.log(err);
  }
}
