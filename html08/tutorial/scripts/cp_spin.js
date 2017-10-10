/*
   New Perspectives on HTML and CSS, 7th Edition
   Tutorial 8
   Tutorial Case


   Filename: cp_spin.js

   Purpose: The purpose of this program is to synchronize
            the play and pause of the spin animation with the 
            play and pause of the video player
*/

window.onload = function() 
{
   document.getElementById("rotateVideo").onclick = pausePlayAnimVid;
}

function pausePlayAnimVid() {
   if (document.getElementById("rotateVideo").checked) {
      document.getElementsByTagName("video")[0].play();
      document.getElementsByTagName("video")[0].loop=true;      
   } else {
      document.getElementsByTagName("video")[0].pause();
      document.getElementsByTagName("video")[0].loop=false;      
   }
}