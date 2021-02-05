import "@babel/polyfill";
import backgroundRender from './background';
import todayFocus from './todayFocus';
import weatherInit from './weather';
import timeInit from './time';
import quote from './quote';

backgroundRender();
weatherInit();
timeInit();
todayFocus();
// quote();
