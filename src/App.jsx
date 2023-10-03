import { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';
import WeatherContainer from './components/WeatherContainer';

function App() {
  const [weather, setWeather] = useState(null)

  const success = (pos) => {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
    const API_KEY = '074e1bd48d4146a3833c7125bf8e5cca';

    axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    )
      .then(({ data }) => setWeather(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, []);

  return (
    < main className='font-["Lato"] flex justify-center items-center min-h-screen bg-[url("/backgroundimage.jpeg")] bg-cover bg-center text-black px-2' >

      {weather === null ? (
        <h3>Cargando...</h3>
      ) : (
        <WeatherContainer weather={weather} />
      )}
    </main >
  )
}
export default App;
