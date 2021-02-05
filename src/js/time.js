const today = new Date();
const date = today.toLocaleString().slice(0, 10).replaceAll('. ', ' / ');
const day = today.toString().slice(0, 3);
let hour = today.getHours();
let minute = today.getMinutes();
let second = today.getSeconds();


// const $changeClockTypeBtn = document.querySelector('.changeclock-btn');
// const $changeClockTypeText = document.querySelector('.changeclock-text');

// $changeClockTypeBtn.onmouseenter = () => {
//   $changeClockTypeText.style.opacity = 100;
// };

// $changeClockTypeBtn.onmouseleave = () => {
//   $changeClockTypeText.style.opacity = 0;
// };

const renderTime = () => {
  console.log(second);

  hour %= 12;
  hour = hour || 12;
  minute = minute < 10 ? '0' + minute : minute;
  second = second < 10 ? '0' + second : second;
  const $dispDate = document.querySelector('.today-date');
  const $dispDay = document.querySelector('.today-day');
  const $dispClock = document.querySelector('.today-clock');

  // const clock24Hours = today.toString().slice(16, 21);
  const clockMeridiem = `${hour}:${minute}`;

  $dispDate.textContent = date;
  $dispDay.textContent = day;
  $dispClock.textContent = clockMeridiem;
};

const init = () => {
  renderTime();
  setInterval(renderTime, 1000);
};

init();

// const changeClock = () => {
// $changeClockTypeBtn.onclick = () => {
//   if ($dispClock.textContent === clockMeridiem) {
//     $dispClock.textContent = clock24Hours;
//     $changeClockTypeText.textContent = 'change to AM/PM';
//   } else {
//     $dispClock.textContent = clockMeridiem;
//     $changeClockTypeText.textContent = 'change to 24hours';
//   }
// };
// };

// changeClock();