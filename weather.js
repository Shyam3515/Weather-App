/*const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a945956d46msh535eaf0defe6575p1898fejsn4a11e2986341',
		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
	}
};

fetch('https://open-weather13.p.rapidapi.com/city/delhi', options)
	.then(response => response.json())
	.then(data => console.log(data))
	.catch(err => console.error(err));
*/
const getWeatherData = (userCity)=>{
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a945956d46msh535eaf0defe6575p1898fejsn4a11e2986341',
            'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
        }
    };
    return fetch(`https://yahoo-weather5.p.rapidapi.com/weather?location=${userCity}&format=json&u=f`, options)
        .then(response => response.json())
        //not printing just returning data
        .then(data => data)//.current_observation.condition.text  .location.city
        .catch(err => console.error(err));
}

/*City Input
  Here using async because 1 is asynchronous it will take some time to execute
  but 2 is not asynchronous it will execute immediately after clicking search.
  So, to avoid that and execute code linearly we are using async. */
const searchCity = async () =>{
    const city = document.getElementById('city-input').value;
    const day = prompt('Enter the day report from 0 to 10 from today:')
    // console.log(city)
    const data = await getWeatherData(city);// 1
    showWeatherData(data,day);// 2
}   

const showWeatherData = (data,day) =>{
    console.log(data.location.city)
    document.getElementById('city-name').innerText = data.location.city;
    document.getElementById('day').innerText = data.forecasts[day].day;
    document.getElementById('weather-type').innerText = data.forecasts[day].text;
    document.getElementById('temp').innerText = (((data.current_observation.condition.temperature)-32) *(5/9)).toFixed(1);
    document.getElementById('max-temp').innerText = (((data.forecasts[day].high)-32) *(5/9)).toFixed(1);
    document.getElementById('min-temp').innerText = (((data.forecasts[day].low)-32) *(5/9)).toFixed(1);
}