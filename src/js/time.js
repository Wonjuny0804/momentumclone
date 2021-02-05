// todo 1. 현재 시간
// todo am pm 버튼
// todo 3. 타이머
// todo 1, 3 토글 버튼

// 공통
const today = new Date();
const date = today.toLocaleString().slice(0, 10).replaceAll('. ', ' / ');
const day = today.toString().slice(0, 3);
let hour = today.getHours();
let minute = today.getMinutes();
let second = today.getSeconds();
console.log(second);

hour %= 12;
hour = hour || 12;
minute = minute < 10 ? '0' + minute : minute;
second = second < 10 ? '0' + second : second;

// const clock24Hours = today.toString().slice(16, 21);
const clockMeridiem = `${hour}:${minute}`;

const $dispClock = document.querySelector('.today-clock');
const $changeClockTypeBtn = document.querySelector('.changeclock-btn');
const $changeClockTypeText = document.querySelector('.changeclock-text');

$dispClock.textContent = clockMeridiem;

$changeClockTypeBtn.onmouseenter = () => {
  $changeClockTypeText.style.opacity = 100;
};

$changeClockTypeBtn.onmouseleave = () => {
  $changeClockTypeText.style.opacity = 0;
};

const renderTime = () => {
  const $dispDate = document.querySelector('.today-date');
  const $dispDay = document.querySelector('.today-day');
  const $dispClock = document.querySelector('.today-clock');

  $dispDate.textContent = date;
  $dispDay.textContent = day;
  $dispClock.textContent = clockMeridiem;
};

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

const init = () => {
  renderTime();
  setInterval(renderTime, 1000);
};

init();
// changeClock();

// const today = new Date();
// // let second = today.getSeconds();



// 날짜


// // let hour = today.getHours();
// // let minute = today.getMinutes();
// // 24시간
// // const clock24Hours = today.toString().slice(16, 21);
// console.log(clock24Hours);
// // const clock24Hours = `${today.getHours()}:${today.getMinutes()}`;
// // today.toString().slice(17, 21);
// // today.toString().slice(17, 21);

// // if (today.toLocaleString().slice(15, 16) >= )

// // ampm



// // changeClockType
// const $changeClockTypeContainer = document.querySelector('.changeclock-container');
// // 오늘 날짜


// // 현재 시간

// $dispClock.textContent = clock24Hours;
// $dispClock.textContent = clock24Hours;



// // const $dispHour = document


