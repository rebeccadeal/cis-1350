"use strict";

/*
New Perspectives on HTML5 and CSS3, 7th Edition
Tutorial 10
Review Assignment

Pages: 794-795
Due Date: 11/13/17

Author: Rebecca Deal
Date: 11/7/17

Filename: lht_table.js
Path: /rebecca.deal/html10/review/scripts/lht_table.js
*/

/* Set the starting cutoff date for the event list */
var thisDay = new Date("August 30, 2018");

/* Generate the event list table */
var tableHTML =
  '<table id="eventTable">' +
  '<caption>Upcoming Events</caption>' +
  '<tr><th>Date</th><th>Event</th><th>Price</th></tr>';

/* Set the ending cutoff date for the event list */
var endDate = new Date(thisDay.getTime() + 14 * 24 * 60 * 60 * 1000); // 2 weeks after thisDay

/* Add each event occurring between the cutoff dates to the event list */
for (var i = 0; i < eventDates.length; i++)
{
  var eventDate = new Date (eventDates[i]);
  var eventDay = eventDate.toDateString();
  var eventTime = eventDate.toLocaleTimeString();
  if ((thisDay <= eventDate) && (eventDate <= endDate))
  {
    tableHTML +=
      '<tr><td>' + eventDay + ' @ ' + eventTime + '</td>' +
      '<td>' + eventDescriptions[i]+ '</td>' +
      '<td>' + eventPrices[i] + '</td></tr>';
  }
}

/* End the event list table */
tableHTML += '</table>';

/* Write the event list to the element with the id "eventList" */
document.getElementById('eventList').innerHTML = tableHTML;
