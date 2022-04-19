import './App.css';
import { useState } from 'react';
import { WeatherCard } from './components/WeatherCard/weather-card';
import { CitySelector } from './components/CitySelector/city-selector';


function App() {
  
  const [cityName, setCityName] = useState("N/A");
  const [mainTempStatus, setMainTemp] = useState("N/A");
  const [temp, setTemp] = useState("0");
  const [imgUrl, setImgUrl] = useState("image url")

  const getWeatherData = async (value) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${value[1]}&lon=${value[0]}&appid=2e5a106969b36b69f352ba20721784e1&units=metric&lang=it`

    const response = await fetch(url);
    
    const weatherData = await response.json();
    
    setCityName(weatherData.name);
    setMainTemp(weatherData.weather[0].description);
    setTemp(`Temperatura: ${Math.round(weatherData.main.temp)} °C`);
    setImgUrl(`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`)
  
  }

  return ( 
    <main className='wrapper'>
      <CitySelector notify={getWeatherData}/>
      <section className='cards-wrapper'>
        <WeatherCard cityName={cityName} mainTemp={mainTempStatus} temp={temp} imgUrl={imgUrl} />
      </section>
    </main>
  );
}

export default App;
