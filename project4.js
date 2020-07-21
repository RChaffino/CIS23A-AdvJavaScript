/*    
 *	Author:		Rich Chaffino
 *	Instructor:	Dr. Mandyam
 *	Class:		CIS 023A - Advanced JavaScript
 *	Date:   	20 July 2020
 *	Project:	4 Function Calculator
 *	Filename:	project4.js
 */

"use scrict";

function clearFields(evt) {
	if (evt.preventDefault) {
		evt.preventDefault();
	} else {
		evt.returnValue = false;
	}
	var thisForm = document.getElementById("calcForm");
	var thisFormInputs = thisForm.querySelectorAll("input");
	thisFormInputs.forEach(i => {i.value = "0";i.checked=false;});
	document.getElementById("add").checked = true;
	changeSign("click");
	changeSign("onclick");
}

function changeSign(evt) {
	document.getElementById("result").value = "";
	document.getElementById("equal").value = "&equals;";

	if (document.getElementById("add").checked) {
		document.getElementById("sign").innerHTML = "&plus;";
	}
	if (document.getElementById("subtract").checked) {
		document.getElementById("sign").innerHTML = "&minus;";
	}
	if (document.getElementById("multiply").checked) {
		document.getElementById("sign").innerHTML = "&times;";
	}
	if (document.getElementById("divide").checked) {
		document.getElementById("sign").innerHTML = "&divide;";
	}
}

function calcResult(evt) {
	if (evt.preventDefault) {
		evt.preventDefault();
	} else {
		evt.returnValue = false;
	}

	var arg1 = document.getElementById("argument1").value;
	var arg2 = document.getElementById("argument2").value;
	document.getElementById("equal").innerHTML = "&equals;";

	if (isNaN(arg1) || arg1 == "" || isNaN(arg2) || arg2 == "") {
		if (isNaN(arg1) || arg1 == "") {
			document.getElementById("argument1").value = "";
		}
		if (isNaN(arg2) || arg2 == "") {
			document.getElementById("argument2").value = "";
		}
		return false;
	} else {
		arg1 = Math.round(arg1);
		arg1 %= 1000;
		arg1 = Math.abs(arg1);
		arg2 = Math.round(arg2);
		arg2 %= 1000;
		arg2 = Math.abs(arg2);
		document.getElementById("argument1").value = arg1;
		document.getElementById("argument2").value = arg2;
	}
	
	var add = document.getElementById("add").checked;
	var subtract = document.getElementById("subtract").checked;
	var multiply = document.getElementById("multiply").checked;
	var divide = document.getElementById("divide").checked;

	if (divide && arg2 == 0) {
		document.getElementById("argument2").value = "";
		return false;
	}
	if (add) {
		document.getElementById("result").value = arg1 + arg2;
	}
	if (subtract) {
		document.getElementById("result").value = arg1 - arg2;
	}
	if (multiply) {
		document.getElementById("result").value = arg1 * arg2;
	}
	if (divide) {
		if (Number.isInteger(arg1 / arg2 * 100)) {
			document.getElementById("result").value = arg1 / arg2;
		} else {
			document.getElementById("result").value = (arg1 / arg2).toFixed(2);
			document.getElementById("equal").innerHTML = "&asymp;";
		}
	}
}

var button1 = document.getElementById("calcButton");
var button2 = document.getElementById("clearButton");
var arg1 = document.getElementById("argument1");
var arg2 = document.getElementById("argument2");
var signs = document.querySelectorAll("input[type='radio']");

if (button1.addEventListener) {
	button1.addEventListener("click", calcResult, false);
	button2.addEventListener("click", clearFields, false);
	arg1.addEventListener("focus", changeSign, false);
	arg2.addEventListener("focus", changeSign, false);
	for (var i = 0; i < signs.length; i++) {
		signs[i].addEventListener("click", changeSign, false);
	}
}
if (button1.attachEvent) {
	button1.attachEvent("onclick", calcResult);		
	button2.attachEvent("onclick", clearFields);		
	arg1.attachEvent("onfocus", changeSign);		
	arg2.attachEvent("onfocus", changeSign);		
	for (var i = 0; i < signs.length; i++) {
		signs[i].attachEvent("click", changeSign);
	}
}

