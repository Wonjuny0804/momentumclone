import "@babel/polyfill";
import backgroundRender from './background';
import todayFocus from './todayFocus.js';
import weatherInit from './weather';
import quote from './quote.js';
import '../css/style.css';

backgroundRender();
weatherInit();
todayFocus();
quote();
