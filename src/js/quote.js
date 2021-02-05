const quote = async () => {
  // DOM elements

  const getQuote = () => {
    const options = {
      method: 'GET',
      url: 'https://quotes15.p.rapidapi.com/quotes/random/',
      headers: {
        "x-rapidapi-key": "fbd0739064msh726b5e808a8b5e4p1fd9c2jsn8e47c003de81",
        "x-rapidapi-host": "quotes15.p.rapidapi.com"
      }
    };
    const res = await axios(options);
    const { content, originator } = res.data;

  }
  const $quote = document.querySelector('.quote-wrapper > q');
  const $quoteCiter = document.querySelector('.quote-wrapper > span');
  let COUNT_START = new Date();

  console.log(localStorage.getItem('dailyQuote'));
  if (!localStorage.getItem('dailyQuote')) {
    COUNT_START = new Date();
    
    localStorage.setItem('dailyQuote', JSON.stringify({
      content,
      'name': originator.name
    }));
    console.log(localStorage.getItem('dailyQuote'));

  } else {
    const CURRENT_DATE = new Date();
    console.log(CURRENT_DATE - COUNT_START);
    
    console.log(localStorage.getItem('dailyQuote'));
  }
}

export default quote;

// localStorage.setItem('dailyQuote',JSON.stringify(dailyQuote))