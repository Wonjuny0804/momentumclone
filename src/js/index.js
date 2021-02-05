import "@babel/polyfill";
import backgroundRender from './background';
import todayFocus from './todayFocus';
import weatherInit from './weather';
import timeInit from './time';
import quote from './quote.js';
import '../css/style.css';

backgroundRender();
weatherInit();
timeInit();
todayFocus();
quote();
