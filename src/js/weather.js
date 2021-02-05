import axios from "axios";
import getLocation from "./location";
import { getWeatherUrl } from "./env";

let weatherState = null;

// 상수값
const DEFAULT_LAT = 37;
const DEFAULT_LON = 127;

let lat = 0;
let lon = 0;

const $weatherSection = document.querySelector('.weather');
const $dailyWeather = document.querySelector('.daily-weather');

const $dailyWeatherIcon = document.querySelector('.daily-weather-icon');
const $dailyWeatherTemp = document.querySelector('.daily-weather-temp');
const $dailyWeatherLocation = document.querySelector('.daily-weather-location');

const $weeklyWeatherLocation = document.querySelector('.weekly-weather-location');
const $weeklyWeatherState = document.querySelector('.weekly-weather-state');
const $weeklyWeatherIcon = document.querySelector('.weekly-weather-icon');
const $weeklyWeatherTemp = document.querySelector('.weekly-weather-temp');

const $weeklyWeatherList = document.querySelector('.weekly-weather-list');

const render = weatherState => {
  if (!weatherState) {
    $dailyWeatherIcon.src = 'https://miro.medium.com/max/882/1*9EBHIOzhE1XfMYoKz1JcsQ.gif';
    $dailyWeatherIcon.alt = '로딩중';
    $weeklyWeatherIcon.src = 'https://miro.medium.com/max/882/1*9EBHIOzhE1XfMYoKz1JcsQ.gif';
    $weeklyWeatherIcon.alt = '로딩중';
  }

  const location = weatherState.timezone;

  $dailyWeatherIcon.src = `http://openweathermap.org/img/wn/${weatherState.current.weather[0].icon}@2x.png`;
  $dailyWeatherTemp.textContent = `${Math.round(weatherState.current.temp)}°`;
  $dailyWeatherLocation.textContent = location;

  $weeklyWeatherLocation.textContent = location;
  $weeklyWeatherState.textContent = weatherState.current.weather[0].main;
  $weeklyWeatherIcon.src = `http://openweathermap.org/img/wn/${weatherState.current.weather[0].icon}@4x.png`;
  $weeklyWeatherTemp.textContent = `${Math.round(weatherState.current.temp)}°`;

  const dailyWeathers = weatherState.daily;

  dailyWeathers.length = 7;

  const $fragment = document.createDocumentFragment();

  dailyWeathers.forEach((dailyWeather, index) => {
    const $li = document.createElement('li');
    const $time = document.createElement('time');
    const $div = document.createElement('div');
    const $span = document.createElement('span');
    const $img = document.createElement('img');
    const $tempMin = document.createElement('em');
    const $tempMax = document.createElement('em');

    const date = new Date(dailyWeather.dt * 1000);

    $li.id = index;

    $time.classList.add('white-space');
    $time.dateTime = date.toISOString();
    $time.textContent = date.toDateString().slice(0, 3).toUpperCase();

    $div.classList.add('weekly-weather-list-item');

    $span.classList.add('weather-list-icon-wraper');

    $img.classList.add('weather-list-icon');
    $img.src = `http://openweathermap.org/img/wn/${dailyWeather.weather[0].icon}@2x.png`;
    $img.alt = dailyWeather.weather[0].main;

    $tempMin.classList.add('temp');
    $tempMin.classList.add('temp-min');
    $tempMin.textContent = `${Math.round(dailyWeather.temp.min)}°`;

    $tempMax.classList.add('temp');
    $tempMax.classList.add('temp-max');
    $tempMax.textContent = `${Math.round(dailyWeather.temp.max)}°`;

    $span.appendChild($img);
    $div.appendChild($span);
    $div.appendChild($tempMin);
    $div.appendChild($tempMax);

    $li.appendChild($time);
    $li.appendChild($div);

    $fragment.appendChild($li);
  });
  $weeklyWeatherList.innerHTML = '';
  $weeklyWeatherList.appendChild($fragment);
};

const getWeatherData = async () => {
  if (!localStorage.getItem('weatherState')) {
    [lat, lon] = await getLocation();
    const {
      data: weatherData
    } = await axios.get(getWeatherUrl(lat, lon));
    localStorage.setItem('weatherState', JSON.stringify(weatherData));
  }
  weatherState = JSON.parse(localStorage.getItem('weatherState'));
  render(weatherState);
};

const eventHadlerRegister = () => {
  // 이벤트 핸들러 정의
  const weeklyToggle = () => {
    $weatherSection.classList.toggle('active');
  };

  const selectDay = id => {
    $weeklyWeatherIcon.src = `http://openweathermap.org/img/wn/${weatherState.daily[id].weather[0].icon}@2x.png`;
    $weeklyWeatherTemp.textContent = `${Math.round(weatherState.daily[id].temp.day)}°`;
  };

  // 이밴트 핸들러 등록
  document.addEventListener('DOMContentLoaded', getWeatherData);

  $dailyWeather.addEventListener('click', weeklyToggle);

  $weeklyWeatherList.addEventListener('click', ({
    target
  }) => {
    if (!target.matches('li') && !target.matches('li *')) return;

    if (target.matches('li')) selectDay(target.id);
    else if (target.matches('li > *')) selectDay(target.parentNode.id);
    else if (target.matches('li > * > *')) selectDay(target.parentNode.parentNode.id);
    else if (target.matches('li > * > * > *')) selectDay(target.parentNode.parentNode.parentNode.id);
  });
};

const weatherInit = () => {
  eventHadlerRegister();
  getWeatherData();
};

export default weatherInit;
