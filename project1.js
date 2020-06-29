/*    
 *	Author:		Rich Chaffino
 *	Instructor:	Dr. Mandyam
 *	Class:		CIS 023A - Advanced JavaScript
 *	Date:   	24 June 2020
 *	Project:	Bit of C0D3: Casino Games Training
 *	Filename:	projects.js
 */

"use scrict";

function clearFields(evt) {
	if (evt.preventDefault) {
		evt.preventDefault();
	} else {
		evt.returnValue = false;
	}
	var thisForm = document.getElementById("formRevGUI");
	var thisFormInputs = thisForm.querySelectorAll("input");
	thisFormInputs.forEach(i => {i.value = "";})
}

function showReverse(evt) {
	if (evt.preventDefault) {
		evt.preventDefault();
	} else {
		evt.returnValue = false;
	}
	var numberIn = document.getElementById("yourNumber").value;
	// Math method will lose leading zeros when (yourNumber % 10 == 0)
	// String method will preserve the zeros
	var numberOut = document.getElementById("myNumber");
	if (!isNaN(numberIn)) {
		var str = numberIn.toString();
		var arr = str.split("");
		var revStr = arr.reduceRight((a,b) => a + b);
		numberOut.value = revStr;
	}
}

var button1 = document.getElementById("clearButton");
var button2 = document.getElementById("showButton");

if (button1.addEventListener) {
	button1.addEventListener("click", clearFields, false);
	button2.addEventListener("click", showReverse, false);
}
if (button1.attachEvent) {
	button1.attachEvent("onclick", clearFields);		
	button2.attachEvent("onclick", showReverse);		
}

