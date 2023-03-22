import { useState, useEffect } from "react";

export default function AsideWeatherWidget() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=56.902733&lon=12.488801&units=metric&appid=f8384513fad5f91ea04d07a2cbf916ec`
    )
      .then((response) => response.json())
      .then((actualData) => {
        setData(actualData);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const weatherIconUrl =
    data &&
    `https://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`;
  const currentTemp = data && Math.round(data.current.temp);

  return (
    <div>
      <h3>Weather</h3>
      {loading && <div>Loading...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      {data && (
        <ul className="weather-list">
          <li>Falkenberg, Sweden</li>
          <li>{currentTemp}°C</li>
          <li>{data.current.weather[0].main}</li>
          <li>
            <img src={weatherIconUrl} alt="Image of current weather" />
          </li>
        </ul>
      )}
    </div>
  );
}

// const getWeatherInfo = () => {
//   fetch('https://api.openweathermap.org/data/2.5/weather?lat=57.107117&lon=12.252091&units=metric&appid=f8384513fad5f91ea04d07a2cbf916ec')
//       .then(res => res.json())
//       .then(response => {

//           const { main: { feels_like }, weather } = response
//           console.log(response)
//           console.log(weather[0].main)
//           label.innerText = "fryser just nu: " + Math.round(feels_like) + " " + response.weather[0].main;
//           showWeatherIcon(weather[0].icon)
//           const myImg = document.createElement("img")
//           myImg.src = showWeatherIcon(weather[0].icon);
//           label.appendChild(myImg)
//           console.log(myImg)
//           //document.getElementById('testId').innerHTML = data[0][0][0];
//       })
//       .catch(error => console.error('Error:', error));
// }

// // http://openweathermap.org/img/w/01d.png
// const showWeatherIcon = (iconString) => {
//   // stoppa in en ikon med src =
//   const iconURL = "http://openweathermap.org/img/w/" + iconString + ".png";
//   return iconURL;
// }
// getWeatherInfo();
