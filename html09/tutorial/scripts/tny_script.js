"use strict";

/*
New Perspectives on HTML5 and CSS3, 7th Edition
Tutorial 9
Tutorial Case

Pages: 672-720
Due Date: 11/6/17

Countdown Clock
Author: Rebecca Deal
Date: 11/2/17

Filename: tny_script.js
Path: /rebecca.deal/html09/tutorial/scripts/tny_script.js
*/

/* Execute the funtion to run and display the countdown clock */
runClock();
setInterval("runClock()", 1000);

/* Function to create and run the countdown clock */
function runClock() {
  /* Store the current date and time */
  var currentDay = new Date();
  var dateStr = currentDay.toLocaleDateString();
  var timeStr = currentDay.toLocaleTimeString();

  /* Display the current date and time */
  document.getElementById("dateNow").innerHTML = dateStr + "<br />" + timeStr;

  /* Calculate the days until January 1st */
  var newYear = new Date("January 1, 2018");
  var nextYear = currentDay.getFullYear() + 1;
  newYear.setFullYear(nextYear);
  var daysLeft = (newYear - currentDay)/(1000*60*60*24);

  /* Calculate the hours left in the current day */
  var hrsLeft = (daysLeft - Math.floor(daysLeft))*24;

  /* Calculate the minutes and seconds left in the current hour */
  var minsLeft = (hrsLeft - Math.floor(hrsLeft))*60;
  var secsLeft = (minsLeft - Math.floor(minsLeft))*60;

  /* Display the time left until New Year's Eve */
  document.getElementById("days").textContent = Math.floor(daysLeft);
  document.getElementById("hrs").textContent = Math.floor(hrsLeft);
  document.getElementById("mins").textContent = Math.floor(minsLeft);
  document.getElementById("secs").textContent = Math.floor(secsLeft);
}
