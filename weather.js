//Complete the Weather API Backend part using openweathermap api
let day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let month = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octomber', 'November', 'December'];

function _(selector) {
	return document.querySelector(selector);
}

_('.search').addEventListener('click', () => {
	let input = _('.search-box').value;
	if (input === "") {
		alert("Please enter the city!");
		return;
	}
	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&APPID=1e296f4e76e53b9a7f21f1b7fcd6441b
    `)
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			_('.city').textContent = `${data.name}, ${data.sys.country}`;
			let date = new Date();
			_('.date').textContent = `${day[date.getDay()]} ${date.getDate()} ${month[date.getMonth()]} ${date.getFullYear()}`;
			_('.temp').textContent = `${parseInt(data.main.temp-273.15)}°c`;
			_('.weather').textContent = `${data.weather[0].main}`;
			_('.hi-low').textContent = `${parseInt(data.main.temp_min-273.15)}°c / ${parseInt(data.main.temp_max-273.15)}°c`;
		})
		.catch(() => {
			alert("The city you entered is incorrect!");
		})
});