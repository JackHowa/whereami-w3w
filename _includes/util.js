async function findWhat3Words(position) {
  try {
    const threeWordLocationResponse = await fetch(
      `https://api.what3words.com/v3/convert-to-3wa?coordinates=${position.coords.latitude}%2C${position.coords.longitude}&key=${'2YIQ30MS'}`
    );

    const data = await threeWordLocationResponse.json();

		const threeWordLocation = data.words;

		if (threeWordLocation !== undefined) {
			document.getElementById('location-output').innerHTML = data.words;
		} else {
			throw new Error('No 3 word location found');
		}
  } catch (err) {
		document.getElementById('location-output').innerHTML = 'Something went wrong';
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
