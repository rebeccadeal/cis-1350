"use strict";

/*
New Perspectives on HTML5 and CSS3, 7th Edition
Tutorial 10
Case Problem 2

Pages: 799-801
Due Date: 11/13/17

Author: Rebecca Deal
Date: 11/7/17

Filename: hg_report.js
Path: /rebecca.deal/html10/case2/scripts/hg_report.js
*/

/* Generate the game report */
var gameReport =
  '<h1>' + itemTitle + '</h1><h2>By: ' + itemManufacturer + '</h2>' +
  '<img src="images/hg_' + itemID + '.png" alt="' + itemID + 'gameImg" />' +
  '<table><tr><th>Product ID</th><td>' + itemID + '</td></tr>' +
  '<tr><th>List Price</th><td>' + itemPrice + '</td></tr>' +
  '<tr><th>Platform</th><td>' + itemPlatform + '</td></tr>' +
  '<tr><th>ESRB Rating</th><td>' + itemESRB + '</td></tr>' +
  '<tr><th>Condition</th><td>' + itemCondition + '</td></tr>' +
  '<tr><th>Release</th><td>' + itemRelease + '</td></tr></table>' + itemSummary;

/* Write the game report to the article element */
document.getElementsByTagName('article')[0].innerHTML = gameReport;

/* Calculate the average rating */
var ratingsSum = 0;
var ratingsCount = ratings.length;
// for loop to accumulate each rating to the ratings sum
for (var i = 0; i < ratingsCount; i++) {
  ratingsSum += ratings[i];
}
var ratingsAvg = ratingsSum / ratingsCount;

/* Generate the rating report */
var ratingReport =
  '<h1>Customer Reviews</h1><h2>' + ratingsAvg +
  ' out of 5 stars (' + ratingsCount + ' reviews)</h2>';
// for loop to add the 3 most recent reviews to the rating report
for (var i = 0; i < 3; i++) {
  ratingReport +=
    '<div class="review"><h1>' + ratingTitles[i] + '</h1>' +
    '<table><tr><th>By</th><td>' + ratingAuthors[i] + '</td></tr>' +
    '<tr><th>Review Date</th><td>' + ratingDates[i] + '</td></tr>' +
    '<tr><th>Rating</th><td>';
  // nested for loop to represent each review's rating with stars
  for (var j = 1; j <= ratings[i]; j++) {
    ratingReport += '<img src="images/hg_star.png" />';
  }
  ratingReport += '</td></tr></table>' + ratingSummaries[i] + '</div>';
}

/* Write the rating report to the aside element */
document.getElementsByTagName('aside')[0].innerHTML = ratingReport;
