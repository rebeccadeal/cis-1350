/*
   New Perspectives on HTML and CSS, 7th Edition
   Tutorial 7
   Review Assignment


   Filename: rb_formsubmit2.js

   Purpose: The purpose of this program is to verify that the form
            passes an initial validation test.

            When the form is submitted, the onsubmit event handler
            verifies that the form data is complete and valid.
            An alert box is displayed notifying the user.

            The event function returns a value of false so that the
            student does not have to continually retype test values
            in the survey form.
            
            For the customer form, the script also disables and enables
            the delivery and pickup options so that only one set of
            options is enabled at any one time.


*/

window.onload = init;

function init() {
   document.forms[0].onsubmit = function() {
      if (this.checkValidity()) alert("Data passes initial validation tests");
      return false;
   }
   
   document.getElementById("delivery").onclick = turnOnDelivery;
   document.getElementById("pickup").onclick=turnOnPickup;
}

function turnOnDelivery() {
   document.getElementById("addressBox").disabled=false;
   document.getElementById("delBox").disabled=false;
   document.getElementById("pickupBox").disabled=true;
}

function turnOnPickup() {
   document.getElementById("addressBox").disabled=true;
   document.getElementById("delBox").disabled=true;
   document.getElementById("pickupBox").disabled=false;
}
   
