/*    JavaScript 6th Edition
 *    Chapter 9
 *    Chapter case

 *    Eating Well in Season 
 *    Author: Rich Chaffino
 *    Date:   14 July 2020

 *    Filename: script3.js
 */

"use strict";

// global variables

/*
function parseData() {
	var formData = decodeURIComponent(location.search);
	var formArrray = [];
	var list = document.querySelector("div.results ul");
	formData = formData.substring(1, formData.length);
	while (formData.indexOf("+") !== -1) {
		formData = formData.replace("+", " ");
	}
	formData = decodeURIComponent(formData);
	formArrray = formData.split("&");
	for (var i = 0; i < formArrray.length; i++) {
		var newItem = document.createElement("li");
		newItem.innerHTML = formArrray[i];
		list.appendChild(newItem);
	}
}
*/

function parseData() {
	var formData = document.cookie;
	var formArrray = [];
	var list = document.querySelector("div.results ul");
	formArrray = formData.split("; ");
	for (var i = 0; i < formArrray.length; i++) {
		var newItem = document.createElement("li");
		newItem.innerHTML = formArrray[i];
		list.appendChild(newItem);
	}
}

if (window.addEventListener) {
	window.addEventListener("load", parseData, false);
} else if (window.attachEvent) {
	window.attachEvent("onload", parseData);
}