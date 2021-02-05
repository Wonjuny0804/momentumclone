// todo 모듈화

const backgroundRender = () => {
  const $background = document.querySelector('.background');
  const today = new Date();

  // // test용 코드
  today.setHours(1);
  const hour = today.getHours();
  // console.log(hour);

  switch (hour) {
    case 0: case 1: case 2: case 3: case 4:
      console.log(hour);
      $background.style.backgroundImage = "url('https://source.unsplash.com/collection/23428849/1600x900')"; // night
      break;
    case 5: case 6:
      $background.style.backgroundImage = "url('https://source.unsplash.com/collection/74526701/1600x900')"; // sunrise
      break;
    case 7: case 8: case 9: case 10: case 11:
      $background.style.backgroundImage = "url('https://source.unsplash.com/collection/98381913/1600x900')"; // morning
      break;
    case 12: case 13: case 14: case 15: case 16:
      $background.style.backgroundImage = "url('https://source.unsplash.com/collection/27904141/1600x900')"; // afternoon
      break;
    case 17: case 18:
      $background.style.backgroundImage = "url('https://source.unsplash.com/collection/38009939/1600x900')"; // sunset
      break;
    case 19: case 20: case 21: case 22: case 23:
      $background.style.backgroundImage = "url('https://source.unsplash.com/collection/84546349/1600x900')"; // evening
      break;
    default:
      console.log('Invalid month');
  }
};

export default backgroundRender;
