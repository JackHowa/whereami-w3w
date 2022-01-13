async function findWhat3Words(position) {
  try {
    const threeWordLocationResponse = await fetch(
      `https://api.what3words.com/v3/convert-to-3wa?coordinates=${position.coords.latitude}%2C${position.coords.longitude}&key={'YOUR_API_KEY'}`
    );

    const data = await threeWordLocationResponse.json();
		document.getElementById('location-output').innerHTML = data.words;
		// return data.words;
  } catch (err) {
    // console.log(err);
  }
}


document.addEventListener("DOMContentLoaded", function() { 
	const checkbox = document.querySelector("input[type=checkbox]");

	checkbox.addEventListener("change", function() {
		if (this.checked) {
			navigator.geolocation.getCurrentPosition(position => {
				document.getElementById('location-output').innerHTML = 'fetching';
				findWhat3Words(position)
			})
		}
	})
})
