const submit = document.getElementById('submit')
const apiKey = API;
const city = 'Lagos';
const url = 'https://';

async function getWeather(params) {
  try{
    const response = await fetch(url);
    if(!response.ok) throw new Error('City not found!');
    const data = await response.json();
    return{
      temperature: data.main.temp,
      humidity: data.main.humidity,
      description: data.weather[0].description
    };
  } catch(error){
    console.error(error);
  }
}

async function main(params) {
  const weather = await getWeather();
  if(weather){
    console.log(`Temperature: ${weather.temperature}oC`);
    console.log(`Humidity: ${weather.humidity}%`);
    console.log(`Description: ${weather.description}`);
  }
}

main();