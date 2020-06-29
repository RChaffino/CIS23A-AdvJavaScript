/*    
 *	Author:		Rich Chaffino
 *	Instructor:	Dr. Mandyam
 *	Class:		CIS 023A - Advanced JavaScript
 *	Date:   	24 June 2020
 *	Project:	Bit of C0D3: Casino Games Training
 *	Filename:	project2.js
 */

"use scrict";

function clearFields(evt) {
	if (evt.preventDefault) {
		evt.preventDefault();
	} else {
		evt.returnValue = false;
	}
	var thisForm = document.getElementById("tempCalculator");
	var thisFormInputs = thisForm.querySelectorAll("input");
	thisFormInputs.forEach(i => {i.value = "";i.checked=false;})
}

function calcTemp(evt) {
	if (evt.preventDefault) {
		evt.preventDefault();
	} else {
		evt.returnValue = false;
	}
	var CtoF = document.getElementById("CtoF").checked;
	var FtoC = document.getElementById("FtoC").checked;
	var tempC = document.getElementById("tempC");
	var tempF = document.getElementById("tempF");
	if (CtoF) {
		var tempIn = Math.round(tempC.value * 10) / 10;
		tempC.value = tempIn;
		tempF.value = Math.round(((tempIn * (9/5)) + 32) * 10) / 10;
	} else if (FtoC) {
		var tempIn = Math.round(tempF.value * 10) / 10;
		tempF.value = tempIn;
		tempC.value = Math.round(((tempIn - 32) * (5/9)) * 10) / 10;
	} else {
		return false;
	}
}

function setTemp(temp,deg) {
	clearFields("click");
	clearFields("onclick");
	if (deg == "C") {
		document.getElementById("tempC").value = temp;
		document.getElementById("CtoF").checked = true;
	} else {
		document.getElementById("tempF").value = temp;
		document.getElementById("FtoC").checked = true;
	}
}

var button1 = document.getElementById("clearButton");
var button2 = document.getElementById("calcButton");

if (button1.addEventListener) {
	button1.addEventListener("click", clearFields, false);
	button2.addEventListener("click", calcTemp, false);
}
if (button1.attachEvent) {
	button1.attachEvent("onclick", clearFields);		
	button2.attachEvent("onclick", calcTemp);		
}

