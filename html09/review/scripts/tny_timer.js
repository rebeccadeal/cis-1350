"use strict";

/*
New Perspectives on HTML5 and CSS3, 7th Edition
Tutorial 9
Review Assignment

Pages: 724-725
Due Date: 11/6/17

Event Timer
Author: Rebecca Deal
Date: 11/2/17

Filename: tny_timer.js
Path: /rebecca.deal/html09/review/scripts/tny_timer.js
*/

// call the showClock function so it actually shows up
showClock();
setInterval("showClock()", 1000);

function showClock() {
  // show current date and time
  var thisDay = new Date("May 19, 2018 09:31:27");
  var localDate = thisDay.toLocaleDateString();
  var localTime = thisDay.toLocaleTimeString();
  // display the current date and time
  document.getElementById("currentTime").innerHTML =
  "<span>" + localDate + "</span><span>" + localTime + "</span>";
  // call to method nextJuly4
  var j4Date = nextJuly4(thisDay);
  j4Date.setHours(21);
  // calculate the time until 9 p.m. on the next 4th of July
  var days = (j4Date - thisDay) / (1000 * 60 * 60 * 24);
  var hrs = (days - Math.floor(days)) * 24;
  var mins = (hrs - Math.floor(hrs)) * 60;
  var secs = (mins - Math.floor(mins)) * 60;
  // display the time until 9 p.m. on the next 4th of July
  document.getElementById("dLeft").textContent = Math.floor(days);
  document.getElementById("hLeft").textContent = Math.floor(hrs);
  document.getElementById("mLeft").textContent = Math.floor(mins);
  document.getElementById("sLeft").textContent = Math.floor(secs);
}

function nextJuly4(currentDate) {
  var cYear = currentDate.getFullYear();
  var jDate = new Date("July 4, 2018");
  jDate.setFullYear(cYear);
  if ((jDate - currentDate) < 0) jDate.setFullYear(cYear + 1);
  return jDate;
}
