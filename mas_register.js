"use strict";
/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 3


   Filename: mas_register.js

   Author:  Anthony Arias
   Date:    4/23/19
   
   Function List
   =============
   
   formTest()
      Performs a validation test on the selection of the conference
      session package and the conference discount number
   
   calcCart()
      Calculates the cost of the registration and saves data
      in session storage
      
   writeSessionValues()
      Writes data values from session storage in to the
      registration summary form


*/

window.onload = function () {
      document.getElementById("regSubmit").onclick = sessionTest;

      document.getElementById("fnBox").onblur = calcCart;
      document.getElementById("lnBox").onblur = calcCart;
      document.getElementById("groupBox").onblur = calcCart;
      document.getElementById("mailBox").onblur = calcCart;
      document.getElementById("phoneBox").onblur = calcCart;
      document.getElementById("banquetBox").onblur = calcCart;

      document.getElementById("sessionBox").onchange = calcCart;

      document.getElementById("mediaCB").onclick = calcCart;
      calcCart();
}

// this function is to provide a validation test for the conference session selection list
function sessionTest() {
      var session = document.getElementById("sessionBox");
      if (session !== -1) {
            session.setCustomValidity("Select a Session Package");
      } else {
            session.setCustomValidity("");
      }
}

//this function is to calculate the registration cost and to save information about the customer’s choices in session storage.
function calcCart() {
      sessionStorage.confName = document.forms.regForm.elements.fnBox.value + "" + document.forms.regForm.elements.lnBox.value;

      sessionStorage.confGroup = document.forms.regForm.elements.groupBox.value;
      sessionStorage.confMail = document.forms.regForm.elements.mailBox.value;
      sessionStorage.confPhone = document.forms.regForm.elements.phoneBox.value;
      sessionStorage.confBanquet = document.forms.regForm.elements.banquetBox.value;
}