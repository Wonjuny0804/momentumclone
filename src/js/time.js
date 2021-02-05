const renderTime = () => {
  const today = new Date();
  const date = today.toLocaleString().slice(0, 10).replaceAll('. ', ' / ');
  const day = today.toString().slice(0, 3);
  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();

  hour %= 12;
  hour = hour || 12;
  minute = minute < 10 ? '0' + minute : minute;
  second = second < 10 ? '0' + second : second;
  const $dispDate = document.querySelector('.today-date');
  const $dispDay = document.querySelector('.today-day');
  const $dispClock = document.querySelector('.today-clock');

  const clockMeridiem = `${hour}:${minute}`;

  $dispDate.textContent = date;
  $dispDay.textContent = day;
  $dispClock.textContent = clockMeridiem;
};

const timeInit = () => {
  renderTime();
  setInterval(renderTime, 1000);
};

export default timeInit;