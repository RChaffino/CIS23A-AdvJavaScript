/*    
 *	Author:		Rich Chaffino
 *	Instructor:	Dr. Mandyam
 *	Class:		CIS 023A - Advanced JavaScript
 *	Date:   	15 July 2020
 *	Project:	Checkbook Digits to Text
 *	Filename:	project3.js
 */

"use scrict";

// global variables
var ckNum = 101;

const ones = ["zero","one","two","three","four","five","six","seven","eight","nine"];
const teens = ["ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
const tens = ["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];

var oneTo99 = ones.concat(teens);

for (i = 20; i < 100; i++) {
	oneTo99[i] = tens[Math.floor(i / 10)];
	if (i % 10 != 0) {
		oneTo99[i] += "-" + ones[i % 10];
	}
}

function showText(evt) {
	if (evt.preventDefault) {
		evt.preventDefault();
	} else {
		evt.returnValue = false;
	}
	
	var amt = amountField.value;
	var t = "-----";

	if (isNaN(amt) || amt == "") {
		document.getElementById("amount").value = "0.00";
		document.getElementById("amountText").value = "zero dollars";
		return false;
	}

	amt *= 1;					// to number
	amt *= 100;					// to integer
	amt = Math.round(amt);		// remove extra decimals
	amt %= 100000;				// remove anything over $1000
	var dollars = Math.floor(amt / 100);
	var cents = amt % 100;
	
	if (dollars >= 100) {
		t += oneTo99[Math.floor(dollars / 100)] + " hundred";
	}

	if (dollars % 100 !== 0 || dollars == 0) {
		t += " " + oneTo99[dollars % 100];
	}

	if (dollars == 1) {
		t += " dollar";
	} else {
		t += " dollars";
	}

	if (cents == 1) {
		t += " and " + oneTo99[cents] + " cent";
	} else if (cents !== 0) {
		t += " and " + oneTo99[cents] + " cents";
	}

	var ckNumText = "Check #" + ckNum;
	ckNum++;
	document.getElementById("checkNum").innerHTML = ckNumText;
	
	document.getElementById("amount").value = (amt/100).toFixed(2);
	document.getElementById("amountText").value = t;

	if (t.length > 62) {
		document.getElementById("amountText").style.fontSize = "15px";
	} else if (t.length > 56) {	//143.91
		document.getElementById("amountText").style.fontSize = "16px";
	} else if (t.length > 48) {	//24.73
		document.getElementById("amountText").style.fontSize = "18px";
	} else if (t.length > 42) { //17.17
		document.getElementById("amountText").style.fontSize = "21px";
	} else if (t.length > 36) { //17.02
		document.getElementById("amountText").style.fontSize = "24px";
	} else {
		document.getElementById("amountText").style.fontSize = "28px";
	}		
}

var amountField = document.getElementById("amount");

if (amountField.addEventListener) {
	amountField.addEventListener("blur", showText, false);
}
if (amountField.attachEvent) {
	amountField.attachEvent("onblur", showText);		
}

